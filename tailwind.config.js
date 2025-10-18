/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", "dark", "dim"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Text colors
        "text-color": "#ffffff",
        "text-color-dark": "#f1f1f1",
        "text-color-dim": "#ffffff",
        "text-secondary-desc": "#718096",
        "text-secondary-desc-dark": "#a0aec0",
        "text-secondary-desc-dim": "#a0aec0",
        // Dispute/contrast colors
        "dispute-color": "#000000",
        "dispute-color-dark": "#f5f5f5",
        "dispute-color-dim": "#ffffff",
        // Card backgrounds
        card: "#ffffff",
        "card-dark": "#0b0b0b",
        "card-dim": "#020610",
        "sub-card": "#f8f9fa",
        "sub-card-dark": "#1a1a1a",
        "sub-card-dim": "#0a1a2e",
        // Border colors
        "custom-border": "#e9ecef",
        "custom-border-dark": "#2a2a2a",
        "custom-border-dim": "#1a2e42",
        // Pre/code backgrounds
        "pre-bg": "#fbfcfd",
        "pre-bg-dark": "#111111",
        "pre-bg-dim": "#0a1528",
        // Gradient colors (YELLOW THEME)
        "gradient-start": "#fbbf24", // yellow-400
        "gradient-end": "#f59e0b", // yellow-600
        "gradient-start-dark": "#fbbf24",
        "gradient-end-dark": "#f59e0b",
        "gradient-start-dim": "#fbbf24",
        "gradient-end-dim": "#f59e0b",
        // Accent colors (YELLOW THEME)
        accent: "#eab308", // yellow-500
        "accent-dark": "#eab308",
        "accent-dim": "#eab308",
        // Background colors
        "bg-primary": "#ffffff",
        "bg-primary-dark": "#000000",
        "bg-primary-dim": "#020610",
        "bg-secondary": "#f8f9fa",
        "bg-secondary-dark": "#121212",
        "bg-secondary-dim": "#040812",
      },
      backgroundImage: {
        "gradient-yellow": "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
        "gradient-yellow-hover": "linear-gradient(135deg, #fcd34d 0%, #fbbf24 100%)",
        "text-gradient": "linear-gradient(to right, #fbbf24, #eab308, #f97316)", // yellow to orange
      },
      boxShadow: {
        glow: "0 0 20px rgba(234, 179, 8, 0.3)",
        "glow-hover": "0 0 30px rgba(234, 179, 8, 0.5)",
      },
    },
  },
  plugins: [],
};
