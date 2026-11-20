/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazirmatn', 'Tahoma', 'sans-serif'],
      },
      colors: {
        night: {
          950: '#070b14',
          900: '#0b1120',
          800: '#111a2e',
          700: '#1a2745',
          600: '#243560',
        },
        electric: {
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        violet: {
          glow: '#8b5cf6',
          glow2: '#a78bfa',
        },
      },
      animation: {
        'float-slow': 'floaty 7s ease-in-out infinite',
        'float-slower': 'floaty 10s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
};
