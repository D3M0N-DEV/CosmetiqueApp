import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const stagger = {
  visible: { transition: { staggerChildren: 0.18 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] } },
}

export default function Hero() {
  const scrollDown = () => {
    document.getElementById('docteur')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Deep layered gradient simulating a dark luxury clinic atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#111111] to-[#0A0A0A]" />
        {/* Radial gold glow top-right */}
        <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-radial-gradient opacity-[0.04]"
          style={{ background: 'radial-gradient(ellipse at top right, #C9A96E 0%, transparent 70%)' }} />
        {/* Radial faint glow bottom-left */}
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh]"
          style={{ background: 'radial-gradient(ellipse at bottom left, #C9A96E 0%, transparent 70%)', opacity: 0.025 }} />
        {/* Subtle vertical lines decoration */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'repeating-linear-gradient(90deg, #C9A96E 0px, #C9A96E 1px, transparent 1px, transparent 120px)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-block text-brand-gold text-xs tracking-[0.45em] uppercase border border-brand-gold/30 px-5 py-2 rounded-full">
              Paris · Genève · Londres
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-brand-white leading-[1.05] mb-6"
          >
            Excellence en<br />
            <span className="text-gold-gradient">Chirurgie Intime</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Dr. Marc Abécassis, pionnier de la chirurgie intime depuis 1992.
            Expertise, discrétion et bienveillance pour hommes et femmes.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/femme"
              className="group relative overflow-hidden bg-transparent border border-brand-gold/60 hover:border-brand-gold text-brand-gold hover:text-brand-black px-8 py-4 rounded text-sm tracking-widest uppercase transition-colors duration-300 w-full sm:w-auto"
            >
              <span className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center justify-center gap-3">
                <span className="text-lg">♀</span> Chirurgie Femme
              </span>
            </Link>
            <Link
              to="/homme"
              className="group relative overflow-hidden bg-brand-gold text-brand-black hover:bg-brand-gold-light px-8 py-4 rounded text-sm tracking-widest uppercase font-semibold transition-colors duration-300 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-3">
                <span className="text-lg">♂</span> Chirurgie Homme
              </span>
            </Link>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            variants={fadeUp}
            className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-brand-subtle text-xs tracking-widest uppercase"
          >
            {['Depuis 1992', '3 000+ Patients', 'Accrédité HAS', 'BBC · France 5 · TMC'].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-brand-gold/50" />
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-brand-muted hover:text-brand-gold transition-colors group"
        aria-label="Défiler vers le bas"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Découvrir</span>
        <ChevronDown size={18} className="animate-bounce_slow" />
      </button>
    </section>
  )
}
