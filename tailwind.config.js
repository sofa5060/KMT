/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "var(--text-color)",
        primary: "var(--main-color)",
        secondary: "var(--secondary-color)",
      },
      fontFamily: {
        ibm: ["IBM Plex Sans", "sans-serif"],
        golos: ["Golos Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};
