import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50", // Verde principal
        secondary: "#333333", // Negro
        accent: "#ffffff", // Blanco
        background: "#f3f4f6", // Unicolor para todo el fondo
      },
    },
  },
  plugins: [],
};
export default config;
