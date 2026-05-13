import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import useIsTouch from '../../hooks/useIsTouch'

export default function MagneticButton({
  children,
  className = '',
  strength = 0.25,
  as = 'button',
  ...rest
}) {
  const ref = useRef(null)
  const isTouch = useIsTouch()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 20, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 200, damping: 20, mass: 0.5 })

  const handleMove = (e) => {
    if (isTouch || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * strength)
    y.set((e.clientY - cy) * strength)
  }
  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  const Tag = motion[as] || motion.button
  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={isTouch ? undefined : { x: sx, y: sy }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  )
}
