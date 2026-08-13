/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#D90429',
          darkred: '#EF233C',
          light: '#EDF2F4',
          gray: '#8D99AE',
          dark: '#2B2D42',
        },
      },
      boxShadow: {
        'red-glow': '0 10px 25px -5px rgba(217, 4, 41, 0.4), 0 8px 10px -6px rgba(217, 4, 41, 0.2)',
        'card-soft': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
