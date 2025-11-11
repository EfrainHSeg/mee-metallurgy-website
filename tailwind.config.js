/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0F1419",
        "dark-secondary": "#1A1F28",
        "dark-card": "#1E2530",
        "accent-green": "#00DC82",
        "accent-blue": "#3B82F6",
        "text-primary": "#FFFFFF",
        "text-secondary": "#B0B8C4",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      boxShadow: {
        green: "0 20px 40px rgba(0, 220, 130, 0.1)",
        blue: "0 20px 40px rgba(59, 130, 246, 0.1)",
      },
    },
  },
  plugins: [],
};
