/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1440px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      cmd: { max: "800px" },
      mcmd: { min: "800px" },
      md: { max: "700px" },

      csm: { max: "425px" },
      sm: { max: "320px" },
    },
  },
  plugins: [],
};
