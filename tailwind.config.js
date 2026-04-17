/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#F5C542",
          orange: "#FF4D00",
          dark: "#0A0A0A",
          warm: "#F0EDE8",
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
