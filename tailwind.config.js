/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,ts,jsx,tsx}", // Ajout des fichiers TypeScript et TSX
    "./components/**/*.{html,js,ts,jsx,tsx}" // Ajoute aussi les composants
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};