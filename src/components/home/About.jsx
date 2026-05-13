import { Award, BookOpen, Globe, Users } from 'lucide-react'
import FadeInOnScroll from '../ui/FadeInOnScroll'
import SplitText from '../ui/SplitText'
import MagneticButton from '../ui/MagneticButton'

const credentials = [
  { icon: Award, text: 'Accrédité par la Haute Autorité de Santé (HAS)' },
  { icon: BookOpen, text: 'Pionnier de la chirurgie intime depuis 1992' },
  { icon: Globe, text: 'Formé par le Dr. Pierre Fournier, inventeur de la lipoaspiration' },
  { icon: Users, text: 'Plus de 3 000 patients accompagnés avec succès' },
]

export default function About() {
  return (
    <section id="docteur" className="py-20 sm:py-24 md:py-40 bg-brand-dark relative overflow-hidden">
      {/* Section number — hide on small viewports */}
      <div className="hidden md:block absolute top-12 right-6 lg:right-12 text-brand-gold/30 text-xs tracking-[0.4em] uppercase font-mono">
        01 / Le Docteur
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section intro */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6 mb-12 sm:mb-20">
          <div className="col-span-12 lg:col-span-2">
            <p className="text-brand-gold text-[10px] tracking-[0.4em] uppercase">Rencontre</p>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <h2 className="font-serif text-[clamp(2.25rem,8vw,6rem)] text-brand-white leading-[0.95]">
              <SplitText text="Une vie au service" by="word" />
              <br />
              <span className="italic text-gold-gradient">
                <SplitText text="de votre intimité." by="word" delay={0.2} />
              </span>
            </h2>
          </div>
        </div>

        {/* Magazine layout */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* Portrait — sticky on desktop only */}
          <div className="col-span-12 lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <FadeInOnScroll direction="right">
                <div className="relative max-w-md mx-auto lg:max-w-none">
                  <div className="absolute -top-3 -left-3 w-12 h-12 sm:w-16 sm:h-16 border-t border-l border-brand-gold/60 z-10" />
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 sm:w-16 sm:h-16 border-b border-r border-brand-gold/60 z-10" />

                  <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-gradient-to-br from-brand-charcoal to-brand-dark">
                    <div className="absolute inset-0 bg-noise opacity-30" />
                    <div className="relative h-full flex flex-col items-center justify-center p-6 sm:p-8">
                      <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-brand-charcoal to-brand-black border border-brand-gold/30 flex items-center justify-center mb-5 sm:mb-6 shadow-gold">
                        <span className="font-serif text-4xl sm:text-6xl text-brand-gold/70">MA</span>
                      </div>
                      <p className="font-serif text-xl sm:text-2xl text-brand-white">Marc Abécassis</p>
                      <p className="text-brand-gold text-[10px] tracking-[0.4em] uppercase mt-2">
                        Chirurgien Plasticien
                      </p>
                      <div className="w-10 sm:w-12 h-px bg-brand-gold mt-5 sm:mt-6" />
                      <p className="text-brand-muted text-[10px] sm:text-xs tracking-widest uppercase mt-3 sm:mt-4">
                        Paris · Genève · Londres
                      </p>
                    </div>
                    <div
                      className="absolute inset-x-0 bottom-0 h-32"
                      style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.8), transparent)' }}
                    />
                  </div>

                  <div className="absolute right-2 sm:-right-4 lg:-right-8 bottom-10 sm:bottom-16 bg-brand-black border border-brand-gold/30 rounded-full px-3 sm:px-5 py-2 sm:py-3 shadow-gold">
                    <p className="text-brand-gold text-[9px] sm:text-xs tracking-[0.3em] uppercase whitespace-nowrap">
                      « Soigner la souffrance »
                    </p>
                  </div>
                </div>
              </FadeInOnScroll>
            </div>
          </div>

          {/* Editorial content */}
          <div className="col-span-12 lg:col-span-7 space-y-6 sm:space-y-8 mt-4 lg:mt-0">
            <FadeInOnScroll>
              <p className="font-serif text-xl sm:text-2xl md:text-3xl text-brand-white leading-snug">
                <span className="text-brand-gold">"</span>
                Chirurgien plasticien et esthétique, le Dr. Marc Abécassis est le pionnier de la
                chirurgie intime en Europe.
                <span className="text-brand-gold">"</span>
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.1}>
              <p className="text-brand-cream/80 text-base md:text-lg leading-relaxed font-light">
                Formé par le Dr. Pierre Fournier — inventeur de la lipoaspiration moderne — il exerce
                depuis 1992 et a développé des techniques exclusives comme la{' '}
                <em className="text-brand-gold not-italic font-normal">lipopénosculpture</em>.
                Ses cabinets à Paris, Genève et Londres accueillent des patients du monde entier
                dans un cadre de totale confidentialité.
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.15}>
              <p className="text-brand-muted text-base leading-relaxed">
                Reconnu par la presse internationale — BBC, France 5, RTC, TMC — il allie
                expertise chirurgicale et accompagnement humain profond. Sa démarche est
                ancrée dans une conviction : la chirurgie intime change profondément la vie
                de ceux qui s'y soumettent.
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.2}>
              <blockquote className="border-l-2 border-brand-gold pl-5 sm:pl-8 py-2 my-8 sm:my-12">
                <p className="font-serif text-lg sm:text-xl md:text-2xl text-brand-cream italic leading-relaxed">
                  « Un centimètre dans le pénis… c'est un kilomètre dans la tête. »
                </p>
                <cite className="block mt-3 sm:mt-4 text-brand-gold text-[10px] tracking-[0.4em] uppercase not-italic">
                  Dr. Marc Abécassis
                </cite>
              </blockquote>
            </FadeInOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 sm:pt-4">
              {credentials.map(({ icon: Icon, text }, i) => (
                <FadeInOnScroll key={text} delay={0.25 + i * 0.06}>
                  <div className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl border border-brand-charcoal bg-brand-card/40 hover:border-brand-gold/30 transition-colors group">
                    <div className="w-9 h-9 rounded-full border border-brand-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/10 transition-colors">
                      <Icon size={14} className="text-brand-gold" />
                    </div>
                    <p className="text-brand-cream/80 text-sm leading-snug pt-1">{text}</p>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>

            <FadeInOnScroll delay={0.5}>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <MagneticButton
                  as="a"
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="bg-gold-gradient text-brand-black font-semibold px-6 sm:px-7 py-4 rounded-full text-xs sm:text-sm tracking-widest uppercase text-center"
                >
                  Prendre Rendez-vous
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="tel:+33149230081"
                  className="border border-brand-charcoal hover:border-brand-gold text-brand-cream hover:text-brand-gold px-6 sm:px-7 py-4 rounded-full text-xs sm:text-sm tracking-widest uppercase transition-colors text-center"
                >
                  +33 (0)1 49 23 00 81
                </MagneticButton>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
