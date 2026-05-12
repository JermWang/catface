import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        blackground: "#050705",
        jungle: "#174C22",
        signal: "#6DBE45",
        moss: "#7CB662",
        savanna: "#F28A1A",
        amber: "#E8A849",
        bone: "#F3F1E8",
        ice: "#A9D8FF",
        earth: "#1B5FA7",
        midnight: "#0A1628"
      },
      fontFamily: {
        display: ["var(--font-anton)", "Impact", "Arial Narrow", "sans-serif"],
        body: ["var(--font-oswald)", "Arial", "sans-serif"]
      },
      boxShadow: {
        organic: "0 24px 80px rgba(0,0,0,.45), 0 0 0 1px rgba(124,182,98,.18)",
        glow: "0 0 60px rgba(124,182,98,.25), 0 0 120px rgba(124,182,98,.08)",
        "glow-amber": "0 0 60px rgba(232,168,73,.2), 0 0 120px rgba(232,168,73,.06)"
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(109,190,69,.11) 1px, transparent 1px), linear-gradient(90deg, rgba(109,190,69,.11) 1px, transparent 1px)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" }
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(1deg)" }
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" }
        },
        drift: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(10px, -10px) rotate(2deg)" },
          "66%": { transform: "translate(-5px, 5px) rotate(-1deg)" },
          "100%": { transform: "translate(0, 0) rotate(0deg)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        drift: "drift 12s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
