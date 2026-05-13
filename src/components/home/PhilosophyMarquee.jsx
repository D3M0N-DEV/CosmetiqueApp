import Marquee from '../ui/Marquee'

export default function PhilosophyMarquee() {
  return (
    <section className="bg-brand-gold py-10 md:py-14 overflow-hidden border-y border-brand-gold-dark">
      <Marquee
        items={[
          'Confidentialité',
          'Bienveillance',
          'Excellence',
          'Discrétion',
          'Expertise',
          'Innovation',
        ]}
        separator="✦"
        duration={45}
        light
      />
    </section>
  )
}
