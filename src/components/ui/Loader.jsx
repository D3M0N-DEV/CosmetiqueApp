import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    // Hide loader after intro animation completes
    const t = setTimeout(() => setDone(true), 2200)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    // Lock scroll while loader is showing
    if (!done) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [done])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] bg-brand-black flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          {/* Center mark */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-14 h-14 mb-6 relative"
            >
              <div className="absolute inset-0 border border-brand-gold/40 rounded-full" />
              <div className="absolute inset-2 border border-brand-gold/60 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center font-serif text-brand-gold text-xl">
                ✦
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="overflow-hidden"
            >
              <span className="font-serif text-2xl text-brand-gold tracking-[0.3em] uppercase">
                Dr. Abécassis
              </span>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.9, ease: 'easeInOut' }}
              className="w-32 h-px bg-gold-gradient mt-4 origin-left"
            />

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-brand-subtle text-[10px] tracking-[0.5em] uppercase mt-4"
            >
              Chirurgie Intime
            </motion.span>
          </div>

          {/* Curtain reveal */}
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ delay: 1.6, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-brand-black origin-top z-[201]"
            style={{ pointerEvents: 'none' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
