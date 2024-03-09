/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary': '#03378C',
        'accent': '#6AFF9C',
        'light': '#B0DAF1',
        'dark': '#011638',
        'flat': '#404B64',
      }
    },
  },
  plugins: [],
}

