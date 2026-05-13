import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const [hovering, setHovering] = useState(false)
  const [hidden, setHidden] = useState(true)

  // Springs for smooth follow
  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 }
  const cursorX = useSpring(x, springConfig)
  const cursorY = useSpring(y, springConfig)

  useEffect(() => {
    // Only show on devices with fine pointer (desktop / mouse)
    const mq = window.matchMedia('(pointer: fine)')
    if (!mq.matches) return

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      if (hidden) setHidden(false)
    }
    const onOver = (e) => {
      const t = e.target
      if (
        t.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]')
      ) {
        setHovering(true)
      } else {
        setHovering(false)
      }
    }
    const leave = () => setHidden(true)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', onOver)
    document.documentElement.addEventListener('mouseleave', leave)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', onOver)
      document.documentElement.removeEventListener('mouseleave', leave)
    }
  }, [x, y, hidden])

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          opacity: hidden ? 0 : 1,
          borderColor: hovering ? 'rgba(201,169,110,0.9)' : 'rgba(201,169,110,0.35)',
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <div className="w-full h-full rounded-full border border-current" />
      </motion.div>
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{
          opacity: hidden ? 0 : hovering ? 0 : 1,
          scale: hovering ? 0.4 : 1,
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
      </motion.div>
    </>
  )
}
