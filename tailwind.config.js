/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        91: "91px",
      },
      width: {
        288: "288px",
      },
      colors: {
        gray: "#f9f9f9",
        active: "#293B96",
        green: "#55D8A1",
        shadow: "21.2406px 21.2406px 33.985px rgba(7, 6, 53, 0.1)",
        white: "#fff",
        black: "#000",
        indigo: "#4F46E5",
        red: "#FF4842",
      },
      fontFamily: {
        lato: ["Lato"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
