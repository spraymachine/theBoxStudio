import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { applyPaletteFromImage } from './theme/palette'

// Extract colors from the provided palette image and apply as CSS variables.
// We don't await here; defaults render first, then the palette blends in.
applyPaletteFromImage('/assets/colors.jpg')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
