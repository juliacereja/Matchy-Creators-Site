import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  tone?: "orange" | "pink" | "plum";
  rotate?: boolean;
};

/**
 * Selo em Rousie. Usar só para uma palavra ou expressão curta, nunca em UI ou parágrafo.
 * Sempre em minúsculas, sem caixa alta e sem letter-spacing.
 * A Rousie só tem o peso Regular: o negrito vem de font-bold (sintético).
 */
export function ScriptSeal({ children, className, tone = "orange", rotate = true }: Props) {
  const tones = {
    // plum sobre laranja garante contraste AA; creme sobre laranja não passa
    orange: "bg-orange text-plum",
    pink: "bg-pink-deep text-cream",
    plum: "bg-plum text-blush",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center whitespace-nowrap rounded-full px-5 pb-2 pt-2.5 font-script text-[1.75rem] font-bold lowercase leading-none tracking-normal shadow-soft",
        tones[tone],
        rotate && "-rotate-6",
        className,
      )}
    >
      {children}
    </span>
  );
}
