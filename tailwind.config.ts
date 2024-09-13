import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": { opacity: "0", transform: "translateY(-1rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fade: "fade 1s ease",
      },
    },
  },
  plugins: [],
} satisfies Config;
