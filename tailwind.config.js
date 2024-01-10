const { default: daisyui } = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      purple1: '#2b1758',
      purple2: '#251d6d',
      purple3: '#6832a8',
      cblack: '#080808',
      cwhite: '#e2e2e2',
    },
  },
  plugins: [require("daisyui")],
}
