/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "!./node_modules",
  ],
  theme: {
    colors: {
      primary: "#FFFFFF",
      secondary: "#191645",
      accent: "#43C6AC",
      gray: "#999",
      black: "black",
      red: "#d22e2e",
    },
    extend: {
      fontSize: {
        body: "1rem",
        bodyTablet: "1.25rem",
      },
    },
  },
  plugins: [],
};

// ##fafafa - primary
// #ffffff - secondary
// #05b169 - accent
