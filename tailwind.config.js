module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'titillium-web': ['Titillium Web', 'sans-serif']
      },
      transitionProperty: {
        'height': 'height'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ]
}
