/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {colors: {
      skcolor: {
        DEFAULT: '#7b99b9',
        dark: '#517dad'
      }
    },},
  },
  plugins: [],
}

