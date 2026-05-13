import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SplitText({ text, className = '', stagger = 0.025, delay = 0, by = 'word' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px 0px' })

  const parts = by === 'char' ? text.split('') : text.split(' ')

  return (
    <span ref={ref} className={`inline-block ${className}`} aria-label={text}>
      {parts.map((part, i) => (
        <span key={i} className="inline-block overflow-hidden align-baseline">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={inView ? { y: '0%', opacity: 1 } : {}}
            transition={{
              duration: 0.7,
              ease: [0.22, 0.61, 0.36, 1],
              delay: delay + i * stagger,
            }}
          >
            {part === ' ' ? ' ' : part}
            {by === 'word' && i < parts.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
