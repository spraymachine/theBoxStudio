import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  // Use relative base by default so builds work on any subpath (GitHub Pages).
  // Optionally override by setting VITE_BASE env: VITE_BASE=/your-repo/
  base: process.env.VITE_BASE || './',
}))
