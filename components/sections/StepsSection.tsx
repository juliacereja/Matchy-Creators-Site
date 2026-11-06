import { FadeIn } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

export type Step = { title: string; text: string };

export function StepsSection({
  eyebrow = "Como vai funcionar",
  title,
  intro,
  steps,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  steps: Step[];
  className?: string;
}) {
  return (
    <div className={className}>
      <SectionHeading id="como-funciona-titulo" eyebrow={eyebrow} title={title} intro={intro} />
      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <FadeIn as="li" key={s.title} delay={i * 0.08} className="rounded-card border border-cream-dark bg-white/70 p-7">
            <span
              aria-hidden="true"
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-2xl font-display text-2xl font-extrabold",
                i === steps.length - 1 ? "bg-pink text-cream" : "bg-blush text-plum",
              )}
            >
              {i + 1}
            </span>
            <h3 className="mt-6 font-display text-xl leading-7 text-plum">
              <span className="sr-only">Passo {i + 1}: </span>
              {s.title}
            </h3>
            <p className="mt-3 text-body-sm text-plum-soft">{s.text}</p>
          </FadeIn>
        ))}
      </ol>
    </div>
  );
}
