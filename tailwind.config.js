/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Fira Sans"', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        nord: {
          'polar-1': '#2E3440',
          'polar-2': '#3B4252',
          'polar-3': '#434C5E',
          'polar-4': '#4C566A',
          'snow-1': '#D8DEE9',
          'snow-2': '#E5E9F0',
          'snow-3': '#ECEFF4',
          'frost-1': '#8FBCBB',
          'frost-2': '#88C0D0',
          'frost-3': '#81A1C1',
          'frost-4': '#5E81AC',
          'aurora-1': '#BF616A',
          'aurora-2': '#D08770',
          'aurora-3': '#EBCB8B',
          'aurora-4': '#A3BE8C',
          'aurora-5': '#B48EAD',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};