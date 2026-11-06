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
 */
export function ScriptSeal({ children, className, tone = "orange", rotate = true }: Props) {
  const tones = {
    // plum sobre laranja garante contraste AA; creme sobre laranja não passa
    orange: "bg-orange text-plum",
    pink: "bg-pink-deep text-cream", // texto de 20px conta como pequeno: precisa do magenta AA
    plum: "bg-plum text-blush",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center whitespace-nowrap rounded-full px-4 pb-1.5 pt-2 font-script text-[1.25rem] font-normal lowercase leading-none tracking-normal shadow-soft",
        tones[tone],
        rotate && "-rotate-6",
        className,
      )}
    >
      {children}
    </span>
  );
}
