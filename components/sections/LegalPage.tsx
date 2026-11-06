import { Container } from "@/components/ui/Container";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <section className="pb-24 pt-32 md:pt-40" aria-labelledby="legal-titulo">
      <Container>
        <article className="mx-auto max-w-3xl">
          <p className="text-eyebrow text-pink-ink">Atualizado em {updated}</p>
          <h1 id="legal-titulo" className="text-title-2 mt-4 text-plum">
            {title}
          </h1>
          <p className="mt-6 rounded-2xl bg-blush-soft px-5 py-4 text-sm font-semibold text-plum">
            Texto provisório. Revise com a assessoria jurídica antes de publicar.
          </p>
          <div className="mt-10 space-y-6 text-body text-plum-soft [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-plum [&_a]:font-semibold [&_a]:text-pink-ink [&_a]:underline">
            {children}
          </div>
        </article>
      </Container>
    </section>
  );
}
