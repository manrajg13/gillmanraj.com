/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js, ts, jsx, tsx}",
    "./components/**/*.{js, ts, jsx, tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      'light-gray': '#71717a',
      'dark-gray': '#13121c',
      'white': '#ffffff',
      'lavender': '#8274fc'
    },
    fontWeight: {
      semibold: 550,
      bold: 600,
    },
  },
  plugins: [],
}
