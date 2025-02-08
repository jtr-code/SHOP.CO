import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "head-large": "clamp(2.25rem, 1.9rem + 1.75vw, 4rem)",
        "head-medium": "clamp(2rem, 1.8rem + 1vw, 3rem)",
        "head-small": "clamp(1.5rem, 1.35rem + 0.75vw, 2.25rem)",
      },
      fontFamily: {
        "open-sans": ["var(--font-open-sans)"],
      },
      colors: {
        "light-gray": "#F0F0F0",
        "warm-gray": "#F0EEED",
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;
