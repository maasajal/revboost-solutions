/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      daisyui: {
        themes: ["light", "dark"], // Enable multiple themes if needed
      },
    },
  },
  plugins: [require("daisyui")],
};
