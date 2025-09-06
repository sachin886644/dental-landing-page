/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        primary: '#2E8B57',
        secondary: '#20B2AA',
        accent: '#4169E1',
        textdark: '#2C3E50',
        textlight: '#7F8C8D',
      },
      boxShadow: {
        soft: '0 2px 10px rgba(0,0,0,0.08)',
        card: '0 8px 28px -4px rgba(0,0,0,0.15)',
        glow: '0 0 0 3px rgb(46 139 87 / 30%)'
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #2E8B57, #20B2AA)',
        'gradient-accent': 'linear-gradient(135deg,#4169E1,#20B2AA)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(15deg)' }
        },
        pulseSlow: {
          '0%,100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        pulseSlow: 'pulseSlow 3s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.8s ease-out both',
        shimmer: 'shimmer 3s linear infinite'
      }
    },
  },
  plugins: [],
}
