/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#faf7f2',
          100: '#f4ede3',
          200: '#e8d9c5',
          300: '#d6bf9f',
          400: '#bf9f72',
          500: '#a37f4f',
          600: '#86653a',
          700: '#6b4f2e',
          800: '#523a24',
          900: '#3a2818',
          950: '#251810',
        },
        bark: {
          50: '#faf7f2',
          100: '#f4ede3',
          200: '#e8d9c5',
          300: '#d6bf9f',
          400: '#bf9f72',
          500: '#a37f4f',
          600: '#86653a',
          700: '#6b4f2e',
          800: '#523a24',
          900: '#3a2818',
          950: '#251810',
        },
        sage: {
          50: '#faf7f2',
          100: '#f4ede3',
          200: '#e8d9c5',
          300: '#d6bf9f',
          400: '#bf9f72',
          500: '#a37f4f',
          600: '#86653a',
          700: '#6b4f2e',
          800: '#523a24',
          900: '#3a2818',
          950: '#251810',
        },
        cream: '#f4ede3',
        ivory: '#fbf6ea',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.7s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
