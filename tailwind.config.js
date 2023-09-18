/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        "secondary": "#5C3671",
      },
      colors:{
        'ring-color': "#5C3671",
      },
      fontFamily: {
        'Manrope': ['Manrope', 'sans-serif']
      },
    },
  },
  plugins: [],
}

