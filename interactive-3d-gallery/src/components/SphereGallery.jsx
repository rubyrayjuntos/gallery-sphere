// src/components/SphereGallery.jsx
import React, { useRef, useContext, useMemo, useEffect } from 'react'; // Added useEffect for debug logging
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { ConfigContext } from '../App';
import { useSpherePhysics } from '../hooks/useSpherePhysics';
import { ImagePlane } from './ImagePlane';
import { useSphereInteraction } from '../hooks/useSphereInteraction'; // Import sphere interaction hook
import { useImageInteractions } from '../hooks/useImageInteractions'; // Import image interaction hook

export function SphereGallery() {
  const { config } = useContext(ConfigContext);
  const sphereRef = useRef();
  const instancedMeshRef = useRef(); // Ref for the ImagePlane instanced mesh

  // Get the current sphere settings from the config
  const currentSphereConfig = config.spheres.find(
    (s) => s.id === config.appSettings.initialSphereTextureId
  );

  // Get the current catalog images
  const currentCatalog = config.catalogs.find(
    (c) => c.id === config.appSettings.initialCatalogId
  );
  const imageUrls = useMemo(() => {
    if (!currentCatalog) return [];
    const urls = currentCatalog.images.map(img => `/images/${currentCatalog.folderName}/${img.file}`);
    return urls;
  }, [currentCatalog]);

  // Debug: Log image URLs only when catalog changes
  useEffect(() => {
    if (currentCatalog) {
      console.log('Generated image URLs for catalog', currentCatalog.id, ':', imageUrls);
      console.log('Image URLs count:', imageUrls.length);
      console.log('Sphere radius:', config.appSettings.sphereRadius);
      console.log('Image plane size:', config.appSettings.imagePlaneSize);
    }
  }, [currentCatalog, imageUrls, config.appSettings.sphereRadius, config.appSettings.imagePlaneSize]);

  // Load the texture for the current sphere material
  const sphereTexture = useLoader(TextureLoader, `/textures/${currentSphereConfig.texture}`);
  const sphereBumpMap = currentSphereConfig.materialProps.bumpMap
    ? useLoader(TextureLoader, `/textures/${currentSphereConfig.materialProps.bumpMap}`)
    : null;

  // Integrate physics for the sphere
  const spherePhysicsBody = useSpherePhysics(
    sphereRef,
    config.appSettings.sphereRadius,
    10, // Mass of the sphere
    config.appSettings.wobbleIntensity
  );

  // Debug: Check if physics body is available (only log when it changes)
  useEffect(() => {
    if (spherePhysicsBody) {
      console.log('Sphere physics body initialized:', spherePhysicsBody.id);
    }
  }, [spherePhysicsBody]);

  // Integrate sphere interaction
  const { onPointerDown: onSpherePointerDown } = useSphereInteraction(spherePhysicsBody);

  // Integrate image interactions
  const {
    onPointerDown: onImagePointerDown,
    onPointerMove: onImagePointerMove,
    onPointerUp: onImagePointerUp,
  } = useImageInteractions(instancedMeshRef, config.appSettings.sphereRadius, spherePhysicsBody);

  // Only attach handlers if the physics body is ready
  const sphereHandlers = spherePhysicsBody ? { onPointerDown: onSpherePointerDown } : {};
  const imageHandlers = spherePhysicsBody
    ? {
        onPointerDown: onImagePointerDown,
        onPointerMove: onImagePointerMove,
        onPointerUp: onImagePointerUp,
      }
    : {};

  // Debug: Log interaction handler status (only when physics body changes)
  useEffect(() => {
    if (spherePhysicsBody) {
      console.log('SphereGallery: Physics body ready, interactions enabled');
    }
  }, [spherePhysicsBody]);


  return (
    <>
      <mesh
        ref={sphereRef}
        receiveShadow
        castShadow
        userData={{ manualControl: true }}
        onPointerDown={(e) => {
          console.log('Sphere mesh pointerdown received:', { 
            clientX: e.clientX, 
            clientY: e.clientY, 
            button: e.button,
            hasSphereHandler: !!sphereHandlers.onPointerDown,
            spherePhysicsBody: !!spherePhysicsBody
          });
          // Call the sphere interaction handler if it exists
          if (sphereHandlers.onPointerDown) {
            sphereHandlers.onPointerDown(e);
          } else {
            console.warn('Sphere interaction handler not available');
          }
        }}
      >
        <sphereGeometry args={[config.appSettings.sphereRadius, 64, 64]} />
        <meshStandardMaterial
          map={sphereTexture}
          {...currentSphereConfig.materialProps}
          bumpMap={sphereBumpMap}
        />
      </mesh>

      {/* Render the instanced image planes */}
      {imageUrls.length > 0 && (
        <>
          {console.log('SphereGallery: Rendering ImagePlane with', imageUrls.length, 'images')}
          <ImagePlane
            ref={instancedMeshRef} // Pass ref to ImagePlane for interactions
            imageUrls={imageUrls}
            sphereRadius={config.appSettings.sphereRadius}
            sphereRef={sphereRef} // Pass sphere ref for positioning
            {...imageHandlers}
          />
        </>
      )}
    </>
  );
} 