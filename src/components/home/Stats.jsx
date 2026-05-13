import { Award, Globe2, Heart, Sparkles, Clock } from 'lucide-react'
import FadeInOnScroll from '../ui/FadeInOnScroll'
import AnimatedCounter from '../ui/AnimatedCounter'
import SpotlightCard from '../ui/SpotlightCard'

export default function Stats() {
  return (
    <section className="py-20 sm:py-24 md:py-32 bg-brand-black relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(201,169,110,0.5) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-8 relative">
        <FadeInOnScroll>
          <div className="flex items-end justify-between mb-10 sm:mb-12 flex-wrap gap-4">
            <div>
              <p className="text-brand-gold text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3">
                Chiffres clés
              </p>
              <h2 className="font-serif text-[clamp(2rem,7vw,3.5rem)] text-brand-white max-w-2xl leading-tight">
                Une expertise <span className="italic text-gold-gradient">qui parle</span> d'elle-même
              </h2>
            </div>
            <div className="text-brand-muted text-sm max-w-sm">
              Trois décennies au service de la chirurgie intime, avec une réputation construite patient par patient.
            </div>
          </div>
        </FadeInOnScroll>

        {/* Bento grid: stacks cleanly on mobile, asymmetric on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-3 sm:gap-4 md:auto-rows-fr md:min-h-[480px]">
          {/* Featured big card */}
          <FadeInOnScroll delay={0.05} className="md:col-span-6 md:row-span-2">
            <SpotlightCard className="relative h-full rounded-3xl border border-brand-charcoal bg-gradient-to-br from-brand-card to-brand-dark p-7 sm:p-10 md:p-12 flex flex-col justify-between overflow-hidden group min-h-[320px] md:min-h-0">
              <div className="absolute -top-4 sm:-top-8 -right-2 sm:-right-4 font-serif text-[8rem] sm:text-[12rem] md:text-[16rem] leading-none text-brand-gold/[0.06] select-none pointer-events-none">
                25
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-brand-gold text-[10px] sm:text-xs tracking-[0.3em] uppercase">
                  <Clock size={14} />
                  Pionnier depuis 1992
                </div>
              </div>
              <div className="relative z-10 mt-12">
                <div className="font-serif text-[clamp(4rem,16vw,10rem)] leading-none text-gold-gradient font-medium">
                  <AnimatedCounter end={25} suffix="+" />
                </div>
                <div className="text-brand-white text-lg sm:text-xl md:text-2xl mt-3 font-light">Années d'expertise</div>
                <p className="text-brand-muted text-sm mt-3 sm:mt-4 max-w-md leading-relaxed">
                  Formé par le Dr. Pierre Fournier, inventeur de la lipoaspiration moderne. Une carrière dédiée à l'innovation et à l'humain.
                </p>
              </div>
            </SpotlightCard>
          </FadeInOnScroll>

          {/* Wide right top: 3000+ patients */}
          <FadeInOnScroll delay={0.1} className="md:col-span-6 md:row-span-1">
            <SpotlightCard className="relative h-full rounded-3xl border border-brand-charcoal bg-brand-card p-6 sm:p-8 flex items-center justify-between overflow-hidden group min-h-[160px]">
              <div>
                <div className="flex items-center gap-2 text-brand-gold text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-3">
                  <Heart size={12} />
                  Patients traités
                </div>
                <div className="font-serif text-5xl sm:text-6xl md:text-7xl text-brand-white">
                  <AnimatedCounter end={3000} suffix="+" />
                </div>
                <p className="text-brand-muted text-sm mt-2">Hommes et femmes accompagnés</p>
              </div>
              <Sparkles size={48} className="text-brand-gold/15 sm:hidden md:block lg:size-[64px]" />
            </SpotlightCard>
          </FadeInOnScroll>

          {/* Pair: 3 cities + 5 stars */}
          <FadeInOnScroll delay={0.15} className="md:col-span-3 md:row-span-1">
            <SpotlightCard className="relative h-full rounded-3xl border border-brand-charcoal bg-brand-card p-6 flex flex-col justify-between overflow-hidden group min-h-[140px]">
              <Globe2 size={20} className="text-brand-gold" />
              <div className="mt-4">
                <div className="font-serif text-4xl sm:text-5xl md:text-6xl text-brand-white">
                  <AnimatedCounter end={3} />
                </div>
                <p className="text-brand-gold text-[10px] tracking-[0.3em] uppercase mt-2">Capitales</p>
              </div>
            </SpotlightCard>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.2} className="md:col-span-3 md:row-span-1">
            <SpotlightCard className="relative h-full rounded-3xl border border-brand-charcoal bg-gradient-to-br from-brand-card to-brand-dark p-6 flex flex-col justify-between overflow-hidden group min-h-[140px]">
              <Award size={20} className="text-brand-gold" />
              <div className="mt-4">
                <div className="flex gap-0.5 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-brand-gold text-sm">★</span>
                  ))}
                </div>
                <div className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-white">
                  5.0<span className="text-brand-muted text-base">/5</span>
                </div>
                <p className="text-brand-muted text-[10px] tracking-[0.2em] uppercase mt-1">
                  <AnimatedCounter end={36} /> avis vérifiés
                </p>
              </div>
            </SpotlightCard>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  )
}
