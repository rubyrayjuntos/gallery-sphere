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
  const [selectedImage, setSelectedImage] = useState(null);
  const [detailMode, setDetailMode] = useState(false);
  const [physicsEnabled, setPhysicsEnabled] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCatalog, setSelectedCatalog] = useState('all');
  const [selectedSphere, setSelectedSphere] = useState('textured');

  useEffect(() => {
    if (config) {
      console.log('Config loaded successfully:', config);
      setCurrentConfig(config);
    }
  }, [config]);

  // Show loading spinner
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        color: 'white', 
        backgroundColor: '#1a1a1a',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{ fontSize: '18px', marginBottom: '20px' }}>Loading Interactive 3D Gallery...</div>
        <div style={{ 
          width: '50px', 
          height: '50px', 
          border: '3px solid #f3f3f3', 
          borderTop: '3px solid #3498db', 
          borderRadius: '50%', 
          animation: 'spin 1s linear infinite' 
        }}></div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // Show detailed error information
  if (error) {
    console.error('App error:', error);
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        color: '#ff6b6b', 
        backgroundColor: '#1a1a1a',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h2 style={{ margin: '0 0 20px 0' }}>Configuration Loading Error</h2>
        <p style={{ marginBottom: '10px', fontSize: '16px' }}>
          Failed to load application configuration
        </p>
        <p style={{ 
          marginBottom: '20px', 
          fontSize: '14px', 
          color: '#ccc',
          maxWidth: '600px'
        }}>
          Error: {error.message}
        </p>
        <button 
          onClick={() => window.location.reload()} 
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  // Show message if config is not available
  if (!currentConfig) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        color: 'white', 
        backgroundColor: '#1a1a1a',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div>Initializing 3D Gallery...</div>
      </div>
    );
  }

  const configContextValue = {
    ...currentConfig,
    selectedImage,
    setSelectedImage,
    detailMode,
    setDetailMode,
    physicsEnabled,
    setPhysicsEnabled,
    searchTerm,
    setSearchTerm,
    selectedCatalog,
    setSelectedCatalog,
    selectedSphere,
    setSelectedSphere
  };

  return (
    <ConfigContext.Provider value={configContextValue}>
      <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        {detailMode ? (
          <DetailViewport />
        ) : (
          <>
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
              <Environment preset="studio" />
              <Perf position="top-left" />
              <SphereGallery />
              <PhysicsStepper />
            </Canvas>
            <UIControls />
          </>
        )}
      </div>
    </ConfigContext.Provider>
  );
}

export default App;
