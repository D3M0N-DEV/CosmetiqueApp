import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Clock, Heart } from 'lucide-react'
import { proceduresFemme } from '../data/procedures-femme'
import ProcedureHero from '../components/procedures/ProcedureHero'
import ProcedureCard from '../components/procedures/ProcedureCard'
import FadeInOnScroll from '../components/ui/FadeInOnScroll'
import GoldDivider from '../components/ui/GoldDivider'

const pillars = [
  { icon: Shield, title: 'Confidentialité totale', desc: 'Votre intimité est sacrée. Discrétion absolue garantie à chaque étape.' },
  { icon: Clock, title: 'Interventions rapides', desc: 'La plupart des procédures durent moins d\'une heure, ambulatoires.' },
  { icon: Heart, title: 'Accompagnement humain', desc: 'Le Dr Abécassis vous accompagne avec bienveillance avant, pendant et après.' },
]

export default function FemmePage() {
  useEffect(() => {
    document.title = 'Chirurgie Intime Femme — Dr. Abécassis'
  }, [])

  return (
    <div className="bg-brand-black min-h-screen">
      <ProcedureHero
        gender="Femme"
        symbol="♀"
        tagline="Féminité & Épanouissement"
        accentColor="#D4A8C9"
        description="Des interventions chirurgicales intimes spécialement conçues pour les femmes, réalisées avec expertise, douceur et une confidentialité absolue par le Dr Marc Abécassis."
      />

      {/* Pillars */}
      <section className="py-12 sm:py-16 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {pillars.map(({ icon: Icon, title, desc }, i) => (
              <FadeInOnScroll key={title} delay={i * 0.1}>
                <div className="flex items-start gap-4 p-6 rounded-xl border border-brand-charcoal bg-brand-card/60">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="text-brand-white font-medium mb-1">{title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Procedures */}
      <section className="py-16 sm:py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <div className="text-center mb-14">
              <p className="text-brand-gold text-xs tracking-[0.35em] uppercase mb-4">Nos interventions</p>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-white">
                {proceduresFemme.length} procédures disponibles
              </h2>
              <p className="text-brand-muted mt-4 max-w-xl mx-auto text-sm leading-relaxed">
                Cliquez sur chaque intervention pour découvrir les détails, la technique, et les informations pratiques.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="space-y-4">
            {proceduresFemme.map((procedure, i) => (
              <ProcedureCard key={procedure.id} procedure={procedure} index={i} />
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* CTA section */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInOnScroll>
            <p className="text-brand-gold text-xs tracking-[0.35em] uppercase mb-4">Prochaine étape</p>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-white mb-6">
              Prenez rendez-vous
            </h2>
            <p className="text-brand-muted leading-relaxed mb-10 max-w-xl mx-auto">
              La première consultation est essentielle. Le Dr Abécassis prendra le temps de vous écouter,
              d'évaluer votre situation et de vous proposer la solution la plus adaptée.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)}
                className="bg-gold-gradient text-brand-black font-semibold px-8 py-4 rounded-lg text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
              >
                Demander une consultation
              </Link>
              <Link
                to="/"
                className="flex items-center gap-2 text-brand-muted hover:text-brand-gold text-sm tracking-wider transition-colors"
              >
                <ArrowLeft size={16} />
                Retour à l'accueil
              </Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  )
}
