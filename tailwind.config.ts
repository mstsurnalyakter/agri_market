
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        agriMarket: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#28a745",
          secondary: "#004085",
          ".btn-primary":{
            "color":"#fff"
          },
          ".btn-outline.btn-primary:hover":{
            "color":"#fff"
          }
        },
      },
      "dark",
      "cupcake",
    ],
  },
});
