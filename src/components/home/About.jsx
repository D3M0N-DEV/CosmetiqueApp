import { motion } from 'framer-motion'
import { Award, BookOpen, Globe, Users } from 'lucide-react'
import FadeInOnScroll from '../ui/FadeInOnScroll'
import SectionHeading from '../ui/SectionHeading'

const credentials = [
  { icon: Award, text: 'Accrédité par la Haute Autorité de Santé (HAS)' },
  { icon: BookOpen, text: 'Pionnier de la chirurgie intime depuis 1992' },
  { icon: Globe, text: 'Formé par le Dr Pierre Fournier, inventeur de la lipoaspiration' },
  { icon: Users, text: 'Plus de 3 000 patients accompagnés avec succès' },
]

export default function About() {
  return (
    <section id="docteur" className="py-24 md:py-36 bg-brand-dark relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-3/4 opacity-30"
        style={{ background: 'linear-gradient(to bottom, transparent, #C9A96E, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <FadeInOnScroll direction="right" className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Gold frame accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-gold/50 rounded-tl-sm z-10" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-gold/50 rounded-br-sm z-10" />

              {/* Portrait placeholder */}
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-brand-charcoal shadow-card">
                <div className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{ background: 'linear-gradient(145deg, #1f1f1f 0%, #141414 100%)' }}>
                  <div className="w-32 h-32 rounded-full bg-brand-charcoal border border-brand-gold/20 flex items-center justify-center mb-6">
                    <span className="font-serif text-4xl text-brand-gold/60">MA</span>
                  </div>
                  <p className="font-serif text-brand-cream/40 text-lg">Dr. Marc Abécassis</p>
                  <p className="text-brand-muted text-xs tracking-widest uppercase mt-2">Chirurgien</p>
                </div>
                {/* Gold overlay gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/3"
                  style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.8), transparent)' }} />
              </div>

              {/* Floating badge */}
              <div className="absolute -right-5 top-1/4 bg-brand-card border border-brand-gold/30 rounded-lg px-4 py-3 shadow-gold">
                <p className="text-brand-gold font-serif text-2xl font-bold">25+</p>
                <p className="text-brand-muted text-xs tracking-wider uppercase">Années<br/>d'expérience</p>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Text column */}
          <div>
            <SectionHeading
              eyebrow="Le Chirurgien"
              title="Dr. Marc Abécassis"
              center={false}
            />

            <FadeInOnScroll delay={0.1}>
              <p className="text-brand-muted leading-relaxed mb-6">
                Chirurgien plasticien et esthétique, le Dr Marc Abécassis est le pionnier de la
                chirurgie intime en Europe. Formé par le Dr Pierre Fournier — inventeur de la
                lipoaspiration moderne — il exerce depuis 1992 et a développé des techniques
                exclusives comme la <span className="text-brand-gold">lipopénosculpture</span>.
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.15}>
              <p className="text-brand-muted leading-relaxed mb-10">
                Ses cabinets à Paris, Genève et Londres accueillent des patients du monde entier
                dans un cadre de totale confidentialité. Reconnu par la presse internationale
                (BBC, France 5, TMC), il allie expertise chirurgicale et accompagnement humain
                profond, car <em className="text-brand-cream not-italic">« soigner la souffrance »</em> est
                au cœur de sa démarche.
              </p>
            </FadeInOnScroll>

            {/* Credentials grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map(({ icon: Icon, text }, i) => (
                <FadeInOnScroll key={text} delay={0.2 + i * 0.08}>
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-brand-charcoal bg-brand-card/50 hover:border-brand-gold/30 transition-colors">
                    <Icon size={16} className="text-brand-gold mt-0.5 flex-shrink-0" />
                    <p className="text-brand-muted text-sm leading-snug">{text}</p>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>

            <FadeInOnScroll delay={0.45}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="bg-gold-gradient text-brand-black font-semibold px-6 py-3 rounded text-sm tracking-wider hover:opacity-90 transition-opacity"
                >
                  Prendre Rendez-vous
                </a>
                <a
                  href="tel:+33149230081"
                  className="border border-brand-gold/40 hover:border-brand-gold text-brand-gold px-6 py-3 rounded text-sm tracking-wider transition-colors"
                >
                  Appeler Paris
                </a>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
