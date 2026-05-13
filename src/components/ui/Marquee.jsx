import { motion } from 'framer-motion'

export default function Marquee({ items, separator = '✦', duration = 40, className = '', light = false }) {
  // Duplicate items for seamless loop
  const loop = [...items, ...items, ...items, ...items]

  return (
    <div
      className={`relative overflow-hidden w-full select-none ${className}`}
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-8 px-6 flex-shrink-0">
            <span
              className={`font-serif text-3xl md:text-5xl tracking-tight ${
                light ? 'text-brand-black' : 'text-brand-white/90'
              }`}
            >
              {item}
            </span>
            <span className={`text-brand-gold text-lg ${light ? '' : 'opacity-60'}`}>{separator}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
