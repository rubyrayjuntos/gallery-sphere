// src/components/UIControls.jsx
import React, { useContext } from 'react';
import { ConfigContext } from '../App';

export function UIControls() {
  const { config } = useContext(ConfigContext);

  // Add global event listener to debug events
  React.useEffect(() => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const handlePointerDown = (e) => {
        console.log('Global canvas pointerdown:', { 
          clientX: e.clientX, 
          clientY: e.clientY, 
          button: e.button,
          target: e.target 
        });
      };
      
      canvas.addEventListener('pointerdown', handlePointerDown);
      
      return () => {
        canvas.removeEventListener('pointerdown', handlePointerDown);
      };
    }
  }, []);

  const simulateLeftArrow = () => {
    console.log('Test button clicked - starting simulation');
    
    // Create a synthetic mouse event to simulate left arrow movement
    const canvas = document.querySelector('canvas');
    if (!canvas) {
      console.log('No canvas found!');
      return;
    }

    console.log('Canvas found, getting rect...');
    // Get canvas rect for coordinate conversion
    const rect = canvas.getBoundingClientRect();
    console.log('Canvas rect:', rect);
    
    // Simulate mouse down at center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    console.log('Simulating events at:', { centerX, centerY });
    
    // Create mouse down event
    const mouseDownEvent = new MouseEvent('pointerdown', {
      clientX: centerX,
      clientY: centerY,
      button: 0,
      bubbles: true,
      cancelable: true
    });
    
    // Create mouse move event (leftward movement)
    const mouseMoveEvent = new MouseEvent('pointermove', {
      clientX: centerX - 50, // Move 50px to the left
      clientY: centerY,
      button: 0,
      bubbles: true,
      cancelable: true
    });
    
    // Create mouse up event
    const mouseUpEvent = new MouseEvent('pointerup', {
      clientX: centerX - 50,
      clientY: centerY,
      button: 0,
      bubbles: true,
      cancelable: true
    });
    
    console.log('Dispatching mouseDownEvent...');
    // Dispatch events in sequence
    const downResult = canvas.dispatchEvent(mouseDownEvent);
    console.log('mouseDownEvent dispatched, result:', downResult);
    
    setTimeout(() => {
      console.log('Dispatching mouseMoveEvent...');
      const moveResult = canvas.dispatchEvent(mouseMoveEvent);
      console.log('mouseMoveEvent dispatched, result:', moveResult);
      setTimeout(() => {
        console.log('Dispatching mouseUpEvent...');
        const upResult = canvas.dispatchEvent(mouseUpEvent);
        console.log('mouseUpEvent dispatched, result:', upResult);
        console.log('Simulation complete');
      }, 100);
    }, 50);
    
    console.log('Simulated left arrow movement');
  };

  return (
    <div style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
      zIndex: 1000,
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ 
        background: 'rgba(0, 0, 0, 0.7)', 
        padding: '15px', 
        borderRadius: '8px',
        fontSize: '14px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
          Test Controls
        </div>
        <button
          onClick={simulateLeftArrow}
          style={{
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}
          onMouseEnter={(e) => e.target.style.background = '#45a049'}
          onMouseLeave={(e) => e.target.style.background = '#4CAF50'}
        >
          ← Test Sphere Movement
        </button>
        <div style={{ fontSize: '11px', opacity: 0.8 }}>
          Simulates left arrow drag
        </div>
        
        <button
          onClick={() => {
            console.log('Direct torque test clicked');
            // Try to find the physics body directly
            const canvas = document.querySelector('canvas');
            if (canvas) {
              // Dispatch a custom event that the physics system can listen for
              const torqueEvent = new CustomEvent('applyTorque', {
                detail: { x: 0, y: 10, z: 0 }
              });
              canvas.dispatchEvent(torqueEvent);
              console.log('Direct torque event dispatched');
            }
          }}
          style={{
            background: '#2196F3',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            marginTop: '5px'
          }}
          onMouseEnter={(e) => e.target.style.background = '#1976D2'}
          onMouseLeave={(e) => e.target.style.background = '#2196F3'}
        >
          🔄 Direct Torque Test
        </button>
        <div style={{ fontSize: '11px', opacity: 0.8 }}>
          Applies torque directly
        </div>
      </div>
    </div>
  );
} 