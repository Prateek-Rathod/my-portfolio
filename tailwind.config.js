/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ⬅️ Enable class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        alex: ["'Alex Brush'", "cursive"],
        allura: ["Allura", "cursive"],
        dancing: ["'Dancing Script'", "cursive"],
        edu: ["'Edu AU VIC WA NT Arrows'", "cursive"],
        kaushan: ["'Kaushan Script'", "cursive"],
        merienda: ["Merienda", "cursive"],
        outfit: ["Outfit", "sans-serif"],
        prata: ["Prata", "serif"],
      },
      boxShadow: {
        "dot-3d":
          "0 0 6px 2px rgba(34, 197, 94, 0.6), 0 0 12px rgba(34, 197, 94, 0.4)",
      },
      cursor: {
        none: "none",
      },
    },
  },
  plugins: [],
};
