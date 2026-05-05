import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Le Docteur', href: '/#docteur' },
  { label: 'Femme', href: '/femme' },
  { label: 'Homme', href: '/homme' },
  { label: 'Témoignages', href: '/#temoignages' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href.split('#')[0]) && href.split('#')[0] !== '/'
  }

  const handleAnchorClick = (e, href) => {
    if (href.startsWith('/#')) {
      if (location.pathname === '/') {
        e.preventDefault()
        const id = href.replace('/#', '')
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-brand-black/95 backdrop-blur-md shadow-[0_1px_0_rgba(201,169,110,0.15)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col leading-none group">
              <span className="font-serif text-xl text-brand-gold tracking-widest uppercase">
                Dr. Abécassis
              </span>
              <span className="text-[10px] tracking-[0.3em] text-brand-muted uppercase mt-0.5 group-hover:text-brand-gold/70 transition-colors">
                Chirurgie Intime
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={`relative text-sm tracking-widest uppercase transition-colors duration-300 pb-1 ${
                    isActive(link.href)
                      ? 'text-brand-gold'
                      : 'text-brand-muted hover:text-brand-white'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-px bg-brand-gold"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+33149230081"
                className="flex items-center gap-2 text-brand-gold border border-brand-gold/40 hover:border-brand-gold hover:bg-brand-gold/10 px-4 py-2 rounded text-sm tracking-wider transition-all duration-300"
              >
                <Phone size={14} />
                Paris
              </a>
              <Link
                to="/#contact"
                onClick={(e) => handleAnchorClick(e, '/#contact')}
                className="bg-gold-gradient text-brand-black font-semibold px-5 py-2 rounded text-sm tracking-wider hover:opacity-90 transition-opacity"
              >
                Consultation
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              className="lg:hidden text-brand-white p-2"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-brand-black flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-20 border-b border-brand-charcoal">
              <Link to="/" className="font-serif text-xl text-brand-gold tracking-widest uppercase">
                Dr. Abécassis
              </Link>
              <button onClick={() => setMenuOpen(false)} className="text-brand-white p-2">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-2 px-6 py-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    to={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className={`block py-4 text-2xl font-serif border-b border-brand-charcoal transition-colors ${
                      isActive(link.href) ? 'text-brand-gold' : 'text-brand-white hover:text-brand-gold'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="px-6 pb-10 mt-auto flex flex-col gap-3">
              <a
                href="tel:+33149230081"
                className="flex items-center justify-center gap-2 text-brand-gold border border-brand-gold/40 py-3 rounded text-sm tracking-wider"
              >
                <Phone size={14} /> Paris : +33 (0)1 49 23 00 81
              </a>
              <Link
                to="/#contact"
                className="bg-gold-gradient text-brand-black font-semibold py-3 rounded text-sm tracking-wider text-center"
              >
                Prendre Rendez-vous
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
