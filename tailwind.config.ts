import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        softpink: "#FEF1F7",
        cotton: "#FFC9E2",
        pink: "#EA8EAB",
        bordeaux: {
          DEFAULT: "#5A0016",
          light: "#7A1A36",
        },
        muted: "#6B2A43",
        "input-border": "#C98AA1",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "card-sm": "20px",
        "card": "24px",
        "card-lg": "32px",
        "card-xl": "40px",
      },
      letterSpacing: {
        tightest: "-0.035em",
        eyebrow: "0.08em",
      },
    },
  },
  plugins: [],
};

export default config;
