import { cn } from "@/lib/cn";

type Circle = {
  color: "pink" | "orange" | "blush";
  size: string;
  className: string;
};

const colorMap = { pink: "bg-pink", orange: "bg-orange", blush: "bg-blush" };

/**
 * Círculos decorativos, sempre inteiros dentro da seção (nunca cortados pelas bordas).
 * Exceção: as bolas laranjas dos cards "Sou marca" e "Sou creator" são grandes e cortadas pelo card.
 */
export function DecorCircles({ circles, className }: { circles: Circle[]; className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {circles.map((c, i) => (
        <span
          key={i}
          className={cn("absolute rounded-full", colorMap[c.color], c.className)}
          style={{ width: c.size, height: c.size }}
        />
      ))}
    </div>
  );
}
