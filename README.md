# gallery-sphere

Interactive 3D sphere gallery: photos sit on a sphere with Cannon.js physics and Tween.js motion, switching between 3D exploration and 2D detail. The deployable app is in `interactive-3d-gallery/`. Render blueprints are `render.yaml` and `render-simple.yaml`.

**Stack:** React 18, React Three Fiber, Drei, Three.js, Cannon-es, Node 18+.

## Run

```bash
npm run build   # installs and builds interactive-3d-gallery
# or develop inside the gallery package:
cd interactive-3d-gallery && npm install --legacy-peer-deps && npm start
```

Deployment notes: `DEPLOYMENT.md`. Troubleshooting: `TROUBLESHOOTING.md`.
