import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-1": "var(--color-text-1)",
        "text-2": "var(--color-text-2)",
        "text-success": "var(--color-text-success)",
        "text-red": "var(--color-text-red)",
        "text-warn": "var(--color-text-warn)",
        "text-accent": "var(--color-text-accent)",
        icon: "var(--color-icon)",
        "border-default": "var(--color-border)",
        "border-warning": "var(--color-border-warning)",
        "bg-accent": "var(--color-bg-accent)",
        "bg-accent-opacity": "var(--color-bg-accent-opacity)",
        "bg-layout": "var(--color-bg-layout)",
        "bg-primary": "var(--color-bg-primary)",
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      perspective: {
        '1000': '1000px',
      },
      backfaceVisibility: {
        'hidden': 'hidden'
      }
    },
    keyframes: {
      slideUp: {
        "0%": { transform: "translateY(100%)" },
        "100%": { transform: "translateY(0)" },
      },
      slideDown: {
        "0%": { transform: "translateY(0)" },
        "100%": { transform: "translateY(100%)" },
      },
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      fadeOut: {
        "0%": { opacity: "1" },
        "100%": { opacity: "0" },
      }
    },
    animation: {
      slideUp: "slideUp 0.3s ease-out",
      slideDown: "slideDown 0.3s ease-out",
      fadeIn: "fadeIn 0.3s ease-out",
      fadeOut: "fadeOut 0.3s ease-out"
    },
  },
  plugins: [],
} satisfies Config;
