import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  /** "pink" é o padrão do manual (magenta sobre creme). "cream" é para fundos plum ou magenta. */
  tone?: "pink" | "cream";
  href?: string | null;
};

/**
 * "Matchy." em Bootzy, com o ponto final na mesma fonte e sempre colado.
 * A área de respiro (altura do "M", ~0.72em) é garantida pelo padding.
 */
export function Logo({ className, tone = "pink", href = "/" }: LogoProps) {
  const word = (
    <span
      className={cn(
        "inline-block whitespace-nowrap p-[0.36em] font-display font-extrabold leading-none tracking-[0.02em]",
        tone === "pink" ? "text-pink" : "text-cream",
        className,
      )}
    >
      Matchy.
    </span>
  );

  if (!href) return word;

  return (
    <Link href={href} aria-label="Matchy, página inicial" className="-m-[0.36em] inline-block rounded-xl">
      {word}
    </Link>
  );
}

/** Ícone: "M" creme em quadrado arredondado magenta. */
export function LogoIcon({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex aspect-square items-center justify-center rounded-[28%] bg-pink font-display font-extrabold leading-none text-cream",
        className,
      )}
    >
      M
    </span>
  );
}
