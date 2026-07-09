/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'page-bg': '#F4F7F8',
        'card-bg': '#FFFFFF',
        'border-color': '#D5DEE3',
        'text-primary': '#06141B',
        'text-secondary': '#4A5C6A',
        'text-muted': '#253745',
        'cta-primary': '#11212D',
      }
    },
  },
  darkMode: 'class', // This will be overridden by forced colors
  plugins: [],
}