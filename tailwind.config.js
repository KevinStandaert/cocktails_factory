/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lily: {
          50: "#f9f6f9",
          100: "#f5eef5",
          200: "#eddded",
          300: "#dfc2df",
          400: "#ca9cc8",
          500: "#b77db4",
          600: "#a16199",
          700: "#884e80",
          800: "#714369",
          900: "#603b5a",
          950: "#371e33",
        },
        serria: {
          50: "#fdf7ef",
          100: "#faebda",
          200: "#f4d4b4",
          300: "#edb784",
          400: "#e79b64",
          500: "#de7331",
          600: "#d05b26",
          700: "#ac4622",
          800: "#8a3922",
          900: "#6f311f",
          950: "#3c170e",
        },
      },
    },
  },
  plugins: [],
};
