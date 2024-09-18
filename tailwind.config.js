/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      daisyui: {
        themes: ["light", "dark"], // Enable multiple themes if needed
      },
      fontFamily: {
        'montserrat':  "'Montserrat', sans-serif",
        'roboto':  "'Roboto', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
};
