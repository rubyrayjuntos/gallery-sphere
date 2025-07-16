// src/App.jsx
import React, { createContext, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import { Environment } from '@react-three/drei';

import { SphereGallery } from './components/SphereGallery';
import { UIControls } from './components/UIControls';
import { DetailViewport } from './components/DetailViewport';
import { useConfigLoader } from './utils/dataLoader';
import { PhysicsStepper } from './hooks/useSpherePhysics';

import './index.css';

// Extend ConfigContext to include physics control
export const ConfigContext = createContext(null);

function App() {
  const { config, loading, error } = useConfigLoader();
  const [currentConfig, setCurrentConfig] = useState(null);
  const [isPhysicsPaused, setIsPhysicsPaused] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState(null);

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
    return null;
  }

  const configContextValue = {
    config: currentConfig,
    setCurrentConfig,
    isPhysicsPaused,
    setIsPhysicsPaused,
    selectedImageId,
    setSelectedImageId,
  };

  // Find the currently selected image's full data
  const currentCatalog = currentConfig.catalogs.find(
    (c) => c.id === currentConfig.appSettings.initialCatalogId
  );
  const fullSelectedImageData = selectedImageId
    ? currentCatalog?.images.find(img => img.name === selectedImageId)
    : null;
  const fullSelectedImageUrl = fullSelectedImageData
    ? `/images/${currentCatalog.folderName}/${fullSelectedImageData.file}`
    : null;

  return (
    <div className="App" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <ConfigContext.Provider value={configContextValue}>
        <Canvas
          camera={{ position: [0, 0, currentConfig.appSettings.sphereRadius * 2], fov: 60 }}
          dpr={[1, 2]}
          shadows
        >
          <Perf position="top-left" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
          <Environment preset="city" background />
          <PhysicsStepper />
          <SphereGallery />
        </Canvas>
        <UIControls />
        
        {/* Control Instructions Overlay */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          background: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '15px',
          borderRadius: '8px',
          fontSize: '14px',
          fontFamily: 'Arial, sans-serif',
          maxWidth: '300px',
          zIndex: 1000
        }}>
          <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Controls:</div>
          <div style={{ marginBottom: '5px' }}>• <strong>Drag sphere</strong> to rotate</div>
          <div style={{ marginBottom: '5px' }}>• <strong>Click image</strong> to view details</div>
          <div style={{ marginBottom: '5px' }}>• <strong>Mouse Wheel</strong> - Move focused image closer/further</div>
          <div style={{ fontSize: '12px', opacity: '0.8', marginTop: '8px' }}>
            Spin the globe to position images in front of the camera, then use mouse wheel to adjust image distance from sphere surface.
          </div>
        </div>

        <DetailViewport
            isOpen={selectedImageId !== null}
            imageUrl={fullSelectedImageUrl}
            imageName={fullSelectedImageData?.name}
        />
      </ConfigContext.Provider>
    </div>
  );
}

export default App;
