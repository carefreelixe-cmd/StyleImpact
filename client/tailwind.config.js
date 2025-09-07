/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#ffb61c', // gold
        white: '#FFFFFF',   // white (optional, already default)
        black: '#000000',   // black (optional, already default)
        hoverPrimary: '#ffd700' // hover gold
      },
    },
  },
  plugins: [],
}