import type { Config } from "tailwindcss";

/**
 * Tokens da identidade visual Matchy.
 * Proporção: creme domina, magenta carrega a ação, laranja pontua.
 * Blush e plum em doses pequenas.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: "#E5215F", // Match Pink: marca, CTAs, destaques
          ink: "#B8174C", // mesmo matiz, mais escuro, para texto pequeno sobre creme (AA)
          deep: "#D61C56", // superfícies magenta com texto pequeno creme (AA 4.6:1); #E5215F dá 4.1:1
          dark: "#C2184F", // hover de botões
        },
        orange: {
          DEFAULT: "#FD5E12", // Glow Orange: badges, gráficos, energia
        },
        blush: {
          DEFAULT: "#FFB3C8", // apoio suave, fundos de card
          soft: "#FFD9E3",
        },
        cream: {
          DEFAULT: "#FFF4E6", // fundo padrão
          dark: "#F1DFC8", // bordas finas
          deep: "#E8D2B6",
        },
        plum: {
          DEFAULT: "#3B0E1E", // texto e seções editoriais
          soft: "#6B3446", // texto secundário sobre creme (AA)
        },
      },
      fontFamily: {
        display: ["var(--font-bootzy)", "Arial Black", "Impact", "system-ui", "sans-serif"],
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"], // Rousie: só selos e palavra de destaque
      },
      fontSize: {
        // Mobile primeiro; as variantes md: aplicam a escala do manual
        "h1-sm": ["2.25rem", { lineHeight: "2.75rem", letterSpacing: "0.02em", fontWeight: "800" }],
        h1: ["3rem", { lineHeight: "3.5rem", letterSpacing: "0.02em", fontWeight: "800" }],
        "h1-xl": ["4rem", { lineHeight: "4.5rem", letterSpacing: "0.02em", fontWeight: "800" }],
        "h2-sm": ["1.625rem", { lineHeight: "2.125rem", letterSpacing: "0.02em", fontWeight: "700" }],
        h2: ["1.875rem", { lineHeight: "2.375rem", letterSpacing: "0.02em", fontWeight: "700" }],
        "h2-lg": ["2.375rem", { lineHeight: "2.875rem", letterSpacing: "0.02em", fontWeight: "700" }],
        label: ["0.9375rem", { lineHeight: "1.25rem", letterSpacing: "0.18em", fontWeight: "600" }],
        "body-sm": ["1rem", { lineHeight: "1.625rem" }],
        body: ["1.125rem", { lineHeight: "1.75rem" }],
      },
      borderRadius: {
        card: "1.75rem",
        "card-lg": "2.5rem",
      },
      boxShadow: {
        soft: "0 20px 50px -24px rgba(59, 14, 30, 0.35)",
        pop: "0 30px 60px -20px rgba(229, 33, 95, 0.45)",
      },
      maxWidth: {
        site: "76rem",
      },
    },
  },
  plugins: [],
};

export default config;
