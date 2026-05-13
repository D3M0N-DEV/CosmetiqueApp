import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar } from 'lucide-react'

export default function StickyCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY
      const max = document.body.scrollHeight - window.innerHeight
      // Show after 60% scrolled and before reaching bottom contact section
      setShow(sy > window.innerHeight * 0.8 && sy < max - 800)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          onClick={() =>
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }
          style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 1.25rem)' }}
          className="fixed right-5 sm:right-6 z-40 bg-gold-gradient text-brand-black font-semibold px-5 sm:px-6 py-3.5 sm:py-4 rounded-full text-xs tracking-widest uppercase shadow-gold-lg flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform"
          data-cursor-hover
        >
          <Calendar size={14} />
          <span className="hidden sm:inline">Prendre Rendez-vous</span>
          <span className="sm:hidden">RDV</span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
