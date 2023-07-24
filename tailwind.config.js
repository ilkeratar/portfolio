/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Montserrrat':['Montserrat','sans-serif'],
        'Raleway':['Raleway','sans-serif'],
      },
      colors: {
        'iconBox': '#C4C4C4',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}

