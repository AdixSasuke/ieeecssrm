/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'grid':"url('public/Frame.png')"
      },
      fontFamily: {
        agrandir: ['AgrandirRegular', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}