/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Manrope, sans-serif, system-ui",
      display: "Lao",
    },
    extend: {
      colors: {
        cream: "#F6EFE3",
      },
    },
  },
  plugins: [],
};
