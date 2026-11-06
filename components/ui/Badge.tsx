import { cn } from "@/lib/cn";

type Tone = "orange" | "pink" | "blush" | "plum" | "cream";

const tones: Record<Tone, string> = {
  orange: "bg-orange text-plum",
  pink: "bg-pink-deep text-cream",
  blush: "bg-blush text-plum",
  plum: "bg-plum text-blush",
  cream: "bg-cream text-plum border border-cream-dark",
};

export function Badge({
  tone = "orange",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold leading-5",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
