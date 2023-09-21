/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        "secondary": "#5B726C",
      },
      colors:{
        'ring-color': "#5B726C",
      },
      fontFamily: {
        'Manrope': ['Manrope', 'sans-serif']
      },
    },
  },
  plugins: [],
}

