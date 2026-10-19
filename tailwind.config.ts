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
        bg: "var(--bg)",
        fg: "var(--fg)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft, var(--accent))",
        muted: "var(--muted)",
        card: "var(--card)",
        line: "var(--line)",
        "on-accent": "var(--on-accent)",
        primary: "var(--primary)",
        chip: "var(--chip)",
      },
      borderRadius: {
        theme: "var(--radius)",
      },
      boxShadow: {
        card: "var(--shadow)",
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex-sans-arabic)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
