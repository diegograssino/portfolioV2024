// Example preset
module.exports = {
  theme: {
    screens: {
      xs: "280px", // 280x653
      sm: "480px", // 480x800
      md: "768px", // 768x1024
      lg: "1024px", // 1024x768
      "2lg": "1280px", // 1024x768
      xl: "1440px", // 1440x900
    },
    // Color palette based on: https://www.colorhunt.co/palette/2525256930c364dfdf80ffdb
    colors: {
      primary: {
        lighter: "#474747",
        DEFAULT: "#252525",
        darker: "#0A0A0A",
      },
      secondary: {
        lighter: "#8B5CD6",
        DEFAULT: "#6930C3",
        darker: "#4F2593",
      },
      tertiary: {
        lighter: "#99EAEA",
        DEFAULT: "#64DFDF",
        darker: "#34D5D5",
      },
      success: {
        lighter: "#BDF291",
        DEFAULT: "#9CEC5B",
        darker: "#7BE524",
      },
      alert: {
        lighter: "#FBF8C5",
        DEFAULT: "#F7EF81",
        darker: "#F4E952",
      },
      danger: {
        lighter: "#E17A81",
        DEFAULT: "#D33F49",
        darker: "#B72A33",
      },
      black: {
        DEFAULT: "#000",
      },
      white: {
        DEFAULT: "#FFF",
      },
    },
    fontFamily: {
      primary: ["var(--font-primary)"],
      secondary: ["var(--font-secondary)"],
      code: ["var(--font-code)"],
    },
  },
};
