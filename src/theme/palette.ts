import { Vibrant } from 'node-vibrant/browser'

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const clean = hex.replace('#', '')
  if (clean.length === 3) {
    const r = parseInt(clean[0] + clean[0], 16)
    const g = parseInt(clean[1] + clean[1], 16)
    const b = parseInt(clean[2] + clean[2], 16)
    return { r, g, b }
  }
  if (clean.length === 6) {
    const r = parseInt(clean.slice(0, 2), 16)
    const g = parseInt(clean.slice(2, 4), 16)
    const b = parseInt(clean.slice(4, 6), 16)
    return { r, g, b }
  }
  return null
}

function rgbToHex({ r, g, b }: { r: number; g: number; b: number }): string {
  const toHex = (n: number) => clamp(Math.round(n), 0, 255).toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

function blendWithWhite(hex: string, ratio: number): string {
  const rgb = hexToRgb(hex)
  if (!rgb) return hex
  const r = rgb.r + (255 - rgb.r) * ratio
  const g = rgb.g + (255 - rgb.g) * ratio
  const b = rgb.b + (255 - rgb.b) * ratio
  return rgbToHex({ r, g, b })
}

export async function applyPaletteFromImage(imageUrl: string): Promise<void> {
  try {
    const palette = await Vibrant.from(imageUrl).getPalette()

    const primary = palette.LightVibrant?.hex || palette.Vibrant?.hex || '#ffb6a3'
    const secondary = palette.LightMuted?.hex || palette.Muted?.hex || '#a7d8ff'
    const accent = palette.Vibrant?.hex || palette.DarkVibrant?.hex || '#c8f7c5'

    // Blend toward white to keep the vibe subtle and light.
    const subtlePrimary = blendWithWhite(primary, 0.5)
    const subtleSecondary = blendWithWhite(secondary, 0.6)
    const subtleAccent = blendWithWhite(accent, 0.55)

    const root = document.documentElement
    root.style.setProperty('--primary', subtlePrimary)
    root.style.setProperty('--secondary', subtleSecondary)
    root.style.setProperty('--accent', subtleAccent)

    // Derive a soft brand color as a mid blend between primary and accent
    const brand = blendWithWhite(palette.LightVibrant?.hex || subtlePrimary, 0.4)
    root.style.setProperty('--brand', brand)
  } catch (err) {
    // If extraction fails, keep defaults silently.
    console.warn('Palette extraction failed; using fallback theme.')
  }
}


