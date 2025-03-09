/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'K2D': ['K2D', 'Sans-Serif'],
      'WorkSans': ["Work Sans", "serif"],
      'Montserrat': ["Montserrat", "serif"],
      'Poppins': ["Poppins", "serif"]
    },
    extend: {},
  },
  plugins: [],
}

