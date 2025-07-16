import { useRef, useCallback, useContext, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as CANNON from 'cannon-es';
import * as TWEEN from '@tweenjs/tween.js';
import { ConfigContext } from '../App';

/**
 * Custom hook to manage user interaction (dragging) for spinning the main sphere.
 * @param {CANNON.Body} spherePhysicsBody - The Cannon.js body of the main sphere.
 */
export function useSphereInteraction(spherePhysicsBody) {
  const { gl } = useThree();
  const { config } = useContext(ConfigContext);

  const isDraggingSphere = useRef(false);
  const lastMouseX = useRef(0);
  const lastMouseY = useRef(0);

  // Sphere's maximum angular velocity to prevent tunneling at high speeds
  const MAX_ANGULAR_VELOCITY = 10;

  const onPointerDown = useCallback((event) => {
    console.log('Sphere interaction: onPointerDown received', { 
      button: event.button, 
      clientX: event.clientX, 
      clientY: event.clientY,
      spherePhysicsBody: !!spherePhysicsBody,
      target: event.target?.constructor?.name
    });
    
    if (event.button !== 0) return; // Only listen for left click/primary touch

    // Stop event propagation to prevent conflicts with image interactions
    event.stopPropagation();

    isDraggingSphere.current = true;
    lastMouseX.current = event.clientX;
    lastMouseY.current = event.clientY;

    // Optionally, stop any existing angular velocity for a more direct drag
    if (spherePhysicsBody) {
      spherePhysicsBody.angularVelocity.set(0, 0, 0);
      console.log('Sphere interaction: Angular velocity reset');
    }
  }, [spherePhysicsBody]);

  const onPointerMove = useCallback((event) => {
    if (!isDraggingSphere.current || !spherePhysicsBody) return;

    // Additional check: ensure the left mouse button is still pressed
    if (event.buttons !== undefined && (event.buttons & 1) === 0) {
      isDraggingSphere.current = false;
      return;
    }

    const deltaX = event.clientX - lastMouseX.current;
    const deltaY = event.clientY - lastMouseY.current;

    // Only apply torque if we have significant movement (prevents jitter)
    if (Math.abs(deltaX) < 1 && Math.abs(deltaY) < 1) return;

    console.log('Sphere interaction: onPointerMove', { 
      deltaX, 
      deltaY, 
      isDragging: isDraggingSphere.current,
      spherePhysicsBody: !!spherePhysicsBody 
    });

    // Apply torque based on mouse movement
    // Scale sensitivity from config.json
    // Direction mapping: drag up = forward rotation, drag left = left rotation
    const torqueX = deltaY * config.appSettings.dragSensitivity;
    const torqueY = deltaX * config.appSettings.dragSensitivity;

    const torqueVec = new CANNON.Vec3(torqueX, torqueY, 0); // Apply torque around X and Y axes

    spherePhysicsBody.applyTorque(torqueVec); // Apply a continuous torque
    console.log('Sphere interaction: Applied torque', { torqueX, torqueY, deltaX, deltaY });

    // Clamp angular velocity to prevent excessive speed and tunneling issues
    if (spherePhysicsBody.angularVelocity.length() > MAX_ANGULAR_VELOCITY) {
        spherePhysicsBody.angularVelocity.normalize();
        spherePhysicsBody.angularVelocity.scale(MAX_ANGULAR_VELOCITY, spherePhysicsBody.angularVelocity);
    }

    lastMouseX.current = event.clientX;
    lastMouseY.current = event.clientY;
  }, [spherePhysicsBody, config.appSettings.dragSensitivity]);

  const onPointerUp = useCallback((event) => {
    console.log('Sphere interaction: onPointerUp received', { 
      button: event?.button,
      isDragging: isDraggingSphere.current 
    });
    
    // Only stop dragging if it's the left mouse button or no specific button (general pointer up)
    if (!event || event.button === 0 || event.button === undefined) {
      isDraggingSphere.current = false;
      console.log('Sphere interaction: Drag state reset');
    }
  }, []);

  // Add global event listeners for pointer move/up, as events might go off the mesh
  useEffect(() => {
    gl.domElement.addEventListener('pointermove', onPointerMove);
    gl.domElement.addEventListener('pointerup', onPointerUp);

    return () => {
      gl.domElement.removeEventListener('pointermove', onPointerMove);
      gl.domElement.removeEventListener('pointerup', onPointerUp);
    };
  }, [gl, onPointerMove, onPointerUp]); // Re-attach listeners if functions change

  // We need to run TWEEN.update() in the R3F render loop for animations
  useFrame(() => {
    TWEEN.update();
  });

  return { onPointerDown }; // Only need to return onPointerDown for the mesh
} 