import * as THREE from 'three';

/**
 * Creates a texture atlas from an array of image URLs.
 * @param {Array<string>} imageUrls - Array of URLs for the images to include in the atlas.
 * @param {number} [maxAtlasSize=4096] - Maximum size (width/height) of the texture atlas.
 * @returns {Promise<{texture: THREE.Texture, imageUVs: Array<THREE.Vector4>, atlasWidth: number, atlasHeight: number}>}
 * A promise that resolves with the generated texture atlas, UV coordinates for each image,
 * and the dimensions of the atlas.
 */
export async function createTextureAtlas(imageUrls, maxAtlasSize = 4096) {
  console.log('Creating texture atlas for', imageUrls.length, 'images');
  
  if (imageUrls.length === 0) {
    console.log('No images provided, returning empty atlas');
    return {
      texture: new THREE.Texture(), // Return an empty texture
      imageUVs: [],
      atlasWidth: 0,
      atlasHeight: 0,
    };
  }

  const images = await Promise.all(
    imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          console.log('Loaded image:', url, 'size:', img.width, 'x', img.height);
          resolve(img);
        };
        img.onerror = (error) => {
          console.error('Failed to load image:', url, error);
          reject(error);
        };
        img.src = url;
        img.crossOrigin = 'Anonymous'; // Required for loading textures from different origins if applicable
      });
    })
  );

  // Simple packing algorithm: arrange images in a grid
  // This is a basic approach. For more advanced packing, consider a library.
  let currentX = 0;
  let currentY = 0;
  let rowHeight = 0;
  const imageDatas = [];

  for (const img of images) {
    if (currentX + img.width > maxAtlasSize) {
      currentX = 0;
      currentY += rowHeight;
      rowHeight = 0;
    }

    if (currentY + img.height > maxAtlasSize) {
      // Atlas size exceeded, handle gracefully (e.g., create new atlas or resize)
      console.warn('Texture atlas max size exceeded. Some images might not fit.');
      break; // Stop adding images
    }

    imageDatas.push({
      img,
      x: currentX,
      y: currentY,
      width: img.width,
      height: img.height,
    });

    currentX += img.width;
    rowHeight = Math.max(rowHeight, img.height);
  }

  const atlasWidth = Math.min(maxAtlasSize, Math.max(...imageDatas.map(data => data.x + data.width)));
  const atlasHeight = Math.min(maxAtlasSize, currentY + rowHeight);

  // Create a canvas to draw the atlas
  const canvas = document.createElement('canvas');
  canvas.width = atlasWidth > 0 ? atlasWidth : 1; // Ensure at least 1x1 to prevent errors
  canvas.height = atlasHeight > 0 ? atlasHeight : 1;
  const ctx = canvas.getContext('2d');

  // Draw images onto the atlas canvas
  imageDatas.forEach(({ img, x, y }) => {
    ctx.drawImage(img, x, y);
  });

  // Create Three.js texture from canvas
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;

  // Calculate UV coordinates for each image in the atlas
  const imageUVs = imageDatas.map(({ x, y, width, height }) => {
    // x, y, width, height normalized to atlas dimensions
    return new THREE.Vector4(
      x / atlasWidth,          // U min
      y / atlasHeight,         // V min
      (x + width) / atlasWidth,  // U max
      (y + height) / atlasHeight // V max
    );
  });
  
  console.log('Created texture atlas:', atlasWidth, 'x', atlasHeight, 'with', imageUVs.length, 'images');

  return { texture, imageUVs, atlasWidth, atlasHeight };
} 