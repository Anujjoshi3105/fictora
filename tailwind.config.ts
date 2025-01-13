import tailwindcssAnimate from "tailwindcss-animate";
import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      aspectRatio: {
        poster: "2 / 3",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "automation-zoom-in": {
          "0%": { transform: "translateY(-30px) scale(0.2)" },
          "100%": { transform: "transform: translateY(0px) scale(1)" },
        },
        flip: {
          to: { transform: "rotate(360deg)" },
        },
        rotate: {
          to: { transform: "rotate(90deg)" },
        },
        "rotate-new": {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        "border-beam": {
          "100%": { "offset-distance": "100%" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        "background-shine": {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        ripple: {
          "0%, 100%": { transform: "translate(-50%, -50%) scale(1)" },
          "50%": { transform: "translate(-50%, -50%) scale(0.9)" },
        },
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: "1", transform: "translate(-50%,-40%) scale(1)" },
        },
        loading: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        shine: {
          "0%": { backgroundPosition: "200% 0" },
          "25%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "automation-zoom-in": "automation-zoom-in 0.5s",
        flip: "flip 6s infinite steps(2, end)",
        rotate: "rotate 3s linear infinite both",
        "rotate-new": "rotate-new 20s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        marquee: "marquee var(--duration) linear infinite",
        grid: "grid 15s linear infinite",
        "background-shine": "background-shine 2s linear infinite",
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        loading: "loading 0.6s linear infinite",
        shine: "shine 3s ease-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
