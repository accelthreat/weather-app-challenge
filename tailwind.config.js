/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-serif"]
    },
    colors: {
      white: "#E7E7EB",
      blue: {
        "400": "#585676",
        "500": "#1E213A",
        "600": "#100E1D",
        "700": "#110E3C"
      },
      indigo: {
        "500": "#3C47E9"
      },
      gray: {
        "500": "#A09FB1",
        "600": "#88869D",
        "700": "#6E707A",
        "800": "#616475"
      },
      yellow: {
        "500": "#FFEC65"
      }
    },
    extend: {
      opacity: {
        "5": ".05"
      },
      inset: {
        "1/5": "20%"
      },
      fontSize: {
        "9xl": "9rem"
      },
      maxWidth: {
        xxs: "12rem"
      },
      screens: {
        "900p": "1440px"
      }
    }
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "active"],
    border: ["responsive", "hover", "focus", "active"],
    borderColor: ["responsive", "hover", "focus", "active"],
    borderWidth: ["responsive", "hover", "focus", "active"]
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  }
};
