// src/hooks/useTextureLoader.js
import { useState, useEffect } from 'react';
import { TextureLoader } from 'three';

/**
 * Custom hook for safe texture loading with fallback handling
 * @param {string} texturePath - Path to the texture file
 * @returns {Object} Object containing texture, loading state, and error state
 */
export function useTextureLoader(texturePath) {
  const [texture, setTexture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!texturePath) {
      setLoading(false);
      return;
    }

    const loader = new TextureLoader();
    
    loader.load(
      texturePath,
      (loadedTexture) => {
        setTexture(loadedTexture);
        setLoading(false);
        setError(null);
      },
      undefined, // onProgress callback
      (err) => {
        console.warn(`Failed to load texture at ${texturePath}:`, err);
        setError(err);
        setLoading(false);
        setTexture(null);
      }
    );
  }, [texturePath]);

  return { texture, loading, error };
} 