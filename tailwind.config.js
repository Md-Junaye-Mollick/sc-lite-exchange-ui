/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", "dark", "dim"], // Ensures dark and dim classes are enabled
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Text colors
        "text-color": "#ffffff",
        "text-color-dark": "#f1f1f1",
        "text-color-dim": "#ffffff",

        // New color for secondary descriptions
        "text-secondary-desc": "#718096", // Default light grey
        "text-secondary-desc-dark": "#a0aec0", // Darker theme grey
        "text-secondary-desc-dim": "#a0aec0", // Dim theme grey

        // Dispute/contrast colors
        "dispute-color": "#000000",
        "dispute-color-dark": "#f5f5f5",
        "dispute-color-dim": "#ffffff",

        // Card backgrounds
        card: "#ffffff",
        "card-dark": "#0b0b0b",
        "card-dim": "#020610",

        // Sub-card backgrounds
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

        // Gradient colors (NOW BLUE-LIKE)
        "gradient-start": "#3498db", // Base blue gradient start
        "gradient-end": "#2980b9", // Base blue gradient end
        "gradient-start-dark": "#3498db", // Dark theme uses same blue gradient
        "gradient-end-dark": "#2980b9",
        "gradient-start-dim": "#3498db", // Dim theme uses same blue gradient
        "gradient-end-dim": "#2980b9",

        // Accent colors (NOW BLUE-LIKE)
        accent: "#3498db", // Primary Accent color (Blue)
        "accent-dark": "#3498db", // Dark theme uses same accent
        "accent-dim": "#3498db", // Dim theme uses same accent

        // Background colors
        "bg-primary": "#ffffff",
        "bg-primary-dark": "#000000",
        "bg-primary-dim": "#020610",

        "bg-secondary": "#f8f9fa",
        "bg-secondary-dark": "#121212",
        "bg-secondary-dim": "#040812",
      },

      backgroundImage: {
        "gradient-teal": "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
        "gradient-teal-hover":
          "linear-gradient(135deg, #4da6e9 0%, #3a96d1 100%)",
        "gradient-green-dim":
          "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
      },

      boxShadow: {
        // Updated glow to use rgba of the new blue accent
        glow: "0 0 20px rgba(52, 152, 219, 0.3)", // Glow effect with new blue
        "glow-hover": "0 0 30px rgba(52, 152, 219, 0.5)", // Increased glow on hover
        "glow-green": "0 0 20px rgba(52, 152, 219, 0.2)", // Slightly softer blue glow
      },
    },
  },
  plugins: [],
};
