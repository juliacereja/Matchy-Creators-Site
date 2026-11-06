import localFont from "next/font/local";
import { Outfit } from "next/font/google";

// Bootzy TM: só títulos, logo e números de destaque.
// O arquivo atual tem um peso só; a faixa 700 800 evita negrito sintético.
// BootzyTM.woff2 é um subset Latin gerado a partir do .ttf original (mais leve).
export const bootzy = localFont({
  src: [{ path: "../public/fonts/BootzyTM.woff2", weight: "700 800", style: "normal" }],
  variable: "--font-bootzy",
  display: "swap",
  fallback: ["Arial Black", "Impact", "system-ui", "sans-serif"],
  adjustFontFallback: "Arial",
});

export const outfit = Outfit({
  subsets: ["latin"],
  // Outfit é variável: um arquivo só cobre os pesos 300 a 700
  variable: "--font-outfit",
  display: "swap",
});

// Rousie: fonte script, só em selos ou numa palavra de destaque isolada.
// Rousie.woff2 é um subset Latin gerado a partir do Rousie.otf original.
export const rousie = localFont({
  src: [{ path: "../public/fonts/Rousie.woff2", weight: "400", style: "normal" }],
  variable: "--font-script",
  display: "swap",
  fallback: ["cursive"],
  preload: false,
});
