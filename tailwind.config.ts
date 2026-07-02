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
        primary: {
          DEFAULT: "#2563EB",
          light: "#DBEAFE",
        },
        surface: "#F8FAFC",
        ink: "#111827",
        muted: "#6B7280",
        line: "#E5E7EB",
        success: "#22C55E",
        warning: "#F59E0B",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.08)",
        lift: "0 8px 24px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
