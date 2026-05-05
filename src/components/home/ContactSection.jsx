import { MapPin, Phone, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { locations } from '../../data/locations'
import FadeInOnScroll from '../ui/FadeInOnScroll'
import SectionHeading from '../ui/SectionHeading'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-36 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nous Contacter"
          title="Trois cabinets à votre service"
          subtitle="Consultations disponibles à Paris, Genève et Londres. Prenez rendez-vous dans le cabinet de votre choix."
        />

        {/* Location cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {locations.map((loc, i) => (
            <FadeInOnScroll key={loc.id} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative group rounded-2xl bg-brand-card border border-brand-charcoal hover:border-brand-gold/40 p-8 transition-all duration-500 overflow-hidden"
              >
                {/* Gold top border on hover */}
                <div className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full bg-gold-gradient transition-all duration-700 ease-out rounded-t-2xl" />

                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{loc.flag}</span>
                  <div>
                    <h3 className="font-serif text-2xl text-brand-white">{loc.city}</h3>
                    <p className="text-brand-gold text-xs tracking-widest uppercase">{loc.clinic}</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 mb-4">
                  <MapPin size={15} className="text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-brand-muted text-sm">{loc.address}</p>
                    <p className="text-brand-muted text-sm">{loc.zip}</p>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-3 mb-6">
                  <Phone size={15} className="text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <a
                      href={`tel:${loc.phone.replace(/[\s()]/g, '')}`}
                      className="text-brand-muted hover:text-brand-gold text-sm transition-colors block"
                    >
                      {loc.phone}
                    </a>
                    {loc.phoneMobile && (
                      <a
                        href={`tel:${loc.phoneMobile.replace(/[\s()]/g, '')}`}
                        className="text-brand-subtle hover:text-brand-gold text-xs transition-colors block mt-0.5"
                      >
                        {loc.phoneMobile}
                      </a>
                    )}
                  </div>
                </div>

                {/* Map link */}
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-gold/60 hover:text-brand-gold text-xs tracking-wider uppercase transition-colors"
                >
                  Voir sur la carte <ExternalLink size={11} />
                </a>
              </motion.div>
            </FadeInOnScroll>
          ))}
        </div>

        {/* Contact form */}
        <FadeInOnScroll delay={0.2} className="mt-16">
          <div className="max-w-2xl mx-auto rounded-2xl bg-brand-card border border-brand-charcoal p-8 md:p-12">
            <h3 className="font-serif text-3xl text-brand-white text-center mb-2">
              Demande de Consultation
            </h3>
            <p className="text-brand-muted text-sm text-center mb-8">
              Remplissez ce formulaire et nous vous recontacterons dans les 24 heures.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-brand-muted text-xs tracking-widest uppercase mb-2">
                    Prénom & Nom
                  </label>
                  <input
                    type="text"
                    placeholder="Jean Dupont"
                    className="w-full bg-brand-charcoal border border-brand-border text-brand-white placeholder-brand-subtle rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-brand-muted text-xs tracking-widest uppercase mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    placeholder="+33 6 00 00 00 00"
                    className="w-full bg-brand-charcoal border border-brand-border text-brand-white placeholder-brand-subtle rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-brand-muted text-xs tracking-widest uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="jean@exemple.com"
                  className="w-full bg-brand-charcoal border border-brand-border text-brand-white placeholder-brand-subtle rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold/60 transition-colors"
                />
              </div>

              <div>
                <label className="block text-brand-muted text-xs tracking-widest uppercase mb-2">
                  Cabinet souhaité
                </label>
                <select className="w-full bg-brand-charcoal border border-brand-border text-brand-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold/60 transition-colors appearance-none cursor-pointer">
                  <option value="">Sélectionnez un cabinet…</option>
                  <option>Paris</option>
                  <option>Genève</option>
                  <option>Londres</option>
                </select>
              </div>

              <div>
                <label className="block text-brand-muted text-xs tracking-widest uppercase mb-2">
                  Intervention souhaitée
                </label>
                <select className="w-full bg-brand-charcoal border border-brand-border text-brand-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold/60 transition-colors appearance-none cursor-pointer">
                  <option value="">Sélectionnez une intervention…</option>
                  <optgroup label="Femme">
                    <option>Hyménoplastie</option>
                    <option>Nymphoplastie</option>
                    <option>Vaginoplastie</option>
                    <option>Sensibilité du Clitoris</option>
                    <option>Lifting du Pubis</option>
                  </optgroup>
                  <optgroup label="Homme">
                    <option>Allongement du Pénis</option>
                    <option>Grossissement du Pénis</option>
                    <option>Circoncision</option>
                    <option>Implants Testiculaires</option>
                    <option>Lifting Scrotal</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block text-brand-muted text-xs tracking-widest uppercase mb-2">
                  Message (optionnel)
                </label>
                <textarea
                  rows={4}
                  placeholder="Décrivez votre demande en quelques mots…"
                  className="w-full bg-brand-charcoal border border-brand-border text-brand-white placeholder-brand-subtle rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold/60 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold-gradient text-brand-black font-semibold py-4 rounded-lg text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
              >
                Envoyer ma Demande
              </button>

              <p className="text-brand-subtle text-xs text-center">
                Confidentialité garantie · Réponse sous 24h
              </p>
            </form>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
