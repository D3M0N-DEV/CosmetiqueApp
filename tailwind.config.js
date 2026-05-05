/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0A0A0A',
          dark: '#141414',
          card: '#1A1A1A',
          charcoal: '#2A2A2A',
          border: '#333333',
          gold: '#C9A96E',
          'gold-light': '#D4B97A',
          'gold-dark': '#A8833A',
          cream: '#F5F0E8',
          white: '#FAFAFA',
          muted: '#8A8A8A',
          subtle: '#555555',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A96E 0%, #D4B97A 50%, #A8833A 100%)',
        'hero-gradient': 'linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.75) 60%, rgba(10,10,10,0.95) 100%)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounce_slow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        bounce_slow: 'bounce_slow 2s ease-in-out infinite',
      },
      boxShadow: {
        gold: '0 0 30px rgba(201,169,110,0.15)',
        'gold-lg': '0 0 60px rgba(201,169,110,0.2)',
        card: '0 4px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
