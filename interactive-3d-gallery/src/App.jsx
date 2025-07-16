// src/App.jsx
import React, { createContext, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import { Environment } from '@react-three/drei';

import { SphereGallery } from './components/SphereGallery';
import { UIControls } from './components/UIControls';
import { PhysicsStepper } from './hooks/useSpherePhysics'; // Import PhysicsStepper
import { useConfigLoader } from './utils/dataLoader'; // Import our new hook

import './index.css';

export const ConfigContext = createContext(null);

function App() {
  const { config, loading, error } = useConfigLoader();
  const [currentConfig, setCurrentConfig] = useState(null); // Local state to manage active config

  // Set currentConfig once the config is loaded
  useEffect(() => {
    if (config) {
      setCurrentConfig(config);
    }
  }, [config]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'white', backgroundColor: '#333' }}>
        Loading configuration...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'red', backgroundColor: '#333' }}>
        Error loading configuration: {error.message}
      </div>
    );
  }

  if (!currentConfig) {
    return null; // Or a more detailed loading state
  }

  // We'll pass `currentConfig` and `setCurrentConfig` down through context
  // This will allow `UIControls` to change the active catalog/sphere material
  // and for `SphereGallery` to react to those changes.
  const configContextValue = {
    config: currentConfig,
    setCurrentConfig, // Allow updating global config, e.g., changing active catalog/sphere
  };

  return (
    <div className="App" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <ConfigContext.Provider value={configContextValue}>
        <Canvas
          camera={{ position: [0, 0, currentConfig.appSettings.sphereRadius * 2], fov: 60 }}
          dpr={[1, 2]}
          shadows
          gl={{ antialias: true }}
          onError={(error) => {
            console.error('Canvas error:', error);
          }}
        >
          <Perf position="top-left" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
          <Environment preset="city" background />
          <PhysicsStepper /> {/* Add the global physics stepper */}
          <SphereGallery />
        </Canvas>
        <UIControls />
      </ConfigContext.Provider>
    </div>
  );
}

export default App;
