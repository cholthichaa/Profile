// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
      },
      colors: {
        peach: "#FFD1DC",
        mint: "#C0F5EC",
        cream: "#FFF9EC",
        orangeSoft: "#FFB085",
        darkOlive: "#3E4E40",
      },
      boxShadow: {
        cute: "0 8px 20px rgba(255, 209, 220, 0.3)",
      },
    },
  },
  plugins: [],
}
