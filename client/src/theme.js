// color design tokens export
export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#FFF0F5",
    50: "#FEE0E9",
    100: "#F8C6D4",
    200: "#F1A1BA",
    300: "#E67FA0",
    400: "#D96287",
    500: "#C9456D",
    600: "#B03057",
    700: "#802140",
    800: "#50142A",
    900: "#210815",
    1000: "#000000",
  },
  primary: {
    50: "#FFE5EC",
    100: "#FFB3C9",
    200: "#FF809B",
    300: "#FF4D6D",
    400: "#FF1A3F",
    500: "#E60029",
    600: "#B80021",
    700: "#8A0019",
    800: "#5C0011",
    900: "#2E0008",
  },
  text: {
    dark: "#001F3F",  // Navy blue
    light: "#FFFFFF",
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[800],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[200],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[700],
            },
            background: {
              default: "#000000",
              alt: colorTokens.grey[900],
            },
            text: {
              primary: colorTokens.text.light,
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.primary[50],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[50],
            },
            background: {
              default: colorTokens.grey[10],
              alt: colorTokens.grey[0],
            },
            text: {
              primary: colorTokens.text.dark,
            },
          }),
    },
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: 12,
      fontWeightBold: 700,
      h1: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 40,
        fontWeight: 700,
      },
      h2: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 32,
        fontWeight: 700,
      },
      h3: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 24,
        fontWeight: 700,
      },
      h4: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 700,
      },
      h5: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 16,
        fontWeight: 700,
      },
      h6: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 700,
      },
    },
  };
};
