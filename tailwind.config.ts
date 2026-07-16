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
        // Primary Blue Scale
        blue: {
          50:  "#F0F5FF",
          100: "#E6EEFF",
          200: "#B3CCFF",
          300: "#66A3FF",
          400: "#3385FF",
          500: "#0066FF",
          600: "#0050CC",
          700: "#003DA5", // PRIMARY
          800: "#002B8A",
          900: "#001A57",
          950: "#000E35",
        },
        // Accent Red Scale
        red: {
          50:  "#FFF0F0",
          100: "#FFE8E8",
          200: "#FFCCCC",
          300: "#FF9999",
          400: "#FF3B40",
          500: "#E31E24", // ACCENT
          600: "#CC0000",
          700: "#990000",
        },
        // Neutral / Gray Scale
        gray: {
          50:  "#F5F7FA",
          100: "#EEF0F4",
          200: "#D8DDE5",
          300: "#B8BCC4",
          400: "#8B919E",
          500: "#5C6270",
          600: "#363B45",
          700: "#252931",
          800: "#1A1D23", // BODY TEXT
          900: "#111318",
          950: "#0A0C10",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.75rem)", { lineHeight: "1.12", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.75rem, 3vw, 3rem)",  { lineHeight: "1.2",  letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.5rem, 2.5vw, 2.25rem)", { lineHeight: "1.25", letterSpacing: "-0.015em" }],
      },
      borderRadius: {
        "xl":  "12px",
        "2xl": "16px",
        "3xl": "20px",
        "4xl": "28px",
      },
      boxShadow: {
        "xs":   "0 1px 2px rgba(0,0,0,0.05)",
        "sm":   "0 2px 8px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
        "md":   "0 4px 16px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.05)",
        "lg":   "0 8px 32px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.06)",
        "xl":   "0 16px 48px rgba(0,0,0,0.12), 0 8px 20px rgba(0,0,0,0.07)",
        "2xl":  "0 24px 64px rgba(0,0,0,0.14), 0 12px 28px rgba(0,0,0,0.08)",
        "blue": "0 8px 32px rgba(0,61,165,0.20), 0 4px 12px rgba(0,61,165,0.12)",
        "red":  "0 8px 24px rgba(227,30,36,0.25)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.14), 0 10px 24px rgba(0,0,0,0.08)",
      },
      backgroundImage: {
        "hero-gradient":        "linear-gradient(145deg, #001A57 0%, #003DA5 55%, #0044BB 100%)",
        "ai-gradient":         "linear-gradient(135deg, #0D0A2E 0%, #0A1E5E 40%, #001B7A 70%, #0D0A2E 100%)",
        "blue-gradient":       "linear-gradient(135deg, #001A57 0%, #003DA5 100%)",
        "card-blue":           "linear-gradient(135deg, #003DA5 0%, #001A57 100%)",
        "burgundy-gradient":   "linear-gradient(135deg, #3F0A1A 0%, #5C0F26 100%)",
        "card-burgundy":       "linear-gradient(135deg, #5C0F26 0%, #3F0A1A 100%)",
        "ai-card":           "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.3))",
        "purple-gradient":   "linear-gradient(135deg, #6366F1, #8B5CF6)",
        "grid-lines":        "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      animation: {
        "pulse-glow":  "pulseGlow 6s ease-in-out infinite",
        "float-card":  "floatCard 4s ease-in-out infinite",
        "led-pulse":   "ledPulse 2s ease-in-out infinite",
        "orb-float":   "orbFloat 8s ease-in-out infinite",
        "blink":       "blink 2s ease-in-out infinite",
        "marquee":     "marquee 30s linear infinite",
        "bar-grow":    "barGrow 3s ease-in-out infinite",
        "fade-up":     "fadeUp 0.6s ease-out forwards",
        "fade-in":     "fadeIn 0.4s ease-out forwards",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.8", transform: "scale(1)" },
          "50%":      { opacity: "1",   transform: "scale(1.08)" },
        },
        floatCard: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
        ledPulse: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.4" },
        },
        orbFloat: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%":      { transform: "translateY(-20px) scale(1.05)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.3" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        barGrow: {
          "0%, 100%": { opacity: "0.6" },
          "50%":      { opacity: "1" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
      },
    },
  },
  plugins: [],
};

export default config;
