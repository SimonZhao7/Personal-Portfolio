/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '500px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'tea-green': '#D5E2BC',
        'underline': '#E08E45'
      }
    },
  },
  plugins: [],
}
