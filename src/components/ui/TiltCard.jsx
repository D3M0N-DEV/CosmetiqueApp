import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import useIsTouch from '../../hooks/useIsTouch'

export default function TiltCard({ children, className = '', intensity = 8 }) {
  const ref = useRef(null)
  const isTouch = useIsTouch()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(50)

  const xSpring = useSpring(x, { stiffness: 200, damping: 25 })
  const ySpring = useSpring(y, { stiffness: 200, damping: 25 })

  const rotateX = useTransform(ySpring, [-0.5, 0.5], [intensity, -intensity])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-intensity, intensity])

  const handleMouseMove = (e) => {
    if (isTouch || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    x.set(px - 0.5)
    y.set(py - 0.5)
    mouseX.set(px * 100)
    mouseY.set(py * 100)
  }
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  // On touch devices, skip the perspective wrapper entirely
  if (isTouch) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 1200 }}
      className={className}
    >
      <motion.div
        className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([mx, my]) =>
              `radial-gradient(400px circle at ${mx}% ${my}%, rgba(201,169,110,0.12), transparent 50%)`,
          ),
        }}
      />
      {children}
    </motion.div>
  )
}
