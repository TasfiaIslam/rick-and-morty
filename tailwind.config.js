const withAnimations = require('animated-tailwindcss');

module.exports =withAnimations( {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive']
      },
      animation: {
        'spin-slow': 'spin 1s linear 1s',
        'roll': 'roll 3s ease-in-out 5s'
      },
      colors: {
        'primary': '#262c3a',
        'primary-light': '#515661',
        'secondary': '#4aa28f',
        'secondary-light': '#80BDB0',
        'complimentary': '#eced6b',
      },
      keyframes: {
        roll: {
          '0%, 100%': { transform: 'translateX(-20rem) rotate(-385deg)' },
          '50%': { transform: 'translateX(20rem) rotate(385deg)' },
        }
       }
    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'motion-safe', 'motion-reduce','hover', 'focus']
    },
  },
  plugins: [],
})
