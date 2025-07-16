// src/utils/dataLoader.js
import { useEffect, useState } from 'react';

/**
 * Custom hook to load configuration data from config.json.
 * Handles loading state and errors.
 * @returns {{config: object, loading: boolean, error: Error}}
 */
export function useConfigLoader() {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        // Fetch config.json from the public directory
        const response = await fetch('/config.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setConfig(data);
      } catch (err) {
        console.error("Failed to load config.json:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []); // Empty dependency array means this runs once on mount

  return { config, loading, error };
}

/**
 * Fetches an image as a Blob for potential texture atlas generation or direct use.
 * @param {string} url The URL of the image.
 * @returns {Promise<Blob>} A promise that resolves with the image Blob.
 */
export async function fetchImageAsBlob(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load image at ${url}: ${response.statusText}`);
  }
  return response.blob();
}

/**
 * Utility function to get a specific catalog by ID
 * @param {Object} config - The loaded configuration object
 * @param {string} catalogId - The ID of the catalog to find
 * @returns {Object|null} The catalog object or null if not found
 */
export function getCatalogById(config, catalogId) {
  if (!config || !config.catalogs) return null;
  return config.catalogs.find(catalog => catalog.id === catalogId) || null;
}

/**
 * Utility function to get a specific sphere material by ID
 * @param {Object} config - The loaded configuration object
 * @param {string} sphereId - The ID of the sphere material to find
 * @returns {Object|null} The sphere material object or null if not found
 */
export function getSphereById(config, sphereId) {
  if (!config || !config.spheres) return null;
  return config.spheres.find(sphere => sphere.id === sphereId) || null;
}

/**
 * Utility function to get app settings
 * @param {Object} config - The loaded configuration object
 * @returns {Object|null} The app settings object or null if not found
 */
export function getAppSettings(config) {
  return config?.appSettings || null;
} 