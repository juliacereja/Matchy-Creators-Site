import { Accordion } from "@/components/ui/Accordion";
import { Section, SectionHeading } from "@/components/ui/Section";
import type { FaqItem } from "@/config/faq";

export function FaqSection({ items, title = "Perguntas frequentes" }: { items: FaqItem[]; title?: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };

  return (
    <Section id="faq" labelledBy="faq-titulo">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <SectionHeading id="faq-titulo" eyebrow="Dúvidas" title={title} intro="Se a sua pergunta não estiver aqui, escreva para a gente pelo e-mail do rodapé." />
        <Accordion items={items} />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Section>
  );
}
