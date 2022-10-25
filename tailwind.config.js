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
        modal: '#21BDCA',
        yellow: '#F2C94C',
      },
      fontFamily: {
        base: ['fira-sans', 'sans-serif'],
        title: ['cormorant-garamond', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        root: '0px 8px 24px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
