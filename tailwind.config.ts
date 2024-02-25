import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      color: {
        "bg-page1": "#121212",
        "bg-page2": "#121212",
        "bg-element1": "#1E1E1E",
        "bg-element2": "#1E1E1E",
        "bg-element3": "#252525",
        "bg-element4": "#2E2E2E",
        "bg-element5": "#F1F3F5",
        "bg-element6": "#F8F9FA",
        "bg-element7": "#252525",
        "bg-element8": "#0c0c0c",
        "bg-invert": "#FFFFFF",
        "bg-inline-code": "#363636",
        "bg-tag": "#252525",
        "text1": "#ECECEC",
        "text2": "#D9D9D9",
        "text3": "#ACACAC",
        "text4": "#595959",
        "border1": "#E0E0E0",
        "border2": "#A0A0A0",
        "border3": "#4D4D4D",
        "border4": "#2A2A2A",
      }
    },
  },
  plugins: [],
};
export default config;
