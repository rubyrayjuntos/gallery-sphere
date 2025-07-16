import React, { useRef, useMemo, useEffect, useContext, forwardRef, useImperativeHandle, useState, useCallback } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { ConfigContext } from '../App';
import { createTextureAtlas } from '../utils/textureAtlas';

// Custom Shader Materials for Image Planes
// Vertex Shader: Passes instance-specific UV offsets and position to fragment shader
const imagePlaneVertexShader = `
  attribute vec4 instanceUV; // x, y, z, w correspond to Umin, Vmin, Umax, Vmax
  varying vec2 vUv;
  varying vec4 vInstanceUV;

  void main() {
    vUv = uv; // Standard UVs for the plane (0-1)
    vInstanceUV = instanceUV; // Pass instance UV rect to fragment shader
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  }
`;

// Fragment Shader: Samples from the texture atlas using instance-specific UVs
const imagePlaneFragmentShader = `
  uniform sampler2D atlasTexture; // Our texture atlas
  varying vec2 vUv;
  varying vec4 vInstanceUV; // Contains Umin, Vmin, Umax, Vmax for this instance

  void main() {
    // Calculate the actual UV coordinates for this instance by scaling and offsetting vUv
    vec2 uv = mix(vInstanceUV.xy, vInstanceUV.zw, vUv);
    vec4 textureColor = texture2D(atlasTexture, uv);

    // Apply alpha if image has transparency, otherwise just display color
    if (textureColor.a < 0.1) discard; // Discard fully transparent pixels
    gl_FragColor = textureColor;
  }
`;

