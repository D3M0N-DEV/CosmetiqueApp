import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import Marquee from '../ui/Marquee'

const stagger = { visible: { transition: { staggerChildren: 0.12 } } }
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 0.61, 0.36, 1] } },
}

export default function Hero() {
  const heroRef = useRef(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, 100])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  const [mouse, setMouse] = useState({ x: 50, y: 50 })

  useEffect(() => {
    // Skip mouse-tracking on touch devices to save battery
    if (window.matchMedia('(pointer: coarse)').matches) return
    const onMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const scrollDown = () =>
    document.getElementById('docteur')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] overflow-hidden flex flex-col"
    >
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            background: `radial-gradient(800px circle at ${mouse.x}% ${mouse.y}%, rgba(201,169,110,0.08), transparent 50%)`,
          }}
        />
        <div
          className="absolute top-0 right-0 w-[70vw] h-[80vh] opacity-40 blur-3xl"
          style={{
            background:
              'radial-gradient(ellipse at top right, rgba(201,169,110,0.15) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute -bottom-1/4 left-0 w-[60vw] h-[60vh] opacity-30 blur-3xl"
          style={{
            background:
              'radial-gradient(ellipse at bottom left, rgba(201,169,110,0.12) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        style={{ y: y1, opacity }}
        className="relative z-10 flex-1 flex flex-col justify-center pt-28 sm:pt-32 pb-10"
      >
        <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-12">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-8 sm:mb-10"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-brand-gold text-[10px] tracking-[0.35em] sm:tracking-[0.4em] uppercase">
                Pionnier depuis 1992
              </span>
            </div>
            <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-brand-gold/40 to-transparent max-w-[200px]" />
          </motion.div>

          <motion.div variants={stagger} initial="hidden" animate="visible">
            {/* Massive headline — fluid scaling with safe mobile min */}
            <h1 className="font-serif leading-[0.95] text-brand-white">
              <motion.span variants={fadeUp} className="block text-[clamp(2.75rem,11vw,9rem)] font-medium tracking-tight">
                L'Excellence
              </motion.span>
              <motion.span variants={fadeUp} className="block text-[clamp(2.75rem,11vw,9rem)] font-medium tracking-tight">
                en chirurgie
              </motion.span>
              <motion.span
                variants={fadeUp}
                className="block text-[clamp(2.75rem,11vw,9rem)] italic font-normal text-gold-gradient tracking-tight"
              >
                intime.
              </motion.span>
            </h1>

            {/* Subtitle row */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10 sm:mt-12 max-w-6xl"
            >
              <div className="lg:col-span-7">
                <p className="text-brand-cream/80 text-base sm:text-lg md:text-xl leading-relaxed font-light">
                  Dr. Marc Abécassis — l'un des chirurgiens les plus respectés au monde
                  en chirurgie intime. <span className="text-brand-white">Plus de 3 000 patients</span> accompagnés
                  avec une discrétion absolue, à Paris, Genève et Londres.
                </p>
              </div>

              {/* Inline stats row — wraps gracefully on tight viewports */}
              <div className="lg:col-span-5 lg:border-l lg:border-brand-charcoal lg:pl-8 flex items-start gap-5 sm:gap-6 flex-wrap">
                <div>
                  <div className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-gradient leading-none">25+</div>
                  <div className="text-brand-muted text-[10px] sm:text-xs tracking-widest uppercase mt-2">Années</div>
                </div>
                <div className="w-px h-10 sm:h-12 bg-brand-charcoal mt-1" />
                <div>
                  <div className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-gradient leading-none">3K+</div>
                  <div className="text-brand-muted text-[10px] sm:text-xs tracking-widest uppercase mt-2">Patients</div>
                </div>
                <div className="w-px h-10 sm:h-12 bg-brand-charcoal mt-1" />
                <div>
                  <div className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-gradient leading-none">3</div>
                  <div className="text-brand-muted text-[10px] sm:text-xs tracking-widest uppercase mt-2">Villes</div>
                </div>
              </div>
            </motion.div>

            {/* CTAs — full width on mobile */}
            <motion.div variants={fadeUp} className="mt-10 sm:mt-14 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start">
              <MagneticButton
                as="a"
                href="/femme"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.assign('/femme')
                }}
                className="group relative inline-flex items-center justify-between sm:justify-start gap-3 bg-brand-white text-brand-black px-6 sm:px-8 py-4 sm:py-5 rounded-full text-xs sm:text-sm tracking-widest uppercase font-medium overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10">Espace Femme</span>
                <span className="relative z-10 w-8 h-8 rounded-full bg-brand-black flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                  <ArrowUpRight size={14} className="text-brand-white" />
                </span>
              </MagneticButton>

              <MagneticButton
                as="a"
                href="/homme"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.assign('/homme')
                }}
                className="group relative inline-flex items-center justify-between sm:justify-start gap-3 border border-brand-gold/40 hover:border-brand-gold text-brand-gold px-6 sm:px-8 py-4 sm:py-5 rounded-full text-xs sm:text-sm tracking-widest uppercase transition-colors w-full sm:w-auto"
              >
                <span>Espace Homme</span>
                <span className="w-8 h-8 rounded-full border border-brand-gold/40 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold transition-colors">
                  <ArrowUpRight size={14} className="text-brand-gold group-hover:text-brand-black transition-colors" />
                </span>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom marquee */}
      <div className="relative z-10 border-y border-brand-charcoal py-4 sm:py-6 bg-brand-black/40 backdrop-blur-sm">
        <Marquee
          items={['Paris', 'Genève', 'Londres', 'Discrétion', 'Excellence', 'Expertise']}
          duration={50}
        />
      </div>

      {/* Scroll cue — desktop only */}
      <button
        onClick={scrollDown}
        className="absolute bottom-28 right-6 lg:right-12 z-10 hidden lg:flex flex-col items-center gap-3 text-brand-muted hover:text-brand-gold transition-colors group"
        aria-label="Défiler vers le bas"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase rotate-90 origin-center mt-8">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-gold/40 to-transparent group-hover:from-brand-gold transition-colors mt-6" />
        <ArrowDown size={14} className="animate-bounce_slow" />
      </button>
    </section>
  )
}
