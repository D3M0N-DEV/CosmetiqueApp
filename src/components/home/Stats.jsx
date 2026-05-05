import FadeInOnScroll from '../ui/FadeInOnScroll'
import AnimatedCounter from '../ui/AnimatedCounter'
import GoldDivider from '../ui/GoldDivider'

const stats = [
  { value: 25, suffix: '+', label: 'Années d\'expérience', description: 'Pionnier depuis 1992' },
  { value: 3000, suffix: '+', label: 'Patients traités', description: 'Hommes et femmes confondus' },
  { value: 3, suffix: '', label: 'Capitales européennes', description: 'Paris · Genève · Londres' },
  { value: 36, suffix: '', label: 'Avis vérifiés', description: 'Note moyenne 5 étoiles' },
]

export default function Stats() {
  return (
    <section className="py-20 bg-brand-black relative overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 50%, #C9A96E 0%, transparent 50%), radial-gradient(circle at 75% 50%, #C9A96E 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-brand-charcoal rounded-2xl overflow-hidden shadow-card">
          {stats.map(({ value, suffix, label, description }, i) => (
            <FadeInOnScroll key={label} delay={i * 0.1}>
              <div className="bg-brand-dark p-8 md:p-10 text-center group hover:bg-brand-card transition-colors duration-300">
                <p className="font-serif text-5xl md:text-6xl text-gold-gradient font-bold mb-2">
                  <AnimatedCounter end={value} suffix={suffix} />
                </p>
                <p className="text-brand-white text-sm font-medium tracking-wider uppercase mb-1">{label}</p>
                <p className="text-brand-subtle text-xs">{description}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>

      <GoldDivider />
    </section>
  )
}
