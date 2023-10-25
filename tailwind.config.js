module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      '2xs': "460px",
      xs: "640px",
      sm: "768px",
      md: "992px",
      lg: "1280px",
      xl: "1440px",
      "2xl": "1600px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D09A4B",
        },
        dark: {
          DEFAULT: "#0F0F0F",
          gray: "#1A1A1A",
          'gray-lighter': "#282828",
        },
        
      },
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      xl: "1.125rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "2.5rem",
      "5xl": "3.125rem",
      "6xl": "3.25rem",
      "7xl": "5rem",
      "8xl": "6.25rem",
      "9xl": "7.3rem",

    },
    fontFamily: {
      matter: ["Matter", "serif"],
    },
  },
};
