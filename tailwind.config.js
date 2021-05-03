const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#162D40',
          DEFAULT: '#1DA1F2',
          dark: '#15202B',
        },
        gray: {
          light: '#E1E8ED',
          DEFAULT: '#AAB8C2',
          dark: '#657786',
          darkest: '#14171A',
        },
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
