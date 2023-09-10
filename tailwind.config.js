/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      customfont: ['Averia Sans Libre', 'sans-serif']
    },
    colors: {
      pumpkinyellow: '#FCA311',
      vividblue: '#14213D',
      vividgray: '#E5E5E5',
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
    },
    extend: {
      boxShadow: {
        custom: ' 0px 4px 4px rgba(0, 0, 0, 0.25)'
      }
    },

  },
  plugins: []
}

