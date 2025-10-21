import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set the base to the repo name for GitHub Pages (update if your repo differs)
  base: '/the-box-studio/',
})