// Use forwardRef to allow parent components to pass a ref to this component
export const ImagePlane = forwardRef(({ imageUrls, sphereRadius, sphereRef, onPointerDown, onPointerMove, onPointerUp }, ref) => {
  const { config } = useContext(ConfigContext);
  // Use internal ref to hold the actual instancedMesh object
  const internalMeshRef = useRef();

  // Expose internal mesh ref to parent through forwarded ref
  useImperativeHandle(ref, () => internalMeshRef.current);

  const imageCount = imageUrls.length;
  
  // Only log when imageCount or sphereRadius actually changes
  useEffect(() => {
    console.log('ImagePlane: Rendering', imageCount, 'images on sphere with radius', sphereRadius);
  }, [imageCount, sphereRadius]);

  // State to hold the texture atlas and UVs
  const [atlasData, setAtlasData] = useState({
    texture: new THREE.Texture(),
    imageUVs: [],
    atlasWidth: 0,
    atlasHeight: 0,
  });

  // Track which images are being interacted with to prevent position overrides
  const interactingImages = useRef(new Set());

  // Function to mark an image as being interacted with
  const markImageInteracting = useCallback((index, isInteracting) => {
    if (isInteracting) {
      interactingImages.current.add(index);
    } else {
      interactingImages.current.delete(index);
    }
  }, []);

  // Expose the interaction tracking function to parent
  useImperativeHandle(ref, () => ({
    ...internalMeshRef.current,
    markImageInteracting
  }), [markImageInteracting]);

  // Effect to create texture atlas when image URLs change
  useEffect(() => {
    let isMounted = true;
    
    const loadAtlas = async () => {
      try {
        const { texture, imageUVs, atlasWidth, atlasHeight } = await createTextureAtlas(imageUrls);
        if (isMounted) {
          setAtlasData({ texture, imageUVs, atlasWidth, atlasHeight });
        } else {
          // Component unmounted, dispose texture
          texture.dispose();
        }
      } catch (error) {
        console.error('Failed to create texture atlas:', error);
        if (isMounted) {
          // Set fallback data
          setAtlasData({
            texture: new THREE.Texture(),
            imageUVs: [],
            atlasWidth: 0,
            atlasHeight: 0,
          });
        }
      }
    };
    loadAtlas();

    // Cleanup texture when component unmounts or imageUrls change
    return () => {
      isMounted = false;
      if (atlasData.texture) {
        atlasData.texture.dispose();
        if (atlasData.texture.image && typeof atlasData.texture.image.src === 'string' && atlasData.texture.image.src.startsWith('blob:')) {
            URL.revokeObjectURL(atlasData.texture.image.src);
        }
      }
    };
  }, [imageUrls]); // Re-create atlas if image URLs change

  // Set up instance matrices and UV attributes
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const instanceUVs = useMemo(() => {
    const uvs = new Float32Array(imageCount * 4); // x, y, z, w for each instance
    return new THREE.InstancedBufferAttribute(uvs, 4);
  }, [imageCount]);

  // Memoize the image setup to prevent unnecessary recalculations
  const imageSetup = useMemo(() => {
    if (!atlasData.imageUVs.length) return null;
    
    const setup = {
      uvs: new Float32Array(imageCount * 4),
      positions: [],
      matrices: []
    };
    
    for (let i = 0; i < imageCount; i++) {
      const uv = atlasData.imageUVs[i];
      if (uv) {
        setup.uvs[i * 4] = uv.x;
        setup.uvs[i * 4 + 1] = uv.y;
        setup.uvs[i * 4 + 2] = uv.z;
        setup.uvs[i * 4 + 3] = uv.w;
      }

      // Calculate initial position on sphere using spherical coordinates
      // For now, distribute images somewhat evenly. Refine this later.
      const phi = Math.acos(-1 + (2 * i) / imageCount); // Distribute evenly vertically
      const theta = Math.sqrt(imageCount * Math.PI) * phi; // Distribute in a spiral

      const x = sphereRadius * Math.sin(phi) * Math.cos(theta);
      const y = sphereRadius * Math.sin(phi) * Math.sin(theta);
      const z = sphereRadius * Math.cos(phi);

      setup.positions.push(new THREE.Vector3(x, y, z));
      
      if (i === 0) {
        console.log('ImagePlane: First image position:', { x, y, z, sphereRadius, phi, theta });
        console.log('ImagePlane: First image matrix:', dummy.matrix.elements);
      }
      
      // Create matrix
      dummy.position.set(x, y, z);
      // Orient the plane to face outwards from the sphere's center
      dummy.lookAt(0, 0, 0); // Make it look towards the center
      dummy.rotateY(Math.PI); // Rotate 180 degrees to face outwards
      dummy.scale.setScalar(config.appSettings.imagePlaneSize); // Set initial scale
      dummy.updateMatrix();
      setup.matrices.push(dummy.matrix.clone());
    }
    
    return setup;
  }, [atlasData.imageUVs, imageCount, sphereRadius, config.appSettings.imagePlaneSize, dummy]);

  useEffect(() => {
    if (!imageSetup || !internalMeshRef.current) return;

    console.log('Setting up', imageCount, 'image instances on sphere');
    
    // Reset userData for new set of images
    internalMeshRef.current.userData = {};
    
    // Apply the pre-calculated setup
    for (let i = 0; i < imageCount; i++) {
      // Set UVs
      instanceUVs.setX(i, imageSetup.uvs[i * 4]);
      instanceUVs.setY(i, imageSetup.uvs[i * 4 + 1]);
      instanceUVs.setZ(i, imageSetup.uvs[i * 4 + 2]);
      instanceUVs.setW(i, imageSetup.uvs[i * 4 + 3]);

      // Set matrix
      internalMeshRef.current.setMatrixAt(i, imageSetup.matrices[i]);
      
      // Store the initial matrix to revert to it later
      internalMeshRef.current.userData[i] = imageSetup.matrices[i].clone();
    }
    internalMeshRef.current.instanceMatrix.needsUpdate = true;
    internalMeshRef.current.geometry.setAttribute('instanceUV', instanceUVs);
  }, [imageSetup, imageCount, instanceUVs]);

  // Custom Shader Material - only recreate when texture actually changes
  const material = useMemo(() => {
    console.log('ImagePlane: Creating material with texture:', atlasData.texture?.uuid);
    
    const newMaterial = new THREE.ShaderMaterial({
      uniforms: {
        atlasTexture: { value: atlasData.texture },
      },
      vertexShader: imagePlaneVertexShader,
      fragmentShader: imagePlaneFragmentShader,
      transparent: true, // Enable transparency for images with alpha channels
      side: THREE.DoubleSide // Render both sides of the plane
    });
    
    return newMaterial;
  }, [atlasData.texture?.uuid]); // Use texture UUID to prevent unnecessary recreations

  // Cleanup material when component unmounts
  useEffect(() => {
    return () => {
      if (material) {
        material.dispose();
      }
    };
  }, [material]);

  // Re-render material if atlasData.texture changes
  useEffect(() => {
    if (internalMeshRef.current && internalMeshRef.current.material) {
      internalMeshRef.current.material.uniforms.atlasTexture.value = atlasData.texture;
      internalMeshRef.current.material.needsUpdate = true;
    }
  }, [atlasData.texture]);

  // Update image positions based on sphere transformation
  useFrame(() => {
    if (!sphereRef?.current || !internalMeshRef.current || !imageSetup) return;

    const sphereMatrix = sphereRef.current.matrixWorld;
    const spherePosition = new THREE.Vector3();
    const sphereQuaternion = new THREE.Quaternion();
    const sphereScale = new THREE.Vector3();
    sphereMatrix.decompose(spherePosition, sphereQuaternion, sphereScale);

    // Update each image instance to follow the sphere
    for (let i = 0; i < imageCount; i++) {
      // Skip images that are currently being interacted with
      if (interactingImages.current.has(i)) {
        continue;
      }

      const basePosition = imageSetup.positions[i];
      if (!basePosition || !basePosition.clone) continue;

      // Apply sphere's transformation to the base position
      const worldPosition = basePosition.clone().applyQuaternion(sphereQuaternion).add(spherePosition);
      
      dummy.position.copy(worldPosition);
      dummy.lookAt(spherePosition); // Make image face outwards from sphere center
      dummy.rotateY(Math.PI); // Rotate 180 degrees to face outwards
      dummy.scale.setScalar(config.appSettings.imagePlaneSize);
      dummy.updateMatrix();
      
      internalMeshRef.current.setMatrixAt(i, dummy.matrix);
    }
    
    internalMeshRef.current.instanceMatrix.needsUpdate = true;
  });

  // Don't render if no images or atlas not ready
  if (imageCount === 0 || !atlasData.texture || atlasData.imageUVs.length === 0) {
    console.log('ImagePlane: Not rendering - imageCount:', imageCount, 'atlasData.texture:', !!atlasData.texture, 'imageUVs.length:', atlasData.imageUVs.length);
    return null;
  }

  console.log('ImagePlane: Rendering', imageCount, 'images with atlas texture:', atlasData.texture.uuid);
  console.log('ImagePlane: Atlas data:', { 
    textureWidth: atlasData.atlasWidth, 
    textureHeight: atlasData.atlasHeight,
    imageUVs: atlasData.imageUVs.map((uv, i) => `Image ${i}: (${uv.x.toFixed(3)}, ${uv.y.toFixed(3)}) to (${uv.z.toFixed(3)}, ${uv.w.toFixed(3)})`)
  });



  return (
    <instancedMesh
      ref={internalMeshRef} // Use internal ref here
      args={[null, null, imageCount]}
      castShadow
      receiveShadow
      onPointerDown={onPointerDown} // Attach interaction handlers
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <planeGeometry args={[1, 1]} />
      <primitive object={material} attach="material" />
    </instancedMesh>
  );
});

ImagePlane.displayName = 'ImagePlane'; 