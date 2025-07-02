import type { Config } from "tailwindcss";

const config: Config = {
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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Modern Portfolio Design System
        "portfolio-primary": {
          DEFAULT: "hsl(var(--portfolio-primary))",
          light: "hsl(var(--portfolio-primary-light))",
          dark: "hsl(var(--portfolio-primary-dark))",
        },
        "portfolio-accent": "hsl(var(--portfolio-accent))",
        "portfolio-neutral": {
          50: "hsl(var(--portfolio-neutral-50))",
          100: "hsl(var(--portfolio-neutral-100))",
          200: "hsl(var(--portfolio-neutral-200))",
          300: "hsl(var(--portfolio-neutral-300))",
          400: "hsl(var(--portfolio-neutral-400))",
          500: "hsl(var(--portfolio-neutral-500))",
          600: "hsl(var(--portfolio-neutral-600))",
          700: "hsl(var(--portfolio-neutral-700))",
          800: "hsl(var(--portfolio-neutral-800))",
          900: "hsl(var(--portfolio-neutral-900))",
        },
        // Legacy support
        "portfolio-primary-accent": "hsl(var(--portfolio-primary))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'glow': '0 0 0 1px hsl(var(--portfolio-primary) / 0.1), 0 0 20px hsl(var(--portfolio-primary) / 0.1)',
        'soft': '0 4px 6px -1px hsl(var(--portfolio-neutral-900) / 0.1), 0 2px 4px -1px hsl(var(--portfolio-neutral-900) / 0.06)',
        'elegant': '0 10px 15px -3px hsl(var(--portfolio-neutral-900) / 0.1), 0 4px 6px -2px hsl(var(--portfolio-neutral-900) / 0.05)',
        'floating': '0 20px 25px -5px hsl(var(--portfolio-neutral-900) / 0.1), 0 10px 10px -5px hsl(var(--portfolio-neutral-900) / 0.04)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, hsl(var(--portfolio-primary)) 0%, hsl(var(--portfolio-primary-light)) 100%)',
        'gradient-accent': 'linear-gradient(135deg, hsl(var(--portfolio-accent)) 0%, hsl(var(--portfolio-primary-light)) 100%)',
        'gradient-subtle': 'linear-gradient(135deg, hsl(var(--portfolio-neutral-50)) 0%, hsl(var(--portfolio-neutral-100)) 100%)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
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
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          from: { transform: "translateX(100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        "scale-in": {
          from: { transform: "scale(0.9)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--portfolio-primary) / 0.3)" },
          "50%": { boxShadow: "0 0 30px hsl(var(--portfolio-primary) / 0.5)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        "float": "float 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;