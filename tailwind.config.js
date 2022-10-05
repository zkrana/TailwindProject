module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
    },
    container: {
      center: true,
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [
    // function ({ addComponents }) {
    //   addComponents({
    //     '.container': {
    //       maxWidth: '100%',
    //       '@screen sm': {
    //         maxWidth: '640px',
    //       },
    //       '@screen md': {
    //         maxWidth: '768px',
    //       },
    //       '@screen lg': {
    //         maxWidth: '1024px',
    //       },
    //       '@screen xl': {
    //         maxWidth: '1240px',
    //       },
    //     }
    //   })
    // }
  ],
}
