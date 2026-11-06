import { cn } from "@/lib/cn";

/** Anel com a porcentagem de compatibilidade. */
export function MatchScoreRing({
  value,
  size = 132,
  className,
  label = "de match",
}: {
  value: number;
  size?: number;
  className?: string;
  label?: string;
}) {
  const r = 52;
  const c = 2 * Math.PI * r;
  return (
    <div className={cn("relative inline-flex items-center justify-center", className)} style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 120" className="absolute inset-0 -rotate-90" aria-hidden="true">
        <circle cx="60" cy="60" r={r} fill="none" stroke="#FFD9E3" strokeWidth="12" />
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="#E5215F"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - value / 100)}
        />
      </svg>
      <span className="relative text-center leading-none">
        <span className="block font-display text-[2.1rem] font-extrabold text-pink">{value}%</span>
        <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.18em] text-plum-soft">{label}</span>
      </span>
    </div>
  );
}
