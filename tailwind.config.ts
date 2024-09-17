import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        exo2: ["var(--font-exo_2)", "sans-serif"],
      },
      spacing: {
        15: "60px",
      },
      backgroundImage: {
        conic:
          "conic-gradient(from 180deg at 50% 50%, #2B2423 0deg, #4B4241 189deg, #2B2423 360deg)",
      },
      colors: {
        grey: "#B5AFAE",
        lightGrey: "#ECE8E7",
        error: "#FF4444",
        black: "#2B2423",
        white: "#FAF8F0",
      },
    },
  },
  plugins: [],
};
export default config;
