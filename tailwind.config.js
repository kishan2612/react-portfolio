/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/assets/"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-uiux': 'linear-gradient(135deg, #FF998C, #FF6A5E, #E0563D)',
        'gradient-mobile': 'linear-gradient(135deg, #90cdf8, #6094D8, #3C6CB1)',
        'gradient-web': 'linear-gradient(135deg, #93E9BE, #5AC888, #36A678)',
        'gradient-design': 'linear-gradient(135deg, #90E0F8, #60B0D8, #3C90B1)',
        'gradient-branding': 'linear-gradient(135deg, #A0F3A1, #60C878, #329856)',
        'gradient-tech': 'linear-gradient(135deg, #FFAA80, #FF7A50, #E05A30)',
      },
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

