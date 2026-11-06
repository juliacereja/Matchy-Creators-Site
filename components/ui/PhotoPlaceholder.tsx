import { cn } from "@/lib/cn";

/** Espaço reservado para fotos reais. Troque por <Image> quando tiver as imagens. */
export function PhotoPlaceholder({
  label = "foto do creator",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Espaço reservado: ${label}`}
      className={cn(
        "flex items-center justify-center bg-blush text-center text-sm font-semibold uppercase tracking-[0.18em] text-plum/70",
        className,
      )}
    >
      {label}
    </div>
  );
}
