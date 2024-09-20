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
      },
      backgroundImage:{
        bannerImg : "url('https://images.unsplash.com/photo-1423666523292-b458da343f6a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        
      }
    },
  },
  plugins: [require("daisyui")],
};
