import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Stats from '../components/home/Stats'
import GenderNav from '../components/home/GenderNav'
import Testimonials from '../components/home/Testimonials'
import ContactSection from '../components/home/ContactSection'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Stats />
      <GenderNav />
      <Testimonials />
      <ContactSection />
    </main>
  )
}
