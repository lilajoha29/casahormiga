/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'gray': 'rgba(217, 217, 217, 0.31)',
        'logo': '#FE000D',
        'white': '#FFFFFF',
        'black': '#000000',
      },
      fontFamily: {
        Papyrus: ['"Papyrus","Handlee"']
      },
    },
  },
  plugins: [],
}
