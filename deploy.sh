#!/bin/bash
set -e

echo "🚀 Starting deployment build..."

# Navigate to project directory
cd interactive-3d-gallery

echo "🧹 Cleaning up previous builds..."
rm -rf node_modules package-lock.json dist

echo "🛠️ Installing dependencies..."
npm cache clean --force
npm install --legacy-peer-deps --no-audit --no-fund --production=false

echo "🏗️ Building production version..."
npm run build

echo "✅ Build completed successfully!"
echo "📁 Build output is in: interactive-3d-gallery/dist"

# Verify build output
if [ -d "dist" ] && [ -f "dist/index.html" ]; then
    echo "✅ Build verification passed!"
    echo "📊 Build size:"
    du -sh dist
else
    echo "❌ Build verification failed!"
    exit 1
fi