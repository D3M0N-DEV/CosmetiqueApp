import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function GoldDivider({ className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <div ref={ref} className={`flex justify-center my-12 ${className}`}>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={inView ? { width: '80px', opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="h-px bg-gold-gradient"
      />
      <div className="mx-4 text-brand-gold/60 text-xs mt-[-7px]">✦</div>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={inView ? { width: '80px', opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        className="h-px bg-gold-gradient"
      />
    </div>
  )
}
