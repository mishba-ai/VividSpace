/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      caveat: ['Caveat', 'cursive'],
      gluten: ['Gluten', 'cursive'],
      averia: ['Averia Sans Libre', 'cursive']
    },
    colors: {
      pumpkinyellow: '#FCA311',
      vividblue: '#14213D',
      vividgray: '#E5E5E5',
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      gray: '#828282',
      rockelspurple: '#33006F',
      violetpurple: '#4C2882',
      liberty: '#534cb9',
      orange: '#f18585',
      darkyellow: '#fb8500',

      extend: {
        boxShadow: {
          custom: ' 0px 4px 4px rgba(0, 0, 0, 0.25)'
        },
        

      },

    },
    plugins: []
  }
}
