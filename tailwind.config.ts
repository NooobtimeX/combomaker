import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      gridTemplateColumns: {
        "14": "repeat(14, minmax(0, 1fr))",
        "16": "repeat(16, minmax(0, 1fr))",
        "18": "repeat(18, minmax(0, 1fr))",
        "20": "repeat(20, minmax(0, 1fr))",
        "22": "repeat(22, minmax(0, 1fr))",
      },
      screens: {
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
} satisfies Config;
