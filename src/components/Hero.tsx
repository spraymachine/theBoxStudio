import { useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import basketImg from '../assets/basket/basket.png'

import elegantImg from '../assets/basket/Elegant Flower Bouquet.png'
import teddyImg from '../assets/basket/teddy.png'

export default function Hero() {
  const dropItems = useMemo(() => [elegantImg, teddyImg], [])
  const [isAnimating, setIsAnimating] = useState(false)
  const [activeSrc, setActiveSrc] = useState<string | null>(null)
  const [dropKey, setDropKey] = useState(0)
  const [settled, setSettled] = useState<Array<{ id: number; src: string; x: number; r: number }>>([])
  const basketRef = useRef<HTMLDivElement>(null)

  function handleDrop() {
    if (isAnimating) return
    if (settled.length >= dropItems.length) return
    const src = dropItems[settled.length]
    setActiveSrc(src)
    setIsAnimating(true)
    setDropKey((k) => k + 1)
  }

  function onDropComplete() {
    if (!activeSrc) return
    // random slight horizontal and rotation offsets so items look natural inside the basket
    const offset = (Math.random() - 0.5) * 60
    const rot = (Math.random() - 0.5) * 10
    setSettled((arr) => [...arr, { id: Date.now(), src: activeSrc, x: offset, r: rot }])
    setActiveSrc(null)
    setIsAnimating(false)
  }
  return (
    <>
      <div>
        <h1 className="hero-title">Personalised gifts that feel like a hug</h1>
        <p className="hero-subtitle">
          Hand-crafted, custom and made with love. Subtle colors, happy vibes —
          curated keepsakes for birthdays, celebrations and every tiny moment worth remembering.
        </p>
      </div>
      <motion.div
        ref={basketRef}
        className="hero-placeholder"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        aria-label="Gift basket"
        onClick={handleDrop}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleDrop()
          }
        }}
      >
        {/* Basket base (underneath) */}
        <img src={basketImg} alt="Gift basket" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 18, zIndex: 1, position: 'relative' }} />

        {/* Already dropped/settled items (above basket) */}
        {settled.map((s) => (
          <img
            key={s.id}
            src={s.src}
            alt="Gift item"
            style={{
              position: 'absolute',
              bottom: 12,
              left: '50%',
              transform: `translateX(calc(-50% + ${s.x}px)) rotate(${s.r}deg)`,
              width: '56%',
              maxWidth: 340,
              zIndex: 2,
              pointerEvents: 'none',
              filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.18))',
            }}
          />
        ))}

        {/* Active dropping item (on top) */}
        {activeSrc && (
          <motion.img
            key={dropKey}
            src={activeSrc}
            alt="Gift item dropping"
            initial={{ y: -260, opacity: 0, rotate: -6 }}
            animate={{ y: 20, opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 160, damping: 20 }}
            onAnimationComplete={onDropComplete}
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60%',
              maxWidth: 360,
              zIndex: 3,
              pointerEvents: 'none',
              filter: 'drop-shadow(0 10px 24px rgba(0,0,0,0.22))',
            }}
          />
        )}
      </motion.div>
    </>
  )
}


