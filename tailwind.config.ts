import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: ".5rem",
        sm: "1rem",
      },
    },
    fontFamily: {
      sans: ["DM Sans", "system-ui", "sans-serif"],
      serif: ["DM Serif Text", "Georgia", "serif"],
    },
    extend: {
      keyframes: {
        slideIn: {
          "0%": { opacity: "0", transform: "translateX('-20px')" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        ["slide-in"]: "slideIn 0.4s ease-in-out forwards",
        ["fade-in"]: "fadeIn 0.4s ease-in-out forwards",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        verde: {
          200: "#ACEF75",
          300: "#91EE77",
          400: "#17E880",
          700: "#2E482C",
          800: "#16281F",
          900: "#0F1C15",
          950: "#030504",
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      function animationsDelay() {
        const delays: { [key: string]: { "animation-delay": string } } = {};

        for (let i = 1; i <= 12; i++) {
          delays[`.animate-${i}`] = {
            "animation-delay": `${i * 100}ms`,
          };
        }

        return delays;
      }
      addUtilities(animationsDelay());
    }),
  ],
};
export default config;
