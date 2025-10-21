type PortfolioItem = { src: string; title: string }

function toTitleFromFilename(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, '') // remove extension
  return base
    .replace(/screenshot/gi, '')
    .replace(/[-_]/g, ' ')
    .replace(/\s+at\s+/gi, ' ')
    .replace(/\s+pm|\s+am/gi, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\d{1,2}\.\d{1,2}\.\d{1,2}\b/g, '')
    .replace(/\d{4}/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^\w|\s\w/g, (m) => m.toUpperCase()) || 'Portfolio Item'
}

export default function Portfolio() {
  const modules = import.meta.glob('../assets/*.{png,jpg,jpeg,webp,svg}', { eager: true }) as Record<string, { default: string }>
  const items: PortfolioItem[] = Object.entries(modules).map(([path, mod]) => {
    const filename = path.split('/').pop() || 'Image'
    return { src: mod.default, title: toTitleFromFilename(filename) }
  })

  return (
    <div className="portfolio-grid" aria-label="Portfolio items">
      {items.map((item) => (
        <article key={item.src} className="portfolio-card">
          <img className="portfolio-image" src={item.src} alt={item.title} loading="lazy" />
          <div style={{ marginTop: 10, fontWeight: 600 }}>{item.title}</div>
        </article>
      ))}
    </div>
  )
}


