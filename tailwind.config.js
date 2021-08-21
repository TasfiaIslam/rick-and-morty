module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive']
      },
      animation: {
        'spin-slow': 'spin 1s linear 2s',
      },
      colors: {
        'primary': '#262c3a',
        'primary-light': '#515661',
        'secondary': '#4aa28f',
      }

    },
    // backgroundColor: theme => ({
    //   ...theme('colors'),
    //   'primary': '##262c3a',
    //   'secondary': '#ffed4a',
    //   'danger': '#e3342f',
    //  })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
