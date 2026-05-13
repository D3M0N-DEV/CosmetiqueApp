import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import FadeInOnScroll from '../ui/FadeInOnScroll'
import TiltCard from '../ui/TiltCard'
import SplitText from '../ui/SplitText'

const cards = [
  {
    gender: 'Femme',
    symbol: '♀',
    href: '/femme',
    number: '01',
    tagline: 'Féminité · Épanouissement',
    description:
      'Hyménoplastie, Nymphoplastie, Vaginoplastie, Sensibilité du Clitoris, Lifting du Pubis.',
    procedures: ['Hyménoplastie', 'Nymphoplastie', 'Vaginoplastie', 'Sensibilité du Clitoris', 'Lifting du Pubis'],
    glow: 'rgba(212,168,201,0.10)',
    bg: 'from-[#1a1016] via-[#150d18] to-[#0f0a12]',
  },
  {
    gender: 'Homme',
    symbol: '♂',
    href: '/homme',
    number: '02',
    tagline: 'Virilité · Confiance',
    description:
      'Allongement du Pénis, Grossissement, Circoncision, Implants Testiculaires, Lifting Scrotal.',
    procedures: ['Allongement du Pénis', 'Grossissement du Pénis', 'Circoncision', 'Implants Testiculaires', 'Lifting Scrotal'],
    glow: 'rgba(168,196,212,0.10)',
    bg: 'from-[#0f1016] via-[#0e1218] to-[#0a0d12]',
  },
]

export default function GenderNav() {
  return (
    <section className="py-20 sm:py-24 md:py-36 bg-brand-black relative overflow-hidden">
      <div className="hidden md:block absolute top-12 right-6 lg:right-12 text-brand-gold/30 text-xs tracking-[0.4em] uppercase font-mono">
        02 / Spécialités
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6 mb-10 sm:mb-16">
          <div className="col-span-12 lg:col-span-2">
            <p className="text-brand-gold text-[10px] tracking-[0.4em] uppercase">Domaines</p>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <h2 className="font-serif text-[clamp(2.25rem,8vw,6rem)] text-brand-white leading-[0.95]">
              <SplitText text="Pour elles," by="word" />
              <br />
              <span className="italic text-gold-gradient">
                <SplitText text="pour eux." by="word" delay={0.15} />
              </span>
            </h2>
            <FadeInOnScroll delay={0.3}>
              <p className="text-brand-muted text-sm sm:text-base md:text-lg max-w-2xl mt-6 sm:mt-8 leading-relaxed">
                Des interventions hautement spécialisées, réalisées avec une expertise inégalée et
                dans le respect absolu de votre intimité.
              </p>
            </FadeInOnScroll>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {cards.map((c, i) => (
            <FadeInOnScroll key={c.gender} delay={i * 0.15}>
              <Link to={c.href} className="block group" data-cursor-hover>
                <TiltCard
                  intensity={5}
                  className={`relative rounded-3xl overflow-hidden border border-brand-charcoal group-hover:border-brand-gold/40 bg-gradient-to-br ${c.bg} transition-all duration-500 will-change-transform`}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl"
                    style={{
                      background: `radial-gradient(600px circle at 30% 0%, ${c.glow} 0%, transparent 60%)`,
                    }}
                  />
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative p-7 sm:p-10 md:p-12 min-h-[400px] sm:min-h-[480px] flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-8 sm:mb-12">
                      <div className="font-mono text-brand-gold/40 text-xs tracking-widest">
                        {c.number}
                      </div>
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-brand-gold/30 group-hover:border-brand-gold group-hover:bg-brand-gold flex items-center justify-center transition-all duration-300">
                        <ArrowUpRight
                          size={18}
                          className="text-brand-gold group-hover:text-brand-black -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Symbol watermark — scaled for mobile */}
                    <span
                      className="absolute right-4 sm:right-8 bottom-4 sm:bottom-8 font-serif text-[7rem] sm:text-[10rem] md:text-[12rem] leading-none opacity-[0.05] group-hover:opacity-[0.10] transition-opacity duration-700 select-none pointer-events-none text-brand-gold"
                    >
                      {c.symbol}
                    </span>

                    {/* Content */}
                    <div className="flex-1 relative z-10">
                      <p className="text-brand-gold text-[10px] tracking-[0.4em] uppercase mb-3 sm:mb-4">
                        {c.tagline}
                      </p>
                      <h3 className="font-serif text-5xl sm:text-6xl md:text-7xl text-brand-white mb-4 sm:mb-6 leading-none">
                        <span className="italic">{c.gender}</span>
                      </h3>
                      <p className="text-brand-cream/70 text-sm leading-relaxed max-w-md">
                        {c.description}
                      </p>
                    </div>

                    <ul className="mt-8 sm:mt-10 space-y-2 relative z-10">
                      {c.procedures.map((proc, idx) => (
                        <li
                          key={proc}
                          className="flex items-center gap-3 text-brand-muted text-xs group-hover:text-brand-cream/80 transition-colors"
                        >
                          <span className="font-mono text-brand-gold/50 text-[10px] w-5">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="flex-1">{proc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 sm:mt-10 pt-6 border-t border-brand-charcoal flex items-center justify-between relative z-10">
                      <span className="text-brand-gold text-[10px] sm:text-xs tracking-[0.3em] uppercase">
                        Découvrir l'espace
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-px bg-brand-gold group-hover:w-16 transition-all duration-500" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
