import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import FadeInOnScroll from '../ui/FadeInOnScroll'
import SplitText from '../ui/SplitText'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [dir, setDir] = useState(1)

  const go = (i) => {
    setDir(i > active ? 1 : -1)
    setActive(i)
  }
  const prev = () => go((active - 1 + testimonials.length) % testimonials.length)
  const next = () => go((active + 1) % testimonials.length)

  useEffect(() => {
    const id = setInterval(() => go((active + 1) % testimonials.length), 9000)
    return () => clearInterval(id)
    // eslint-disable-next-line
  }, [active])

  const t = testimonials[active]

  return (
    <section
      id="temoignages"
      className="py-20 sm:py-24 md:py-36 bg-brand-dark relative overflow-hidden"
    >
      <div className="hidden md:block absolute top-12 right-6 lg:right-12 text-brand-gold/30 text-xs tracking-[0.4em] uppercase font-mono">
        03 / Témoignages
      </div>

      {/* Background quote — capped on mobile so it doesn't overflow */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-serif text-[20rem] sm:text-[30rem] md:text-[40rem] leading-none text-brand-gold/[0.02]">
          "
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6 mb-10 sm:mb-16">
          <div className="col-span-12 lg:col-span-2">
            <p className="text-brand-gold text-[10px] tracking-[0.4em] uppercase">Paroles</p>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <h2 className="font-serif text-[clamp(2.25rem,8vw,6rem)] text-brand-white leading-[0.95]">
              <SplitText text="Ce qu'ils" by="word" />{' '}
              <span className="italic text-gold-gradient">
                <SplitText text="en disent." by="word" delay={0.15} />
              </span>
            </h2>
          </div>
        </div>

        {/* Big quote display */}
        <FadeInOnScroll>
          <div className="relative min-h-[420px] sm:min-h-[400px] md:min-h-[460px] flex flex-col justify-center">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <div className="flex gap-1 mb-6 sm:mb-8">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <span key={s} className="text-brand-gold text-base">★</span>
                  ))}
                </div>

                <blockquote className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-brand-white leading-[1.2] font-light italic max-w-5xl">
                  <span className="text-brand-gold">"</span>
                  {t.text}
                  <span className="text-brand-gold">"</span>
                </blockquote>

                <div className="mt-8 sm:mt-12 flex items-end justify-between flex-wrap gap-4 sm:gap-6">
                  <div>
                    <p className="text-brand-white font-medium text-base sm:text-lg">{t.name}</p>
                    <p className="text-brand-gold text-[10px] tracking-[0.4em] uppercase mt-2">
                      {t.procedure} · {t.city}
                    </p>
                  </div>

                  <div className="font-mono text-brand-muted text-sm tabular-nums">
                    <span className="text-brand-gold">{String(active + 1).padStart(2, '0')}</span>
                    <span className="text-brand-charcoal mx-2">/</span>
                    <span>{String(testimonials.length).padStart(2, '0')}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeInOnScroll>

        {/* Controls */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-brand-charcoal flex items-center justify-between flex-wrap gap-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={prev}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-brand-charcoal hover:border-brand-gold active:border-brand-gold hover:bg-brand-gold/5 text-brand-muted hover:text-brand-gold flex items-center justify-center transition-all"
              aria-label="Précédent"
              data-cursor-hover
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-brand-charcoal hover:border-brand-gold active:border-brand-gold hover:bg-brand-gold/5 text-brand-muted hover:text-brand-gold flex items-center justify-center transition-all"
              aria-label="Suivant"
              data-cursor-hover
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className="group relative h-[2px] overflow-hidden bg-brand-charcoal hover:bg-brand-subtle transition-colors"
                style={{ width: i === active ? '48px' : '16px', transition: 'width 0.5s' }}
                aria-label={`Témoignage ${i + 1}`}
              >
                {i === active && (
                  <motion.div
                    key={`progress-${active}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 9, ease: 'linear' }}
                    className="absolute inset-0 bg-brand-gold origin-left"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Media bar */}
        <FadeInOnScroll delay={0.2}>
          <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-brand-charcoal">
            <p className="text-brand-subtle text-[10px] tracking-[0.4em] uppercase mb-6 sm:mb-8 text-center">
              Vu dans les médias
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 md:gap-20">
              {['BBC', 'France 5', 'RTC', 'TMC', 'Le Figaro'].map((media) => (
                <span
                  key={media}
                  className="font-serif text-lg sm:text-2xl md:text-3xl text-brand-muted/40 tracking-widest hover:text-brand-gold/70 transition-colors"
                >
                  {media}
                </span>
              ))}
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
