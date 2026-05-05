import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, TrendingUp, Star } from 'lucide-react'
import { proceduresHomme } from '../data/procedures-homme'
import ProcedureHero from '../components/procedures/ProcedureHero'
import ProcedureCard from '../components/procedures/ProcedureCard'
import FadeInOnScroll from '../components/ui/FadeInOnScroll'
import GoldDivider from '../components/ui/GoldDivider'

const pillars = [
  { icon: Shield, title: 'Discrétion absolue', desc: 'Confidentialité médicale totale. Vos consultations restent strictement privées.' },
  { icon: TrendingUp, title: 'Résultats prouvés', desc: '+3 000 patients traités avec succès depuis 1992. Techniques validées scientifiquement.' },
  { icon: Star, title: 'Expertise exclusive', desc: 'Dr Abécassis, pionnier européen de la chirurgie intime masculine.' },
]

export default function HommePage() {
  useEffect(() => {
    document.title = 'Chirurgie Intime Homme — Dr. Abécassis'
  }, [])

  return (
    <div className="bg-brand-black min-h-screen">
      <ProcedureHero
        gender="Homme"
        symbol="♂"
        tagline="Virilité & Confiance"
        accentColor="#A8C4D4"
        description="Des interventions chirurgicales intimes de haute précision pour les hommes, réalisées par l'un des plus grands spécialistes mondiaux avec plus de 25 ans d'expertise."
      />

      {/* Pillars */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* Quote */}
      <section className="py-12 bg-brand-black">
        <FadeInOnScroll>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <blockquote className="font-serif text-2xl md:text-3xl text-brand-cream/70 italic leading-relaxed">
              « Un centimètre dans le pénis… c'est un kilomètre dans la tête. »
            </blockquote>
            <cite className="block mt-4 text-brand-gold text-xs tracking-[0.3em] uppercase not-italic">
              — Dr. Marc Abécassis
            </cite>
          </div>
        </FadeInOnScroll>
      </section>

      {/* Procedures */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <div className="text-center mb-14">
              <p className="text-brand-gold text-xs tracking-[0.35em] uppercase mb-4">Nos interventions</p>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-white">
                {proceduresHomme.length} procédures disponibles
              </h2>
              <p className="text-brand-muted mt-4 max-w-xl mx-auto text-sm leading-relaxed">
                Cliquez sur chaque intervention pour découvrir la technique, la durée, l'anesthésie, la récupération et les résultats.
              </p>
            </div>
          </FadeInOnScroll>

          <div className="space-y-4">
            {proceduresHomme.map((procedure, i) => (
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
              Osez consulter
            </h2>
            <p className="text-brand-muted leading-relaxed mb-10 max-w-xl mx-auto">
              Poser la question est déjà un acte de courage. Le Dr Abécassis reçoit ses patients
              sans jugement et avec la plus grande bienveillance. La consultation est totalement confidentielle.
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
