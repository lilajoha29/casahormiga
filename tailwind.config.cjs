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
        'button': 'rgba(254, 0, 13, 0.23)',
      },
      fontFamily: {
        Papyrus: ['"Papyrus","Lora"']
      },
      backgroundImage: {
        'banner': "url('/src/assets/logos/Banner.png')",
      },
    },
    variants: {
      borderWidth: ['responsive', 'hover', 'focus'],
    },
    plugins: [],
  }
}
