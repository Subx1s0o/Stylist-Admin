import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.tsx",
    "./src/app/**/*.tsx",
    "./src/views/**/*.tsx",
  ],
  theme: {
    extend: {
      borderRadius: {
        md: "20px",
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
        "primary-black": "rgba(43, 36, 35, 0.55)",
      },
      fontSize: {
        xxl: [
          "28px",
          {
            fontWeight: "500",
            lineHeight: "25.2px",
          },
        ],
        xl: [
          "24px",
          {
            fontWeight: "500",
            lineHeight: "28.8px",
          },
        ],
        lg: [
          "20px",
          {
            fontWeight: "500",
            lineHeight: "24px",
          },
        ],
        md: [
          "18px",
          {
            fontWeight: "500",
            lineHeight: "21.6px",
          },
        ],
        sm: [
          "16px",
          {
            fontWeight: "500",
            lineHeight: "20px",
          },
        ],
        "sm-thin": [
          "16px",
          {
            fontWeight: "400",
            lineHeight: "20px",
          },
        ],
        xs: [
          "14px",
          {
            fontWeight: "400",
            lineHeight: "20px",
          },
        ],
      },
    },
  },
  plugins: [],
} as Config;
