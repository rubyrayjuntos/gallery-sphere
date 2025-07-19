# Interactive 3D Sphere Gallery - Deployment Guide

This is a React Three Fiber (R3F) application featuring a hybrid 3D/2D interactive sphere gallery with physics-based interactions using Cannon.js and smooth animations with Tween.js.

## Features

- **3D Sphere Gallery**: Interactive sphere with photos positioned dynamically
- **Physics Integration**: Cannon.js for realistic physics interactions
- **Smooth Animations**: Tween.js for fluid transitions between 2D and 3D modes
- **Photo Search & Selection**: Users can search for photos and interact with them
- **Hybrid Interface**: Seamless switching between 3D exploration and 2D detail views
- **Z-axis Management**: Ability to adjust photo positioning and ranking

## Deployment to Render

### Prerequisites

- Node.js 18+ 
- Git repository connected to Render

### Automatic Deployment

1. **Connect Repository**: Link your GitHub repository to Render
2. **Deploy**: Render will automatically detect the `render.yaml` configuration
3. **Build Process**: The deployment will run:
   ```bash
   cd interactive-3d-gallery
   npm ci
   npm run build
   ```

### Manual Deployment Steps

If deploying manually:

1. **Build Production Version**:
   ```bash
   cd interactive-3d-gallery
   npm install
   npm run build
   ```

2. **Deploy Static Files**: Upload the `dist/` folder contents to your static hosting service

### Configuration

- **Build Output**: `./interactive-3d-gallery/dist`
- **Node Version**: 18+
- **Build Command**: `cd interactive-3d-gallery && npm ci && npm run build`
- **Optimizations**: Chunk splitting for Three.js, React Three Fiber, physics, and animation libraries

### Performance Optimizations

- **Code Splitting**: Separate chunks for different library categories
- **Asset Caching**: Long-term caching for static assets
- **Compression**: Gzipped assets for faster loading
- **Tree Shaking**: Unused code elimination

### Environment Variables

No environment variables are required for the basic deployment. The application runs entirely client-side.

### Security Headers

The deployment includes security headers:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Proper Content-Type headers for JS/CSS

### Architecture

```
interactive-3d-gallery/
├── src/
│   ├── components/
│   │   ├── SphereGallery.jsx    # Main 3D sphere component
│   │   ├── ImagePlane.jsx       # Individual photo physics objects
│   │   ├── DetailViewport.jsx   # 2D detail view
│   │   ├── UIControls.jsx       # Search and control interface
│   │   └── PhysicsManager.jsx   # Cannon.js physics setup
│   ├── hooks/                   # Custom React hooks
│   ├── utils/                   # Utility functions
│   └── assets/                  # Static assets and textures
├── public/
│   ├── images/                  # Photo collections
│   └── textures/               # 3D textures for the sphere
├── dist/                       # Production build output
├── vite.config.js              # Optimized build configuration
└── render.yaml                 # Render deployment configuration
```

### Live Demo

Once deployed, the application will be available at your Render URL and feature:
- Interactive 3D sphere gallery
- Physics-based photo interactions
- Smooth camera transitions
- Search and filtering capabilities
- Responsive design for various screen sizes

## Technical Stack

- **React 18** - UI framework
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Three.js** - 3D graphics library
- **Cannon-es** - Physics engine
- **Tween.js** - Animation library
- **Vite** - Build tool and dev server

## Support

For deployment issues, check the build logs in your Render dashboard and ensure all dependencies are correctly installed.