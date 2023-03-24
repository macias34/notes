/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
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
      lightBlue: "#74a4f0",
      purple: "#3700b7",
      darkPurple: "#220077",
      black: "#181a1b",
      transparent: "transparent",
    },
    extend: {
      fontSize: {
        body: "1rem",
        bodyTablet: "1.25rem",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
};

// ##fafafa - primary
// #ffffff - secondary
// #05b169 - accent
