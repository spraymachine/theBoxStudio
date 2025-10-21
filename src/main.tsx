import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { applyPaletteFromImage } from './theme/palette'

// Extract colors from the provided palette image and apply as CSS variables.
// Use the Vite base so it works on GitHub Pages subpath deployments.
const paletteUrl = new URL('assets/colors.jpg', import.meta.env.BASE_URL).toString()
applyPaletteFromImage(paletteUrl)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
