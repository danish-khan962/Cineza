/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Primary-1": "#4F46E5",
        "Primary-2": "#4338CA",
      }
    },
  },
  plugins: [],
}