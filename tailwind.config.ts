import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f1f7ff",
          100: "#dbe9ff",
          500: "#2b6cb0",
          600: "#245b94",
          700: "#1d4a78"
        }
      }
    }
  },
  plugins: []
};

export default config;
