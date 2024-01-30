const { default: daisyui } = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'portfolio-texture': "url('/src/assets/img/pokemon-cli.jpg')",
      }
    },
    colors: {
      purple1: '#4613CD',
      pink1: '#CE759A',
      cblack: '#080808',
      cwhite: '#e2e2e2',
      cwhite2: '#d9d9d9',
      cblack2: '#0E0E0E',
    },
  },
  plugins: [require("daisyui")],
}
