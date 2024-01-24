const { default: daisyui } = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
    },
    colors: {
      purple1: '#4613CD',
      pink1: '#CE759A',
      cblack: '#080808',
      cwhite: '#e2e2e2',
    },
  },
  plugins: [require("daisyui")],
}
