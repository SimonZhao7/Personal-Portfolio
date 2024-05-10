/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

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
        'underline': '#E08E45',
        'light-gray': '#F6F4F9',
        'jet': '#525252',
        'dark-blue': '#4559C4',
        'light-blue': '#DBE2F2',
        'dark-purple': '#57229C',
      },
      fontFamily: {
        source: ["var(--font-source-pro)"],
        cabin: ["var(--font-cabin)"],
      }
    },
  },
  plugins: [],
}
