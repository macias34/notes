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
      secondary: "#133194",
      third: "#0f0c3a",
      accent: "#43C6AC",
      yellow: "#e78610",
      gray: "#999",
      black: "black",
      red: "#d22e2e",
      transparent: "transparent",
    },
    extend: {
      fontSize: {
        body: "1rem",
        bodyTablet: "1.25rem",
      },
    },
  },
};

// ##fafafa - primary
// #ffffff - secondary
// #05b169 - accent
