import { green } from "@mui/material/colors"

interface TokensDark {
  grey: { [key: number]: string }
  primary: { [key: number]: string }
  secondary: { [key: number]: string }
}

interface TokensLight {
  grey?: { [key: number]: string }
  primary?: { [key: number]: string }
  secondary?: { [key: number]: string }
}

export const tokensDark: TokensDark = {
  grey: {
    0: "#ffffff", // manually adjusted
    10: "#f6f6f6", // manually adjusted
    50: "#f0f0f0", // manually adjusted
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000", // manually adjusted
  },
  primary: {
    0: "##07f9a2",
    10: "#00d68e",
    50: "##09c184",
    100: "#00ad7c",
    200: "##0a8967",
    300: "#1c8c7f",
    400: "#109384",
    500: "#0b8476",
    600: "#07776a ",
    700: "#07776a",
    800: "#076056",
    900: "#116057",
    1000: "#0c5149",
  },
  secondary: {
    0: "#f0f3f7", // ajustado manualmente
    100: "#d1d7e1", // ajustado manualmente
    200: "#b2b9cd",
    300: "#939bad",
    400: "#747b99",
    500: "#555c85",
    600: "#363c71",
    700: "#262853",
    800: "#161c35",
    900: "#060819",
    1000: "#000000",
  },
}

// function that reverses the color palette
function reverseTokens(tokensDark: TokensDark) {
  const reversedTokens: TokensLight = {}
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val) as ArrayLike<string>
    const values = Object.values(val) as ArrayLike<string>
    const length = keys.length
    const reversedObj: { [key: string]: string } = {}
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1]
    }
    reversedTokens[key] = reversedObj
  })
  return reversedTokens
}
export const tokensLight: TokensDark = reverseTokens(tokensDark)

export const themeSettings = (mode: string) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[400],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.primary[600],
              alt: tokensDark.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.grey[50],
              light: tokensDark.grey[100],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.grey[0],
              alt: tokensDark.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  }
}
