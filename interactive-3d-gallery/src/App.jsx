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
  const [diagnosticInfo, setDiagnosticInfo] = useState([]);

  // Add diagnostic logging
  useEffect(() => {
    const addDiagnostic = (message) => {
      const timestamp = new Date().toLocaleTimeString();
      setDiagnosticInfo(prev => [...prev, `${timestamp}: ${message}`]);
    };

    addDiagnostic('App component mounted');
    addDiagnostic(`Current URL: ${window.location.href}`);
    addDiagnostic(`User Agent: ${navigator.userAgent.substring(0, 100)}...`);
    
    if (loading) addDiagnostic('Loading configuration...');
    if (error) addDiagnostic(`Error: ${error.message}`);
    if (config) addDiagnostic('Configuration loaded successfully');
  }, [loading, error, config]);

  useEffect(() => {
    if (config) {
      console.log('Config loaded successfully:', config);
      setCurrentConfig(config);
      setDiagnosticInfo(prev => [...prev, `${new Date().toLocaleTimeString()}: Config set as currentConfig`]);
    }
  }, [config]);

  // Show loading spinner with mobile diagnostic info
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
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        overflow: 'auto'
      }}>
        <div style={{ fontSize: '18px', marginBottom: '20px', textAlign: 'center' }}>
          Loading Interactive 3D Gallery...
        </div>
        
        <div style={{ 
          width: '50px', 
          height: '50px', 
          border: '3px solid #f3f3f3', 
          borderTop: '3px solid #3498db', 
          borderRadius: '50%', 
          animation: 'spin 1s linear infinite',
          marginBottom: '30px'
        }}></div>

        {/* Mobile-friendly diagnostic info */}
        <div style={{
          backgroundColor: '#2a2a2a',
          padding: '15px',
          borderRadius: '8px',
          width: '100%',
          maxWidth: '500px',
          fontSize: '12px',
          maxHeight: '300px',
          overflow: 'auto'
        }}>
          <div style={{ fontWeight: 'bold', marginBottom: '10px', color: '#3498db' }}>
            Diagnostic Info:
          </div>
          {diagnosticInfo.map((info, index) => (
            <div key={index} style={{ marginBottom: '5px', color: '#ccc' }}>
              {info}
            </div>
          ))}
        </div>

        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // Show detailed error information for mobile
  if (error) {
    console.error('App error:', error);
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        minHeight: '100vh', 
        color: '#ff6b6b', 
        backgroundColor: '#1a1a1a',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        overflow: 'auto'
      }}>
        <h2 style={{ margin: '0 0 20px 0', textAlign: 'center' }}>
          🚨 Configuration Error
        </h2>
        
        <div style={{
          backgroundColor: '#2a1a1a',
          border: '2px solid #ff6b6b',
          borderRadius: '8px',
          padding: '20px',
          width: '100%',
          maxWidth: '500px',
          marginBottom: '20px'
        }}>
          <p style={{ marginBottom: '15px', fontSize: '16px', fontWeight: 'bold' }}>
            Failed to load application configuration
          </p>
          <p style={{ 
            marginBottom: '15px', 
            fontSize: '14px', 
            color: '#ff9999',
            wordBreak: 'break-word'
          }}>
            <strong>Error:</strong> {error.message}
          </p>
          <p style={{ 
            marginBottom: '15px', 
            fontSize: '14px', 
            color: '#ff9999',
            wordBreak: 'break-word'
          }}>
            <strong>URL:</strong> {window.location.href}
          </p>
        </div>

        {/* Mobile diagnostic info */}
        <div style={{
          backgroundColor: '#2a2a2a',
          padding: '15px',
          borderRadius: '8px',
          width: '100%',
          maxWidth: '500px',
          fontSize: '12px',
          marginBottom: '20px',
          maxHeight: '200px',
          overflow: 'auto'
        }}>
          <div style={{ fontWeight: 'bold', marginBottom: '10px', color: '#3498db' }}>
            Debug Information:
          </div>
          {diagnosticInfo.map((info, index) => (
            <div key={index} style={{ marginBottom: '5px', color: '#ccc' }}>
              {info}
            </div>
          ))}
        </div>

        <button 
          onClick={() => window.location.reload()} 
          style={{
            padding: '15px 30px',
            fontSize: '16px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginBottom: '20px'
          }}
        >
          🔄 Retry
        </button>

        {/* Quick diagnostic tests */}
        <div style={{
          backgroundColor: '#2a2a2a',
          padding: '15px',
          borderRadius: '8px',
          width: '100%',
          maxWidth: '500px',
          fontSize: '14px'
        }}>
          <div style={{ fontWeight: 'bold', marginBottom: '10px', color: '#3498db' }}>
            Quick Tests:
          </div>
          <button 
            onClick={async () => {
              try {
                const response = await fetch('/config.json');
                alert(`Config test: ${response.status} - ${response.ok ? 'OK' : 'FAILED'}`);
              } catch (e) {
                alert(`Config test failed: ${e.message}`);
              }
            }}
            style={{
              padding: '10px 15px',
              fontSize: '12px',
              backgroundColor: '#4a4a4a',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginRight: '10px',
              marginBottom: '10px'
            }}
          >
            Test Config File
          </button>
          <button 
            onClick={() => {
              alert(`Current URL: ${window.location.href}\nProtocol: ${window.location.protocol}\nHost: ${window.location.host}`);
            }}
            style={{
              padding: '10px 15px',
              fontSize: '12px',
              backgroundColor: '#4a4a4a',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom: '10px'
            }}
          >
            Show URL Info
          </button>
        </div>
      </div>
    );
  }

  // Show message if config is not available
  if (!currentConfig) {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        color: 'white', 
        backgroundColor: '#1a1a1a',
        fontFamily: 'Arial, sans-serif',
        padding: '20px'
      }}>
        <div style={{ marginBottom: '20px' }}>Initializing 3D Gallery...</div>
        
        {/* Show diagnostic info even when config is missing */}
        <div style={{
          backgroundColor: '#2a2a2a',
          padding: '15px',
          borderRadius: '8px',
          width: '100%',
          maxWidth: '400px',
          fontSize: '12px',
          maxHeight: '200px',
          overflow: 'auto'
        }}>
          <div style={{ fontWeight: 'bold', marginBottom: '10px', color: '#3498db' }}>
            Status:
          </div>
          {diagnosticInfo.map((info, index) => (
            <div key={index} style={{ marginBottom: '5px', color: '#ccc' }}>
              {info}
            </div>
          ))}
        </div>
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
