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
          50: "#fcf6f0",
          100: "#f8eadc",
          200: "#efd1b9",
          300: "#e5b18c",
          400: "#d98a5e",
          500: "#d16d3e",
          600: "#c95b35",
          700: "#a2442c",
          800: "#82382a",
          900: "#693025",
          950: "#381712",
        },
        metal: {
          50: "#f5f7fa",
          100: "#eaeef4",
          200: "#d1dbe6",
          300: "#a8bbd1",
          400: "#7997b7",
          500: "#587a9f",
          600: "#446185",
          700: "#384e6c",
          800: "#34475f",
          900: "#2d3a4d",
          950: "#1e2733",
        },
      },
    },
  },
  plugins: [],
};
