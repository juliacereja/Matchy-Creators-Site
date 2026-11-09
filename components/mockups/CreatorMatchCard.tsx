import { Badge } from "@/components/ui/Badge";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { cn } from "@/lib/cn";

const breakdown = [
  { label: "Valores", value: 95 },
  { label: "Tom de comunicação", value: 90 },
  { label: "Estética", value: 91 },
];

/** Mockup do card de creator visto pela marca, com o score de compatibilidade. */
export function CreatorMatchCard({ className }: { className?: string }) {
  return (
    <figure
      aria-label="Exemplo de card de creator com 92% de match"
      className={cn("w-full max-w-sm rounded-card-lg border border-cream-dark bg-white p-4 shadow-soft", className)}
    >
      <div className="relative">
        <PhotoPlaceholder className="aspect-[4/3] rounded-[1.75rem]" />
        <Badge tone="pink" className="absolute left-3 top-3 px-4 py-1.5 text-base shadow-pop">
          92% de match
        </Badge>
      </div>
      <figcaption className="px-2 pb-2 pt-5">
        <div className="flex items-baseline justify-between gap-3">
          <p className="font-display text-xl text-plum">Bia Martins</p>
          <p className="text-sm font-medium text-plum-soft">Belo Horizonte, MG</p>
        </div>
        <p className="mt-0.5 text-sm text-plum-soft">@biamakes · skincare e make leve · 1,4 mil seguidores</p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Afinidades">
          {["Clean beauty", "Tom acolhedor", "Estética natural"].map((t) => (
            <li key={t}>
              <Badge tone="cream" className="font-semibold">{t}</Badge>
            </li>
          ))}
        </ul>

        <ul className="mt-5 space-y-3" aria-label="Compatibilidade por dimensão">
          {breakdown.map((b) => (
            <li key={b.label}>
              <p className="flex justify-between text-sm font-semibold text-plum">
                <span>{b.label}</span>
                <span>{b.value}%</span>
              </p>
              <div className="mt-1.5 h-2 rounded-full bg-blush-soft" aria-hidden="true">
                <div className="h-2 rounded-full bg-orange" style={{ width: `${b.value}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}
