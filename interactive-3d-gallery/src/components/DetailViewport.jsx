import React, { useContext, useCallback, useRef, useEffect } from 'react';
import { ConfigContext } from '../App';

export function DetailViewport({ isOpen, imageUrl, imageName }) {
  const { setSelectedImageId, setIsPhysicsPaused } = useContext(ConfigContext);
  const panelRef = useRef(); // Ref for the panel div to detect clicks inside

  const handleClose = useCallback(() => {
    setSelectedImageId(null); // Clear selected image ID
    setIsPhysicsPaused(false); // Resume physics
    console.log("DetailViewport: Closed. Physics resumed.");
  }, [setSelectedImageId, setIsPhysicsPaused]);

  // --- NEW LOGIC FOR CLOSING ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the panel is open AND the click is outside the panel
      if (isOpen && panelRef.current && !panelRef.current.contains(event.target)) {
        handleClose();
      }
    };

    const handleEscapeKey = (event) => {
      // If the panel is open AND Escape key is pressed
      if (isOpen && event.key === 'Escape') {
        handleClose();
      }
    };

    // Add event listeners when the component mounts or `isOpen` changes to `true`
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    // Cleanup function: Remove event listeners when component unmounts or `isOpen` changes to `false`
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, handleClose]); // Dependencies for useEffect

  return (
    <div 
      ref={panelRef} // Attach ref to the outermost panel div
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: isOpen ? 0 : -500, // Slide in from right
        width: '500px',
        backgroundColor: 'rgba(20, 20, 20, 0.9)',
        boxShadow: '-5px 0px 15px rgba(0,0,0,0.5)',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: 'white',
        zIndex: 20, // Ensure it's above Canvas and UIControls
        transition: 'right 0.3s ease-out', // CSS transition for smooth animation
        opacity: isOpen ? 1 : 0,
        transitionProperty: 'right, opacity',
      }}
    >
      {isOpen && ( // Only render content when panel is open
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ margin: 0 }}>{imageName || 'Image Details'}</h2>
            <button
              onClick={handleClose}
              style={{
                background: 'none',
                border: '1px solid white',
                color: 'white',
                fontSize: '18px',
                cursor: 'pointer',
                padding: '5px 10px',
                borderRadius: '5px',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              X
            </button>
          </div>
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={imageName} 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '80%', 
                objectFit: 'contain', 
                border: '1px solid #444',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
              }} 
            />
          ) : (
            <p>Loading image...</p>
          )}
          {/* Future: Add more details, manipulations, etc. */}
          <p style={{ marginTop: '20px', textAlign: 'center' }}>
            This is the detailed 2D view for <strong>{imageName}</strong>.
          </p>
          <div style={{ marginTop: '10px', fontSize: '14px', color: '#ccc', textAlign: 'center' }}>
            Click outside or press <kbd style={{ background: '#333', padding: '2px 6px', borderRadius: '3px', border: '1px solid #555' }}>ESC</kbd> to return to the 3D gallery.
          </div>
        </div>
      )}
    </div>
  );
} 