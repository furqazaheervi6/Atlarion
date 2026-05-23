import { motion, AnimatePresence } from 'motion/react'
import { ImageWithFallback } from './components/figma/ImageWithFallback'
import { useState, useEffect } from 'react'

const CYCLE_DURATION = 12000

const VERSIONS = [
  {
    id: 'HELLAS',
    title: 'ΕΛΛΑΣ',
    subtitle: 'IN SHADOWS WE STAND',
    statue: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=800',
    bg: 'https://images.unsplash.com/photo-1508174516034-a466529afd78?w=1920',
  },
  {
    id: 'ATLAS',
    title: 'There is no paradise for you to return to',
    subtitle: 'ATLAS — THE ETERNAL BURDEN',
    statue: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    bg: 'https://images.unsplash.com/photo-1604399397456-1fbc8bb28678?w=1920',
  },
  {
    id: 'TITAN',
    title: 'ATLAS',
    subtitle: 'ETERNAL BURDEN',
    statue: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800',
    bg: 'https://images.unsplash.com/photo-1533854775446-95c4609da544?w=1920',
  },
]

export default function App() {
  const [currentVersion, setCurrentVersion] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVersion((prev) => (prev + 1) % 3)
      setProgress(0)
    }, CYCLE_DURATION)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const progInterval = setInterval(() => {
      setProgress((p) => Math.min(p + (100 / (CYCLE_DURATION / 100)), 100))
    }, 100)
    return () => clearInterval(progInterval)
  }, [currentVersion])

  const current = VERSIONS[currentVersion]

  return (
    <div className="relative size-full overflow-hidden bg-black">
      {/* Background temple */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${current.id}`}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: [1, 1.05, 1] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, scale: { duration: 20, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <ImageWithFallback
            src={current.bg}
            alt="Temple ruins"
            className="w-full h-full object-cover opacity-30 grayscale"
            style={{ filter: 'brightness(0.3) contrast(1.4)' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* Mist */}
      <div className="mist-layer" style={{ animationDelay: '0s' }} />
      <div className="mist-layer-2" style={{ animationDelay: '3s' }} />

      {/* Particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            background: `rgba(${200 + Math.random() * 55}, ${180 + Math.random() * 50}, ${100 + Math.random() * 50}, ${0.3 + Math.random() * 0.4})`,
            animationDuration: `${15 + Math.random() * 15}s`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}

      {/* Red glow - Brand of Sacrifice */}
      <div className="red-glow" style={{ top: '20%', right: '15%', width: '300px', height: '300px' }} />
      <div className="red-glow-intense" style={{ bottom: '25%', left: '10%', width: '400px', height: '400px', animationDelay: '2s' }} />

      {/* Statue */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`statue-${current.id}`}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-full statue-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <ImageWithFallback
              src={current.statue}
              alt="Statue"
              className="h-[85%] w-auto object-contain opacity-40"
              style={{ filter: 'grayscale(1) contrast(1.3)', mixBlendMode: 'lighten' }}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Light rays */}
      {[20, 35, 50, 65, 80].map((left, i) => (
        <div
          key={i}
          className="light-ray"
          style={{ left: `${left}%`, animationDelay: `${i * 1.5}s`, animationDuration: '10s', opacity: 0.08 }}
        />
      ))}

      {/* Scan line */}
      <div className="scan-line" />

      {/* Column overlays */}
      {[10, 25, 75, 90].map((left, i) => (
        <div key={i} className="column-overlay" style={{ left: `${left}%`, animationDelay: `${i * 2}s` }} />
      ))}

      {/* Vignette */}
      <div className="vignette" />

      {/* Text */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`text-${current.id}`}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 pointer-events-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 1.5 }}
        >
          <h1
            className={`${
              current.id === 'HELLAS' ? 'title-hellas text-7xl' : current.id === 'ATLAS' ? 'title-atlas text-5xl' : 'title-titan text-8xl'
            } text-zinc-100 mb-4 drop-shadow-2xl`}
          >
            {current.title}
          </h1>
          <p className="subtitle-text text-zinc-400 text-lg uppercase tracking-widest drop-shadow-lg">{current.subtitle}</p>
        </motion.div>
      </AnimatePresence>

      {/* Nav dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-4 items-center z-10">
        {VERSIONS.map((v, i) => (
          <div key={v.id} className="flex flex-col items-center gap-2">
            <button
              onClick={() => {
                setCurrentVersion(i)
                setProgress(0)
              }}
              className={`nav-dot ${i === currentVersion ? 'active' : ''}`}
            />
            <span className="text-xs text-zinc-500 font-cormorant tracking-wider">{v.id}</span>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64">
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Brand mark (bottom corner) */}
      <div className="absolute bottom-6 right-6 text-zinc-600 text-xs font-cinzel tracking-widest brand-mark pointer-events-none">
        ΕΛΛΑΣ × 1997
      </div>
    </div>
  )
}
