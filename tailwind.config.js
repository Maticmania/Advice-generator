/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        general: '#1f2632',
        primary: '#323a49',
        glow: '#52ffa8',
      },
      colors:{
        primary: '#cee3e9',
        glow: '#52ffa8'
      }, 
      boxShadow:{
        glow: '0px 0px 5px 5px 1px #52ffa941',
      }
    },
  },
  plugins: [],
}
