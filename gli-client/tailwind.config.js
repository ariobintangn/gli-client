/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.vue",
    "./src/views/Home.vue",
    "./src/components/Header.vue",
    "./src/components/TableRow.vue",
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

