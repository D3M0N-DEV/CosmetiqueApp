import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import FadeInOnScroll from '../ui/FadeInOnScroll'
import SectionHeading from '../ui/SectionHeading'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [dir, setDir] = useState(1)

  const go = (next) => {
    setDir(next > active ? 1 : -1)
    setActive(next)
  }
  const prev = () => go((active - 1 + testimonials.length) % testimonials.length)
  const next = () => go((active + 1) % testimonials.length)

  const t = testimonials[active]

  return (
    <section id="temoignages" className="py-24 md:py-36 bg-brand-dark relative overflow-hidden">
      {/* Background quote mark */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 font-serif text-[20rem] text-brand-gold/[0.025] select-none pointer-events-none leading-none">
        "
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Témoignages"
          title="Ce que disent nos patients"
          subtitle="Des hommes et des femmes qui ont retrouvé confiance et épanouissement grâce aux soins du Dr Abécassis."
        />

        <FadeInOnScroll delay={0.2}>
          <div className="relative mt-4">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-8">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-brand-gold text-xl">★</span>
              ))}
            </div>

            {/* Card */}
            <div className="relative min-h-[240px] flex items-center justify-center">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={active}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -60 }}
                  transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                >
                  <Quote size={32} className="text-brand-gold/30 mb-6 mx-auto" />
                  <blockquote className="font-serif text-xl md:text-2xl text-brand-cream leading-relaxed italic mb-8 max-w-3xl">
                    "{t.text}"
                  </blockquote>
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-brand-white font-medium">{t.name}</p>
                    <p className="text-brand-gold text-xs tracking-widest uppercase">{t.procedure}</p>
                    <p className="text-brand-subtle text-xs">{t.city}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-brand-charcoal hover:border-brand-gold text-brand-muted hover:text-brand-gold transition-all flex items-center justify-center"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft size={18} />
              </button>
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === active
                        ? 'w-6 h-2 bg-brand-gold'
                        : 'w-2 h-2 bg-brand-charcoal hover:bg-brand-subtle'
                    }`}
                    aria-label={`Témoignage ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-brand-charcoal hover:border-brand-gold text-brand-muted hover:text-brand-gold transition-all flex items-center justify-center"
                aria-label="Témoignage suivant"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Media mentions */}
        <FadeInOnScroll delay={0.3}>
          <div className="mt-16 pt-10 border-t border-brand-charcoal text-center">
            <p className="text-brand-subtle text-xs tracking-[0.3em] uppercase mb-6">Vu dans les médias</p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {['BBC', 'France 5', 'RTC', 'TMC'].map((media) => (
                <span key={media} className="font-serif text-lg text-brand-muted/50 tracking-widest hover:text-brand-gold/60 transition-colors">
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
