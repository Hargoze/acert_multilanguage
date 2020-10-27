import { theme as chakraTheme } from "@chakra-ui/core"
 
const theme = {
    ...chakraTheme,
    fonts: {
      body: "fira sans",
      heading: "fira sans",
      mono: "fira sans",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    colors: {
      ...chakraTheme.colors,
      coolcolor: "#ffe000",

      white: "#fffaff",
      black: "#050401",
      acert_blue: "#30bced",
      acert_gray: "#303036",
      acert_red: "#fc5130",
      acert_darkblue1: "#008bca",
      acert_darkblue2: "#005e99",
      primary: {
        50: "#fae9e8",
        100: "#fdcbbe",
        200: "#fca995",
        300: "#fc876c",
        400: "#fc6c4c",
        500: "#fc5230",
        600: "#f14c2c",
        700: "#e34627",
        800: "#d53f23",
        900: "#bb331b"
      },
      secondary: {
        50: "#def4fc",
        100: "#ace1f7",
        200: "#74cef2",
        300: "#30bbed",
        400: "#00adeb",
        500: "#009ee8",
        600: "#0091da",
        700: "#007ec7",
        800: "#006eb3",
        900: "#004e92"
      }
    }
    
  }

export default theme;