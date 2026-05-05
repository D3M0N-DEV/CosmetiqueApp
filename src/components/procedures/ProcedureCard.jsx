import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Clock, Zap, Activity, CheckCircle2 } from 'lucide-react'
import FadeInOnScroll from '../ui/FadeInOnScroll'

export default function ProcedureCard({ procedure, index }) {
  const [open, setOpen] = useState(false)

  const getDurationIcon = () => <Clock size={12} />
  const getAnesthesiaIcon = () => <Zap size={12} />

  // Extract key stats (duration + anesthesia) from details array
  const duration = procedure.details?.find((d) => d.label === 'Durée')?.value
  const anesthesia = procedure.details?.find((d) => d.label === 'Anesthésie')?.value
  const recovery = procedure.details?.find((d) =>
    d.label.toLowerCase().includes('reprise') || d.label.toLowerCase().includes('hospitalisation')
  )?.value

  return (
    <FadeInOnScroll delay={index * 0.08}>
      <motion.div
        layout
        className={`rounded-2xl border overflow-hidden transition-all duration-500 ${
          open
            ? 'border-brand-gold/50 bg-brand-card shadow-gold'
            : 'border-brand-charcoal bg-brand-card hover:border-brand-gold/30'
        }`}
      >
        {/* Gold top accent bar */}
        <div className={`h-0.5 bg-gold-gradient transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} />

        {/* Header — always visible */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full text-left p-6 md:p-8 group"
          aria-expanded={open}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              {/* Number + title */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-brand-gold/40 font-serif text-sm font-bold tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-brand-white group-hover:text-brand-gold transition-colors">
                  {procedure.title}
                </h3>
              </div>
              <p className="text-brand-gold text-xs tracking-widest uppercase mb-3">
                {procedure.subtitle}
              </p>
              <p className="text-brand-muted text-sm leading-relaxed">
                {procedure.shortDescription}
              </p>

              {/* Quick stat badges */}
              {(duration || anesthesia || recovery) && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {duration && (
                    <span className="inline-flex items-center gap-1.5 bg-brand-charcoal text-brand-muted text-xs px-3 py-1.5 rounded-full border border-brand-border">
                      <Clock size={11} className="text-brand-gold" />
                      {duration}
                    </span>
                  )}
                  {anesthesia && (
                    <span className="inline-flex items-center gap-1.5 bg-brand-charcoal text-brand-muted text-xs px-3 py-1.5 rounded-full border border-brand-border">
                      <Zap size={11} className="text-brand-gold" />
                      Anesthésie {anesthesia}
                    </span>
                  )}
                  {recovery && (
                    <span className="inline-flex items-center gap-1.5 bg-brand-charcoal text-brand-muted text-xs px-3 py-1.5 rounded-full border border-brand-border">
                      <Activity size={11} className="text-brand-gold" />
                      {recovery}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Toggle icon */}
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                open ? 'border-brand-gold text-brand-gold' : 'border-brand-charcoal text-brand-muted group-hover:border-brand-gold/50 group-hover:text-brand-gold/70'
              }`}
            >
              <ChevronDown size={18} />
            </motion.div>
          </div>
        </button>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-8 border-t border-brand-charcoal pt-6">
                {/* Full description */}
                <p className="text-brand-muted text-sm leading-relaxed mb-8">
                  {procedure.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Details table */}
                  {procedure.details && (
                    <div>
                      <h4 className="text-brand-white text-xs tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                        <span className="w-4 h-px bg-brand-gold" />
                        Détails de l'intervention
                      </h4>
                      <dl className="space-y-3">
                        {procedure.details.map(({ label, value }) => (
                          <div key={label} className="flex items-start gap-3">
                            <dt className="text-brand-subtle text-xs w-36 flex-shrink-0 pt-0.5">{label}</dt>
                            <dd className="text-brand-cream text-sm leading-snug">{value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  )}

                  {/* Benefits */}
                  {procedure.benefits && (
                    <div>
                      <h4 className="text-brand-white text-xs tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                        <span className="w-4 h-px bg-brand-gold" />
                        Avantages clés
                      </h4>
                      <ul className="space-y-3">
                        {procedure.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3">
                            <CheckCircle2 size={15} className="text-brand-gold flex-shrink-0 mt-0.5" />
                            <span className="text-brand-muted text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="bg-gold-gradient text-brand-black font-semibold px-6 py-3 rounded-lg text-sm tracking-wider hover:opacity-90 transition-opacity"
                  >
                    Consulter pour cette intervention
                  </a>
                  <a
                    href="tel:+33149230081"
                    className="border border-brand-gold/40 hover:border-brand-gold text-brand-gold px-6 py-3 rounded-lg text-sm tracking-wider transition-colors"
                  >
                    Appeler Paris
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </FadeInOnScroll>
  )
}
