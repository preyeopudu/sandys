/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        104: "551px",
      },
      height: {
        104: "551px",
      },
      colors: {
        "custom-gray": "rgba(14, 14, 14, 0.7)",
        "sandy-green": "#B7CB1B",
        "sandy-orange": "#D26224",
        "sandy-black": "#151515",
      },
      borderRadius: {
        "5xl": "64px",
      },
    },
  },
  plugins: [],
};
