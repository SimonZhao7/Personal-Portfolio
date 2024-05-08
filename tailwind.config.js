/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: [    
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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
