/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#262626',
        highlight: '#5372E7',
      },
      fontFamily: {
        base: ['fira-sans', 'sans-serif'],
        title: ['cormorant-garamond', 'serif'],
      }
    },
  },
  plugins: [],
};
