import { Link } from 'react-router-dom'
import { Phone, MapPin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-charcoal">
      {/* Gold top accent */}
      <div className="h-px bg-gold-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex flex-col leading-none">
              <span className="font-serif text-2xl text-brand-gold tracking-widest uppercase">
                Dr. Abécassis
              </span>
              <span className="text-[10px] tracking-[0.3em] text-brand-muted uppercase mt-1">
                Chirurgie Intime
              </span>
            </Link>
            <p className="mt-5 text-brand-muted text-sm leading-relaxed">
              Pionnier de la chirurgie intime depuis 1992. Plus de 3 000 patients accompagnés avec
              expertise, discrétion et bienveillance.
            </p>
            <div className="mt-6 flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-brand-gold text-sm">★</span>
              ))}
              <span className="ml-2 text-brand-muted text-xs">36 avis</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-brand-white text-xs tracking-[0.2em] uppercase mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Accueil', href: '/' },
                { label: 'Le Docteur', href: '/#docteur' },
                { label: 'Chirurgie Femme', href: '/femme' },
                { label: 'Chirurgie Homme', href: '/homme' },
                { label: 'Témoignages', href: '/#temoignages' },
                { label: 'Contact', href: '/#contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-brand-muted hover:text-brand-gold text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-brand-white text-xs tracking-[0.2em] uppercase mb-6">Cabinets</h4>
            <ul className="space-y-4">
              {[
                { city: 'Paris', phone: '+33 (0)1 49 23 00 81' },
                { city: 'Genève', phone: '+41 22 90 01 800' },
                { city: 'Londres', phone: '+44 207 636 4272' },
              ].map((loc) => (
                <li key={loc.city} className="flex items-start gap-3">
                  <MapPin size={14} className="text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-brand-white text-sm">{loc.city}</p>
                    <a
                      href={`tel:${loc.phone.replace(/\s/g, '')}`}
                      className="text-brand-muted hover:text-brand-gold text-xs transition-colors flex items-center gap-1 mt-0.5"
                    >
                      <Phone size={10} />
                      {loc.phone}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote */}
          <div>
            <h4 className="text-brand-white text-xs tracking-[0.2em] uppercase mb-6">Notre Philosophie</h4>
            <blockquote className="border-l-2 border-brand-gold pl-4">
              <p className="font-serif text-brand-cream/80 text-lg leading-relaxed italic">
                « Un centimètre dans le pénis… c'est un kilomètre dans la tête. »
              </p>
              <cite className="block mt-3 text-brand-muted text-xs not-italic tracking-widest uppercase">
                — Dr. Marc Abécassis
              </cite>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-brand-subtle text-xs">
            © {new Date().getFullYear()} Dr. Marc Abécassis — Tous droits réservés
          </p>
          <p className="text-brand-subtle text-xs">
            Chirurgie plastique, reconstructrice et esthétique — Paris · Genève · Londres
          </p>
        </div>
      </div>
    </footer>
  )
}
