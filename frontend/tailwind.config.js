/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "basic-yellow": "#FFE93F",
        "basic-blue": "#3200E0",
        "basic-red": "#FD4434",
      },
    },
  },
  plugins: [],
};
