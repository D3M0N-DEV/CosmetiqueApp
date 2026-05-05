import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function ProcedureHero({ gender, tagline, description, accentColor, symbol }) {
  return (
    <section className="relative min-h-[55vh] flex items-end pb-16 overflow-hidden pt-32">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#0A0A0A]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            background: `radial-gradient(ellipse at 70% 40%, ${accentColor} 0%, transparent 65%)`,
          }}
        />
        {/* Vertical lines */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, #C9A96E 0px, #C9A96E 1px, transparent 1px, transparent 100px)',
          }}
        />
      </div>

      {/* Large background symbol */}
      <div
        className="absolute right-[5%] top-1/2 -translate-y-1/2 font-serif text-[22rem] leading-none select-none pointer-events-none opacity-[0.04] z-0"
        style={{ color: accentColor }}
      >
        {symbol}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-brand-subtle text-xs tracking-widest uppercase mb-8"
        >
          <Link to="/" className="hover:text-brand-gold transition-colors">Accueil</Link>
          <ChevronRight size={12} />
          <span className="text-brand-gold">{gender}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <p className="text-brand-gold text-xs tracking-[0.4em] uppercase mb-4">{tagline}</p>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-brand-white mb-6">
            Chirurgie <span className="text-gold-gradient">{gender}</span>
          </h1>
          <p className="text-brand-muted text-lg max-w-2xl leading-relaxed">{description}</p>
        </motion.div>

        {/* Gold line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '80px', opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 h-px bg-gold-gradient"
        />
      </div>
    </section>
  )
}
