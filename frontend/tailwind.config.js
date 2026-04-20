/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        cream: {
          50: '#FDFAF5',
          100: '#F9F3E8',
          200: '#F2E8D5',
        },
        rose: {
          accent: '#E8826A',
          soft: '#F5C4B8',
          light: '#FDE8E3',
        },
        ink: {
          DEFAULT: '#1A1614',
          soft: '#3D3530',
          muted: '#7A6E6A',
        },
        sage: {
          DEFAULT: '#7A9E7E',
          light: '#C5DBC7',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#F0D98A',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
        'slide-in': 'slideIn 0.6s ease forwards',
        'shimmer': 'shimmer 2.5s infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}