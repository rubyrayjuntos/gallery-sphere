import { useRef, useCallback, useContext, useMemo, useState } from 'react'; // Added useState
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { useThree, useFrame } from '@react-three/fiber';
import { ConfigContext } from '../App';

const INTERACTION_THRESHOLDS = {
  DRAG_THRESHOLD_SQ: 0.01, // Squared distance to distinguish click from drag
  TAP_DURATION_MS: 200,   // Max duration for a "short touch" to NOT be considered a drag
  // Removed DOUBLE_TAP_INTERVAL_MS as we're no longer using double-click
};

/**
 * Custom hook to manage interactions with image planes on the sphere.
 * @param {React.RefObject<THREE.InstancedMesh>} instancedMeshRef - Ref to the InstancedMesh.
 * @param {number} sphereRadius - Radius of the main sphere.
 * @param {CANNON.Body} spherePhysicsBody - The Cannon.js body of the main sphere (for coordinated movement).
 * @returns {object} Event handlers for pointer events on the InstancedMesh.
 */
export function useImageInteractions(instancedMeshRef, sphereRadius, spherePhysicsBody) {
  const { gl, camera } = useThree(); // No need for 'scene' unless used elsewhere
  const { config } = useContext(ConfigContext);

  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const mouse = useMemo(() => new THREE.Vector2(), []);
  const sphereCenter = useMemo(() => new THREE.Vector3(0, 0, 0), []); // Assuming sphere is at origin
  const mainSphere = useMemo(() => new THREE.Sphere(sphereCenter, sphereRadius), [sphereRadius, sphereCenter]);

  // Interaction state
  const isDraggingImage = useRef(false);
  const dragStartIndex = useRef(null);
  const dragStartPoint = useRef(new THREE.Vector3());
  const pointerDownTime = useRef(0);
  // Removed lastClickTime as we're no longer detecting double-clicks
  const [currentlyEnlargedImage, setCurrentlyEnlargedImage] = useState(null); // Changed to useState!

  // Dummy object for manipulating instance transforms
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Animation functions using Tween.js
  // Updated animateImage to handle targetScale directly, without a separate "popOutDistance" for enlargement
  const animateImage = useCallback((index, targetPosition, targetScale, onComplete = () => {}) => {
    if (!instancedMeshRef.current || index === null) return;

    // Mark image as being interacted with
    if (instancedMeshRef.current.markImageInteracting) {
      instancedMeshRef.current.markImageInteracting(index, true);
    }

    instancedMeshRef.current.getMatrixAt(index, dummy.matrix);
    dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale);

    const initialPosition = dummy.position.clone();
    const initialScale = dummy.scale.clone();
    const initialQuaternion = dummy.quaternion.clone();

    new TWEEN.Tween(initialPosition)
      .to(targetPosition, 300)
      .easing(TWEEN.Easing.Quadratic.Out)
      .onUpdate(() => {
        dummy.position.copy(initialPosition);
        dummy.scale.copy(initialScale); // Preserve scale during position change
        dummy.quaternion.copy(initialQuaternion); // Preserve rotation during position change
        dummy.updateMatrix();
        instancedMeshRef.current.setMatrixAt(index, dummy.matrix);
        instancedMeshRef.current.instanceMatrix.needsUpdate = true;
      })
      .onComplete(() => {
        // Mark image as no longer being interacted with
        if (instancedMeshRef.current.markImageInteracting) {
          instancedMeshRef.current.markImageInteracting(index, false);
        }
        onComplete();
      })
      .start();

    new TWEEN.Tween(initialScale)
      .to(targetScale, 300)
      .easing(TWEEN.Easing.Quadratic.Out)
      .onUpdate(() => {
        dummy.position.copy(initialPosition); // Preserve position during scale change
        dummy.scale.copy(initialScale);
        dummy.quaternion.copy(initialQuaternion);
        dummy.updateMatrix();
        instancedMeshRef.current.setMatrixAt(index, dummy.matrix);
        instancedMeshRef.current.instanceMatrix.needsUpdate = true;
      })
      .start();
  }, [instancedMeshRef, dummy, sphereRadius]); // sphereRadius affects targetPosition calculation

  const resetImagePositionAndScale = useCallback((index, originalMatrix, onComplete = () => {}) => {
    if (!instancedMeshRef.current || index === null) return;

    // Mark image as being interacted with
    if (instancedMeshRef.current.markImageInteracting) {
      instancedMeshRef.current.markImageInteracting(index, true);
    }

    instancedMeshRef.current.getMatrixAt(index, dummy.matrix);
    dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale);

    const currentPosition = dummy.position.clone();
    const currentScale = dummy.scale.clone();
    const currentQuaternion = dummy.quaternion.clone();

    const originalDummy = new THREE.Object3D();
    originalDummy.matrix.copy(originalMatrix);
    originalDummy.matrix.decompose(originalDummy.position, originalDummy.quaternion, originalDummy.scale);

    new TWEEN.Tween(currentPosition)
      .to(originalDummy.position, 300)
      .easing(TWEEN.Easing.Quadratic.Out)
      .onUpdate(() => {
        dummy.position.copy(currentPosition);
        dummy.scale.copy(currentScale);
        dummy.quaternion.copy(currentQuaternion);
        dummy.updateMatrix();
        instancedMeshRef.current.setMatrixAt(index, dummy.matrix);
        instancedMeshRef.current.instanceMatrix.needsUpdate = true;
      })
      .onComplete(() => {
        // Mark image as no longer being interacted with
        if (instancedMeshRef.current.markImageInteracting) {
          instancedMeshRef.current.markImageInteracting(index, false);
        }
        onComplete();
      })
      .start();

    new TWEEN.Tween(currentScale)
      .to(originalDummy.scale, 300)
      .easing(TWEEN.Easing.Quadratic.Out)
      .onUpdate(() => {
        dummy.position.copy(currentPosition);
        dummy.scale.copy(currentScale);
        dummy.quaternion.copy(currentQuaternion);
        dummy.updateMatrix();
        instancedMeshRef.current.setMatrixAt(index, dummy.matrix);
        instancedMeshRef.current.instanceMatrix.needsUpdate = true;
      })
      .start();
  }, [instancedMeshRef, dummy]);

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
    }
  }, [gl, camera, instancedMeshRef, raycaster, mouse]);

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
      }
    }

    if (isDraggingImage.current) {
      // If dragging, we should always reset any enlarged image state
      if (currentlyEnlargedImage !== null) { // Use state value directly
          const prevIndex = currentlyEnlargedImage;
          const originalMatrix = instancedMeshRef.current.userData[prevIndex];
          if (originalMatrix) resetImagePositionAndScale(prevIndex, originalMatrix);
          setCurrentlyEnlargedImage(null); // Set state to null
      }

      // Mark image as being interacted with
      if (instancedMeshRef.current.markImageInteracting) {
        instancedMeshRef.current.markImageInteracting(dragStartIndex.current, true);
      }

      const sphereIntersect = raycaster.ray.intersectSphere(mainSphere);

      if (sphereIntersect) {
        const newPos = sphereIntersect.clone();

        instancedMeshRef.current.getMatrixAt(dragStartIndex.current, dummy.matrix);
        dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale);

        const currentScale = dummy.scale.clone();

        const newQuaternion = new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 0, 1),
          newPos.clone().normalize()
        ).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI));

        dummy.position.copy(newPos);
        dummy.quaternion.copy(newQuaternion);
        dummy.scale.copy(currentScale);
        dummy.updateMatrix();
        instancedMeshRef.current.setMatrixAt(dragStartIndex.current, dummy.matrix);
        instancedMeshRef.current.instanceMatrix.needsUpdate = true;
      }
    }
  }, [gl, camera, instancedMeshRef, raycaster, mouse, mainSphere, dummy, dragStartPoint, resetImagePositionAndScale, currentlyEnlargedImage, setCurrentlyEnlargedImage]); // Added currentlyEnlargedImage and setCurrentlyEnlargedImage to deps

  const onPointerUp = useCallback((event) => {
    if (dragStartIndex.current === null) return;

    const duration = Date.now() - pointerDownTime.current;
    const index = dragStartIndex.current;

    console.log(`Image interaction: PointerUp on index ${index}, duration: ${duration}ms, isDragging: ${isDraggingImage.current}`);

    if (!isDraggingImage.current) { // It's a click/tap (not a drag)
      if (duration < INTERACTION_THRESHOLDS.TAP_DURATION_MS) { // It's a short touch (aka a "click" for enlarge/revert)
        console.log(`Image interaction: CLICK DETECTED on index ${index}`);

        if (currentlyEnlargedImage === index) { // Use state value directly
          // If it's the same image and it's currently enlarged, revert it
          console.log(`Image interaction: Reverting enlarged image ${index}`);
          const originalMatrix = instancedMeshRef.current.userData[index];
          if (originalMatrix) {
            resetImagePositionAndScale(index, originalMatrix, () => {
              setCurrentlyEnlargedImage(null); // Set state to null on completion
              console.log(`Image interaction: Image ${index} reverted, currentlyEnlargedImage reset.`);
            });
          }
        } else {
          // If it's a new image to enlarge, or no image is currently enlarged
          console.log(`Image interaction: Enlarging new image ${index}. Previously enlarged: ${currentlyEnlargedImage}`);
          // First, reset any previously enlarged image
          if (currentlyEnlargedImage !== null) { // Use state value directly
            const prevIndex = currentlyEnlargedImage;
            const originalMatrix = instancedMeshRef.current.userData[prevIndex];
            if (originalMatrix) resetImagePositionAndScale(prevIndex, originalMatrix);
          }
          // Store original matrix before modifying
          const originalMatrix = new THREE.Matrix4();
          instancedMeshRef.current.getMatrixAt(index, originalMatrix);
          if (!instancedMeshRef.current.userData) instancedMeshRef.current.userData = {};
          instancedMeshRef.current.userData[index] = originalMatrix.clone(); // Store a clone

          // Calculate target position for enlargement (popped out from sphere surface)
          instancedMeshRef.current.getMatrixAt(index, dummy.matrix); // Get current position
          dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale);
          const directionFromCenter = dummy.position.clone().normalize();
          const targetPosition = directionFromCenter.multiplyScalar(sphereRadius + config.appSettings.imagePopOutDistance * 2); // Pop out more for enlarge

          animateImage(
            index,
            targetPosition, // New target position
            new THREE.Vector3(config.appSettings.imageEnlargeScale, config.appSettings.imageEnlargeScale, 1) // Target scale
          );
          setCurrentlyEnlargedImage(index); // Set state immediately after starting animation
          console.log(`Image interaction: Image ${index} enlarged. currentlyEnlargedImage set.`);
        }
      }
    }

    // Mark image as no longer being interacted with if it was being dragged
    if (isDraggingImage.current && instancedMeshRef.current.markImageInteracting) {
      instancedMeshRef.current.markImageInteracting(index, false);
    }

    dragStartIndex.current = null;
    isDraggingImage.current = false;
    console.log(`Image interaction: Drag/click state reset for index ${index}`);
  }, [instancedMeshRef, sphereRadius, dummy, animateImage, resetImagePositionAndScale, config.appSettings, currentlyEnlargedImage, setCurrentlyEnlargedImage]); // Added currentlyEnlargedImage and setCurrentlyEnlargedImage to deps

  // Ensure TWEEN.update() is still running
  useFrame(() => {
    TWEEN.update();
  });

  return { onPointerDown, onPointerMove, onPointerUp };
} 