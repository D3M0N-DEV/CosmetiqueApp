import FadeInOnScroll from './FadeInOnScroll'

export default function SectionHeading({ eyebrow, title, subtitle, light = false, center = true }) {
  return (
    <div className={`${center ? 'text-center' : ''} mb-14`}>
      {eyebrow && (
        <FadeInOnScroll delay={0}>
          <p className="text-brand-gold text-xs tracking-[0.35em] uppercase mb-4">{eyebrow}</p>
        </FadeInOnScroll>
      )}
      <FadeInOnScroll delay={0.1}>
        <h2
          className={`font-serif text-4xl md:text-5xl leading-tight ${
            light ? 'text-brand-black' : 'text-brand-white'
          }`}
        >
          {title}
        </h2>
      </FadeInOnScroll>
      {subtitle && (
        <FadeInOnScroll delay={0.2}>
          <p
            className={`mt-5 text-base md:text-lg leading-relaxed max-w-2xl ${
              center ? 'mx-auto' : ''
            } ${light ? 'text-brand-charcoal' : 'text-brand-muted'}`}
          >
            {subtitle}
          </p>
        </FadeInOnScroll>
      )}
      <FadeInOnScroll delay={0.25}>
        <div className={`mt-6 flex ${center ? 'justify-center' : ''}`}>
          <div className="h-px w-16 bg-gold-gradient rounded" />
        </div>
      </FadeInOnScroll>
    </div>
  )
}
