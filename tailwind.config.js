/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#D97757",
          orange: "#C15F3C",
          dark: "#F1EDE5",
          warm: "#2B2520",
          panel: "#E8E2D6",
        },
      },
      fontFamily: {
        display: ["IBM Plex Sans Thai", "sans-serif"],
        body: ["IBM Plex Sans Thai", "sans-serif"],
      },
    },
  },
  plugins: [],
}
