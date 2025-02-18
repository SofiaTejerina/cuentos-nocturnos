import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "blue-flor": "rgb(0, 61, 91)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blueFlor: "rgb(0, 61, 91)"
      },
      fontFamily: {
        'luke-thick': ['luke-thick-300', 'sans-serif'],
        'last-didone': ['lust-didone', 'serif'],
      },
      fontWeight: {
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
    },
  },
  plugins: [],
} satisfies Config;
