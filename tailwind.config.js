/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "rgba(14, 14, 14, 0.7)",
        "sandy-green": "#B7CB1B",
      },
    },
  },
  plugins: [],
};
