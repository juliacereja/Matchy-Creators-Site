import { Section } from "@/components/ui/Section";
import { ScriptSeal } from "@/components/brand/ScriptSeal";

/** Bloco que envolve o formulário de lista de espera, com âncora #lista. */
export function WaitlistSection({
  title,
  intro,
  children,
  aside,
}: {
  title: React.ReactNode;
  intro: React.ReactNode;
  children: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <Section id="lista" tone="blush" labelledBy="lista-titulo">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
        <div>
          <ScriptSeal tone="pink" className="mb-6">lista vip</ScriptSeal>
          <h2 id="lista-titulo" className="text-title-2 text-plum">
            {title}
          </h2>
          <p className="mt-5 text-body text-plum-soft">{intro}</p>
          {aside}
        </div>
        <div className="rounded-card-lg border border-cream-dark bg-cream p-6 shadow-soft sm:p-10">{children}</div>
      </div>
    </Section>
  );
}

export function FormFallback() {
  return <div aria-hidden="true" className="h-[40rem] animate-pulse rounded-2xl bg-cream-dark/40" />;
}
