import { cn } from "@/lib/cn";

type Tone = "cream" | "white" | "blush" | "plum" | "pink";

const tones: Record<Tone, string> = {
  cream: "bg-cream border border-cream-dark",
  white: "bg-white/70 border border-cream-dark",
  blush: "bg-blush-soft border border-blush",
  plum: "bg-plum text-cream",
  pink: "bg-pink text-cream",
};

export function Card({
  tone = "white",
  className,
  children,
  as: Tag = "div",
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
  as?: "div" | "li" | "article";
}) {
  return <Tag className={cn("rounded-card p-7 md:p-8", tones[tone], className)}>{children}</Tag>;
}
