/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        showcase: "url('/images/showcase.jpg')",
      },
      width: {
        500: "500px",
        600: "600px",
      },
      colors: {
        secondary: {
          DEFAULT: "#CA8A03",
        },
      },
    },
  },
  plugins: [],
};
