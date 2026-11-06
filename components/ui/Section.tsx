import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Tone = "cream" | "plum" | "pink" | "blush";

const tones: Record<Tone, string> = {
  cream: "bg-cream text-plum",
  plum: "bg-plum text-cream",
  pink: "bg-pink-deep text-cream",
  blush: "bg-blush-soft text-plum",
};

type Props = {
  id?: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  labelledBy?: string;
};

export function Section({ id, tone = "cream", className, containerClassName, children, labelledBy }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("relative overflow-hidden py-20 md:py-28", tones[tone], className)}
    >
      <Container className={cn("relative", containerClassName)}>{children}</Container>
    </section>
  );
}

type HeadingProps = {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

/** Cabeçalho padrão das seções: label em caps, H2 Bootzy e parágrafo de apoio. */
export function SectionHeading({ id, eyebrow, title, intro, align = "left", tone = "dark", className }: HeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className={cn("text-eyebrow mb-4", tone === "dark" ? "text-pink-ink" : "text-blush")}>{eyebrow}</p>
      )}
      <h2 id={id} className="text-title-2">
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-5 text-body", tone === "dark" ? "text-plum-soft" : "text-cream/90")}>{intro}</p>
      )}
    </div>
  );
}
