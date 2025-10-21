import { useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span className="logo-badge" aria-hidden="true" />
        <span className="brand">The Box Studio</span>
      </div>

      <button
        className="mobile-menu-btn"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        {/* simple hamburger icon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="6" width="18" height="2" rx="1" fill="currentColor"/>
          <rect x="3" y="11" width="18" height="2" rx="1" fill="currentColor"/>
          <rect x="3" y="16" width="18" height="2" rx="1" fill="currentColor"/>
        </svg>
      </button>

      <ul className="nav-links" style={{ listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
        {links.map((l) => (
          <li key={l.href}>
            <motion.a
              className="nav-link"
              href={l.href}
              whileHover={{ y: -1 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
              {l.label}
            </motion.a>
          </li>
        ))}
      </ul>

      {menuOpen && (
        <motion.div
          id="mobile-menu"
          className="mobile-menu"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              className="nav-link"
              href={l.href}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  )
}


