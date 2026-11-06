import { cn } from "@/lib/cn";

type Circle = {
  color: "pink" | "orange" | "blush";
  size: string;
  className: string;
};

const colorMap = { pink: "bg-pink", orange: "bg-orange", blush: "bg-blush" };

/** Círculos grandes cortados pelas bordas da seção. Puramente decorativos. */
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
