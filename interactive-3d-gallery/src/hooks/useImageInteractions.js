import { useRef, useCallback, useContext, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { useThree, useFrame } from '@react-three/fiber';
import { ConfigContext } from '../App';

const INTERACTION_THRESHOLDS = {
  DRAG_THRESHOLD_SQ: 0.01,
  TAP_DURATION_MS: 200,
};

export function useImageInteractions(instancedMeshRef, sphereRadius, spherePhysicsBody) {
  const { gl, camera } = useThree();
  const { config, setIsPhysicsPaused, setSelectedImageId, selectedImageId, isPhysicsPaused } = useContext(ConfigContext);

  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const mouse = useMemo(() => new THREE.Vector2(), []);
  const sphereCenter = useMemo(() => new THREE.Vector3(0, 0, 0), []);
  const mainSphere = useMemo(() => new THREE.Sphere(sphereCenter, sphereRadius), [sphereRadius, sphereCenter]);

  const isDraggingImage = useRef(false);
  const dragStartIndex = useRef(null);
  const dragStartPoint = useRef(new THREE.Vector3());
  const pointerDownTime = useRef(0);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const originalMatrices = useRef(new Map());

  const [focusedImageIndex, setFocusedImageIndex] = useState(null);
  const imageCurrentZOffset = useRef(new Map()); // Stores current Z offset for each image

  // Adjust these values for desired Z-axis movement sensitivity and range
  const Z_OFFSET_STEP = 0.05; // How much the image moves per wheel scroll
  const MAX_Z_OFFSET = 3.0;   // Max distance from sphere surface
  const MIN_Z_OFFSET = 0.0;   // Min distance (flush with surface)

  const getOriginalMatrixForInstance = useCallback((index) => {
    if (!originalMatrices.current.has(index)) {
      const matrix = new THREE.Matrix4();
      if (instancedMeshRef.current) {
        instancedMeshRef.current.getMatrixAt(index, matrix);
        originalMatrices.current.set(index, matrix.clone());
      }
    }
    return originalMatrices.current.get(index);
  }, [instancedMeshRef]);

  const setInstanceVisibility = useCallback((index, visible) => {
      if (!instancedMeshRef.current || index === null) return;

      const currentMatrix = new THREE.Matrix4();
      instancedMeshRef.current.getMatrixAt(index, currentMatrix);
      dummy.matrix.copy(currentMatrix);
      dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale);

      const originalMatrix = getOriginalMatrixForInstance(index);
      const originalDummy = new THREE.Object3D();
      if (originalMatrix) {
          originalDummy.matrix.copy(originalMatrix);
          originalDummy.matrix.decompose(originalDummy.position, originalDummy.quaternion, originalDummy.scale);
      } else {
          originalDummy.scale.setScalar(config.appSettings.imagePlaneSize);
      }

      if (visible) {
          dummy.scale.copy(originalDummy.scale);
      } else {
          dummy.scale.setScalar(0.001); // Hide by scaling almost to zero
      }

      dummy.updateMatrix();
      instancedMeshRef.current.setMatrixAt(index, dummy.matrix);
      instancedMeshRef.current.instanceMatrix.needsUpdate = true;
  }, [instancedMeshRef, dummy, getOriginalMatrixForInstance, config.appSettings.imagePlaneSize]);

  const setPhysicsPauseState = useCallback((paused) => {
      setIsPhysicsPaused(paused);
      if (paused && spherePhysicsBody) {
          spherePhysicsBody.angularVelocity.set(0,0,0);
          spherePhysicsBody.velocity.set(0,0,0);
      }
  }, [setIsPhysicsPaused, spherePhysicsBody]);

  // This effect will run when the selectedImageId changes externally (e.g., by closing the DetailViewport)
  useEffect(() => {
    if (instancedMeshRef.current && instancedMeshRef.current.userData) {
      const currentCatalog = config.catalogs.find(c => c.id === config.appSettings.initialCatalogId);
      if (currentCatalog) {
          const totalImages = currentCatalog.images.length;
          for (let i = 0; i < totalImages; i++) {
              if (selectedImageId === null) {
                setInstanceVisibility(i, true);
              }
              // Reset Z-offset to 0 for all images when catalog changes or on initial load
              imageCurrentZOffset.current.set(i, 0);
          }
      }
    }
  }, [selectedImageId, instancedMeshRef, setInstanceVisibility, config.appSettings.initialCatalogId, config.catalogs]);

  const handleMouseWheel = useCallback((event) => {
    event.preventDefault(); // Prevent page scrolling

    // Only move image Z-axis if an image is focused
    if (focusedImageIndex === null) return;

    // Ensure physics is paused during this precise Z-axis animation
    setPhysicsPauseState(true);

    const originalMatrix = getOriginalMatrixForInstance(focusedImageIndex);
    if (!originalMatrix) return;

    // Note: dummy.position, dummy.quaternion, dummy.scale are updated in the onUpdate of the tween
    // but here we get the current "base" position from original matrix
    dummy.matrix.copy(originalMatrix);
    dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale);

    const directionFromCenter = dummy.position.clone().normalize();
    let currentOffset = imageCurrentZOffset.current.get(focusedImageIndex) || 0;

    if (event.deltaY < 0) { // Scroll up (move image out)
      currentOffset = Math.min(currentOffset + Z_OFFSET_STEP, MAX_Z_OFFSET);
    } else { // Scroll down (move image in)
      currentOffset = Math.max(currentOffset - Z_OFFSET_STEP, MIN_Z_OFFSET);
    }

    imageCurrentZOffset.current.set(focusedImageIndex, currentOffset); // Update current offset

    const newPosition = directionFromCenter.multiplyScalar(sphereRadius + currentOffset);

    // Animate the image to its new Z-offset position
    new TWEEN.Tween(dummy.position)
      .to(newPosition, 100) // Quick animation
      .easing(TWEEN.Easing.Quadratic.Out)
      .onUpdate(() => {
        // Reapply original rotation (always face outwards) - assuming it's part of dummy.quaternion
        // Reapply scale based on current offset - assuming it's part of dummy.scale
        dummy.updateMatrix();
        instancedMeshRef.current.setMatrixAt(focusedImageIndex, dummy.matrix);
        instancedMeshRef.current.instanceMatrix.needsUpdate = true;
      })
      .onComplete(() => {
         // Physics resume is handled by other interactions (drag, click outside, keyup)
         // or by the useFrame enforcement when the user stops interacting.
      })
      .start();

    // Optional: Scale image slightly when popped out
    const targetScale = currentOffset > MIN_Z_OFFSET ? 
      new THREE.Vector3(config.appSettings.imagePlaneSize * 1.2, config.appSettings.imagePlaneSize * 1.2, 1) : 
      new THREE.Vector3(config.appSettings.imagePlaneSize, config.appSettings.imagePlaneSize, 1);
    
    new TWEEN.Tween(dummy.scale)
        .to(targetScale, 100)
        .easing(TWEEN.Easing.Quadratic.Out)
        .start();

  }, [focusedImageIndex, instancedMeshRef, sphereRadius, dummy, getOriginalMatrixForInstance, config.appSettings.imagePlaneSize, setPhysicsPauseState]);

  useEffect(() => {
    gl.domElement.addEventListener('wheel', handleMouseWheel, { passive: false });
    return () => {
      gl.domElement.removeEventListener('wheel', handleMouseWheel);
    };
  }, [handleMouseWheel, gl.domElement]);

  const onPointerDown = useCallback((event) => {
    if (event.button !== 0) return;

    if (!camera || !gl.domElement) {
        console.warn('Camera or DOM element not ready for onPointerDown.');
        return;
    }

    mouse.x = (event.clientX / gl.domElement.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / gl.domElement.clientHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObject(instancedMeshRef.current);
    if (intersects.length > 0) {
      const instanceId = intersects[0].instanceId;
      dragStartIndex.current = instanceId;
      dragStartPoint.current.copy(intersects[0].point);
      isDraggingImage.current = false;
      pointerDownTime.current = Date.now();
      setFocusedImageIndex(instanceId); // Set this image as focused for Z-axis control
    } else {
        // If nothing is clicked, unfocus any image
        setFocusedImageIndex(null);
        // Additionally, if physics was paused for Z-control, resume it when unfocusing
        if (isPhysicsPaused) { // Check state before calling, to prevent unnecessary re-renders
            setPhysicsPauseState(false);
        }
    }
  }, [gl, camera, instancedMeshRef, raycaster, mouse, setFocusedImageIndex, isPhysicsPaused, setPhysicsPauseState]);

  const onPointerMove = useCallback((event) => {
    if (dragStartIndex.current === null) return;

    if (!camera || !gl.domElement) {
        console.warn('Camera or DOM element not ready for onPointerMove.');
        return;
    }

    mouse.x = (event.clientX / gl.domElement.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / gl.domElement.clientHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    if (!isDraggingImage.current) {
      const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(camera.getWorldDirection(new THREE.Vector3()).negate(), dragStartPoint.current);
      const currentPoint = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, currentPoint);

      if (currentPoint.distanceToSquared(dragStartPoint.current) > INTERACTION_THRESHOLDS.DRAG_THRESHOLD_SQ) {
        isDraggingImage.current = true;
        setFocusedImageIndex(null); // Unfocus image if dragging starts
        // Resume physics if it was paused for Z-control, as drag takes over
        if (isPhysicsPaused) {
            setPhysicsPauseState(false);
        }
      }
    }

    if (isDraggingImage.current) {
      if (isPhysicsPaused) { // This check should ideally be done by the drag state above
          setPhysicsPauseState(false); // Ensure physics is always resumed when dragging
      }

      const sphereIntersect = raycaster.ray.intersectSphere(mainSphere);

      if (sphereIntersect) {
        const newPos = sphereIntersect.clone();

        const currentOffset = imageCurrentZOffset.current.get(dragStartIndex.current) || 0;

        const originalMat = getOriginalMatrixForInstance(dragStartIndex.current);
        const originalDummyForDrag = new THREE.Object3D();
        if (originalMat) {
            originalDummyForDrag.matrix.copy(originalMat);
            originalDummyForDrag.matrix.decompose(originalDummyForDrag.position, originalDummyForDrag.quaternion, originalDummyForDrag.scale);
        }

        const directionFromCenter = newPos.clone().normalize();
        const finalPos = directionFromCenter.multiplyScalar(sphereRadius + currentOffset);

        const newQuaternion = new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 0, 1),
          finalPos.clone().normalize()
        ).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI));

        dummy.position.copy(finalPos);
        dummy.quaternion.copy(newQuaternion);
        dummy.scale.copy(originalDummyForDrag.scale);
        dummy.updateMatrix();
        instancedMeshRef.current.setMatrixAt(dragStartIndex.current, dummy.matrix);
        instancedMeshRef.current.instanceMatrix.needsUpdate = true;
      }
    }
  }, [gl, camera, instancedMeshRef, raycaster, mouse, mainSphere, dummy, dragStartPoint, isPhysicsPaused, setPhysicsPauseState, sphereRadius, imageCurrentZOffset, getOriginalMatrixForInstance, setFocusedImageIndex]);

  const onPointerUp = useCallback((event) => {
    if (dragStartIndex.current === null) return;

    const duration = Date.now() - pointerDownTime.current;
    const index = dragStartIndex.current;

    console.log(`Image interaction: PointerUp on index ${index}, duration: ${duration}ms, isDragging: ${isDraggingImage.current}`);

    if (!isDraggingImage.current) {
      if (duration < INTERACTION_THRESHOLDS.TAP_DURATION_MS) {
        console.log(`Image interaction: CLICK DETECTED on index ${index}`);

        const currentCatalog = config.catalogs.find(c => c.id === config.appSettings.initialCatalogId);
        const clickedImageName = currentCatalog?.images[index]?.name;
        const clickedImageOriginalMatrix = instancedMeshRef.current.userData[index];

        if (clickedImageName && clickedImageOriginalMatrix) {
          // NEW: No camera animation - just open the 2D viewport directly
          setSelectedImageId(clickedImageName);
          setPhysicsPauseState(true);
          setInstanceVisibility(index, false);
          console.log(`Image interaction: Image ${index} (${clickedImageName}) sent to 2D viewport. 3D instance hidden.`);
        } else {
          console.warn(`Image interaction: Could not find image data or original matrix for index ${index}.`);
        }
      }
    }

    dragStartIndex.current = null;
    isDraggingImage.current = false;
    console.log(`Image interaction: Drag/click state reset for index ${index}`);
  }, [config, setSelectedImageId, setPhysicsPauseState, instancedMeshRef, setInstanceVisibility, dragStartIndex, isDraggingImage]);

  useFrame(() => {
    TWEEN.update();

    // Continuously enforce Z-offset for the focused image
    // This is the "willpower" to keep it at the set Z-depth against physics/resetting
    if (focusedImageIndex !== null && !isDraggingImage.current) {
        const currentOffset = imageCurrentZOffset.current.get(focusedImageIndex) || 0;

        if (currentOffset > MIN_Z_OFFSET || imageCurrentZOffset.current.has(focusedImageIndex)) { // Also enforce if it was explicitly set to 0
            const originalMatrix = getOriginalMatrixForInstance(focusedImageIndex);
            if (originalMatrix) {
                dummy.matrix.copy(originalMatrix);
                dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale);

                const directionFromCenter = dummy.position.clone().normalize();
                const targetPosition = directionFromCenter.multiplyScalar(sphereRadius + currentOffset);

                dummy.position.copy(targetPosition); // Directly set position

                // Reapply original rotation (always face outwards)
                dummy.lookAt(sphereCenter);
                dummy.rotateY(Math.PI);

                // Reapply scale based on current offset
                const targetScale = currentOffset > MIN_Z_OFFSET ? 
                  new THREE.Vector3(config.appSettings.imagePlaneSize * 1.2, config.appSettings.imagePlaneSize * 1.2, 1) : 
                  new THREE.Vector3(config.appSettings.imagePlaneSize, config.appSettings.imagePlaneSize, 1);
                dummy.scale.copy(targetScale);

                dummy.updateMatrix();
                instancedMeshRef.current.setMatrixAt(focusedImageIndex, dummy.matrix);
                instancedMeshRef.current.instanceMatrix.needsUpdate = true;
            }
        }
    }
  });

  return { onPointerDown, onPointerMove, onPointerUp };
} 