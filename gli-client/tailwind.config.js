/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.vue",
    "./src/views/Home.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        adamina: "'Adamina', serif",
        quattro: "'Quattrocento Sans', sans-serif"       
      }
    },
  },
  plugins: [],
}

