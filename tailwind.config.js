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
        cherry: {
          50: "#f6f7fc",
          100: "#eff1f8",
          200: "#e1e4f3",
          300: "#c8ccea",
          400: "#b2b5e0",
          500: "#8586cd",
          600: "#6f6abd",
          700: "#5d57aa",
          800: "#4e498e",
          900: "#413d75",
          950: "#29274e",
        },
        lily: {
          50: "#f9f6f9",
          100: "#f4eff4",
          200: "#e8e1e9",
          300: "#d9c8d9",
          400: "#c5adc5",
          500: "#aa8aa9",
          600: "#936f90",
          700: "#7c5a78",
          800: "#674d63",
          900: "#584355",
          950: "#332431",
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
