// src/components/PhysicsManager.jsx
import { useFrame } from '@react-three/fiber';
import * as CANNON from 'cannon-es';

// Global physics world instance
export const physicsWorld = new CANNON.World();
physicsWorld.gravity.set(0, 0, 0); // No gravity for a floating sphere
const timeStep = 1 / 60; // Fixed time step for physics simulation

export function PhysicsManager() {
  useFrame(() => {
    // Step the physics world once per frame
    physicsWorld.step(timeStep);
    
    // Debug: Log physics world state occasionally
    if (Math.random() < 0.001) { // Log ~0.1% of frames
      console.log('PhysicsManager: World stepped', {
        bodyCount: physicsWorld.bodies.length,
        time: physicsWorld.time
      });
    }
  });

  return null; // This component doesn't render anything
} 