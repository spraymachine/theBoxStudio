import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { applyPaletteFromImage } from './theme/palette'

// Extract colors from the provided palette image and apply as CSS variables.
// Use the Vite base so it works on GitHub Pages subpath deployments.
const paletteUrl = new URL('assets/colors.jpg', import.meta.env.BASE_URL || '/theBoxStudio/').toString()
// Don't block app rendering if palette extraction fails
applyPaletteFromImage(paletteUrl).catch(() => {
  console.warn('Palette extraction failed, using default colors')
})

const rootElement = document.getElementById('root')
if (!rootElement) {
  console.error('Root element not found!')
} else {
  console.log('Root element found, rendering app...')
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
