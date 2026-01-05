/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"] ,
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sora", "ui-sans-serif", "system-ui"],
        display: ["Space Grotesk", "Sora", "ui-sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular"]
      },
      colors: {
        ink: {
          900: "#0b0f1a",
          800: "#111827",
          700: "#1f2937"
        },
        mist: "#f1f5f9",
        accent: {
          500: "#0ea5e9",
          600: "#0284c7"
        },
        neon: "#4ade80"
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(15, 23, 42, 0.35)",
        glow: "0 0 35px rgba(14, 165, 233, 0.35)"
      }
    }
  },
  plugins: [typography]
};

