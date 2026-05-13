import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Stats from '../components/home/Stats'
import GenderNav from '../components/home/GenderNav'
import Testimonials from '../components/home/Testimonials'
import ContactSection from '../components/home/ContactSection'
import PhilosophyMarquee from '../components/home/PhilosophyMarquee'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Stats />
      <PhilosophyMarquee />
      <GenderNav />
      <Testimonials />
      <ContactSection />
    </main>
  )
}
