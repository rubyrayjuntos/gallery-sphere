// src/hooks/useSpherePhysics.js
import { useRef, useEffect, useContext } from 'react';
import { useFrame } from '@react-three/fiber';
import * as CANNON from 'cannon-es';
import { ConfigContext } from '../App';

// Create a global physics world instance
const physicsWorld = new CANNON.World();
physicsWorld.gravity.set(0, 0, 0); // No gravity for a floating sphere
const timeStep = 1 / 60; // Fixed time step for physics simulation
let lastCallTime = performance.now() / 1000; // Use high-resolution time

// Keep track of all bodies in the world for a global step
const bodies = []; // Array to hold all physics bodies created by this hook

/**
 * Custom hook to apply physics to a Three.js mesh.
 * @param {React.RefObject<THREE.Mesh>} meshRef - Ref to the Three.js mesh.
 * @param {number} radius - Radius of the sphere for the physics body.
 * @param {number} mass - Mass of the sphere for physics calculations.
 * @param {number} wobbleIntensity - Intensity of the wobble effect.
 * @returns {CANNON.Body} The Cannon.js body instance.
 */
export function useSpherePhysics(meshRef, radius, mass = 1, wobbleIntensity) {
  const body = useRef(null);
  // No need to directly use config here as wobbleIntensity is passed as prop
  // const { config } = useContext(ConfigContext);

  useEffect(() => {
    if (!meshRef.current) return;

    // Create a Cannon.js sphere body
    const shape = new CANNON.Sphere(radius);
    const newBody = new CANNON.Body({ mass, shape });
    newBody.position.copy(meshRef.current.position);
    newBody.linearDamping = 0.9;
    newBody.angularDamping = 0.5;
    newBody.fixedRotation = false; // Allow rotation and wobble

    physicsWorld.addBody(newBody);
    bodies.push(newBody); // Add to our global list
    body.current = newBody;

    console.log('Sphere physics body initialized:', newBody.id);

    return () => {
      // Clean up: remove body from world when component unmounts
      if (physicsWorld.has(newBody)) {
        physicsWorld.removeBody(newBody);
        const index = bodies.indexOf(newBody);
        if (index > -1) {
          bodies.splice(index, 1); // Remove from global list
        }
      }
    };
  }, [meshRef, radius, mass]);

  useFrame(() => {
    if (meshRef.current && body.current) {
      // Apply a subtle, continuous oscillating force for "wobble"
      const wobbleForceX = Math.sin(Date.now() * 0.001) * wobbleIntensity;
      const wobbleForceY = Math.cos(Date.now() * 0.0015) * wobbleIntensity;
      const wobbleForceZ = Math.sin(Date.now() * 0.002) * wobbleIntensity;

      body.current.applyLocalForce(
        new CANNON.Vec3(wobbleForceX, wobbleForceY, wobbleForceZ),
        new CANNON.Vec3(0, 0, 0) // Apply force at the center of the body
      );

      // Synchronization will happen in PhysicsStepper only if not paused
      // For now, let's keep visual sync here, but the body's movement
      // will only be updated if PhysicsStepper is active.
      meshRef.current.position.copy(body.current.position);
      meshRef.current.quaternion.copy(body.current.quaternion);

      // Add console log for physics sync check
      // console.log("Sphere physics: Sync check", {
      //   physicsPos: body.current.position.toJSON(),
      //   meshPos: meshRef.current.position.toArray(),
      //   physicsQuat: body.current.quaternion.toJSON(),
      //   meshQuat: meshRef.current.quaternion.toArray(),
      //   angularVelocity: body.current.angularVelocity.toJSON()
      // });
    }
  });

  return body.current;
}

// Global useFrame to step the physics world once per frame
// This hook ensures that the physics simulation is updated regardless of
// whether the individual sphere is interacting or not.
export function PhysicsStepper() {
  const { isPhysicsPaused } = useContext(ConfigContext); // Access pause state

  useFrame(() => {
    if (isPhysicsPaused) {
      // console.log("Physics: PAUSED");
      return; // Do not step physics world if paused
    }

    const currentTime = performance.now() / 1000;
    let dt = currentTime - lastCallTime;
    lastCallTime = currentTime;

    // Max time step to prevent "spiraling to infinity" issues with large dt
    dt = Math.min(dt, 0.1);

    physicsWorld.step(timeStep, dt, 10); // step(fixedTimeStep, deltaTime, maxSubSteps)

    // console.log("PhysicsManager: World stepped", { bodyCount: physicsWorld.bodies.length, time: currentTime });
  });
  return null; // This component doesn't render anything
} 