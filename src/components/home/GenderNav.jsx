import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import FadeInOnScroll from '../ui/FadeInOnScroll'
import SectionHeading from '../ui/SectionHeading'

const cards = [
  {
    gender: 'Femme',
    symbol: '♀',
    href: '/femme',
    tagline: 'Féminité & Épanouissement',
    description:
      'Hyménoplastie, Nymphoplastie, Vaginoplastie, Sensibilité du Clitoris, Lifting du Pubis — des interventions conçues pour le bien-être intime féminin.',
    procedures: ['Hyménoplastie', 'Nymphoplastie', 'Vaginoplastie', 'Sensibilité du Clitoris', 'Lifting du Pubis'],
    gradient: 'from-[#1a1016] via-[#18101a] to-[#0f0a12]',
    accentColor: '#D4A8C9',
    glowColor: 'rgba(212,168,201,0.08)',
  },
  {
    gender: 'Homme',
    symbol: '♂',
    href: '/homme',
    tagline: 'Virilité & Confiance',
    description:
      'Allongement, Grossissement, Circoncision, Implants Testiculaires, Lifting Scrotal — des solutions pour l\'épanouissement masculin intime.',
    procedures: ['Allongement du Pénis', 'Grossissement du Pénis', 'Circoncision', 'Implants Testiculaires', 'Lifting Scrotal'],
    gradient: 'from-[#0f1016] via-[#101318] to-[#0a0d12]',
    accentColor: '#A8C4D4',
    glowColor: 'rgba(168,196,212,0.08)',
  },
]

export default function GenderNav() {
  return (
    <section className="py-24 md:py-32 bg-brand-black" id="sections">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nos Spécialités"
          title="Chirurgie sur mesure"
          subtitle="Des interventions hautement spécialisées pour hommes et femmes, réalisées avec une expertise inégalée et dans le respect absolu de votre intimité."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {cards.map(({ gender, symbol, href, tagline, description, procedures, gradient, accentColor, glowColor }, i) => (
            <FadeInOnScroll key={gender} delay={i * 0.15}>
              <Link to={href} className="block group">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`relative rounded-2xl overflow-hidden border border-brand-charcoal group-hover:border-brand-gold/40 transition-all duration-500 bg-gradient-to-br ${gradient} p-8 md:p-10 min-h-[420px] flex flex-col`}
                  style={{ boxShadow: `0 0 0 rgba(201,169,110,0)` }}
                >
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{ background: `radial-gradient(ellipse at 30% 30%, ${glowColor} 0%, transparent 70%)` }}
                  />
                  {/* Gold top border line that grows */}
                  <div className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full bg-gold-gradient transition-all duration-700 ease-out rounded-t-2xl" />

                  {/* Symbol */}
                  <div className="relative z-10 mb-6">
                    <span
                      className="font-serif text-7xl md:text-8xl leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                      style={{ color: accentColor }}
                    >
                      {symbol}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-1">
                    <p className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-2">{tagline}</p>
                    <h3 className="font-serif text-4xl md:text-5xl text-brand-white mb-4">{gender}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed mb-8">{description}</p>

                    {/* Procedure list */}
                    <ul className="space-y-2 mb-8">
                      {procedures.map((proc) => (
                        <li key={proc} className="flex items-center gap-2 text-brand-subtle text-xs">
                          <span className="text-brand-gold/50 text-[8px]">✦</span>
                          {proc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="relative z-10 flex items-center gap-3 text-brand-gold text-sm tracking-widest uppercase group-hover:gap-5 transition-all duration-300">
                    <span>Découvrir</span>
                    <ArrowRight size={16} />
                  </div>
                </motion.div>
              </Link>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
