/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/assets/"
  ],
  theme: {
    extend: {
      fontFamily: {
        alfaSlab: ['Alfa Slab One','serif'], 
        spaceGrotesk:["Space Grotesk","serif"] // Google Font Example
      },
      fontSize:{
        '10xl': '12rem',   // Custom size 10xl
        '11xl': '14rem',   // Custom size 11xl
        '12xl': '16rem',   // Custom size 12xl
      },
      borderWidth: {
        '12':'1rem'
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes:{
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}

