import type { Metadata } from "next";
import { DecorCircles } from "@/components/brand/DecorCircles";
import { ScriptSeal } from "@/components/brand/ScriptSeal";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PlansGrid } from "@/components/plans/PlansGrid";
import { ComparisonTable } from "@/components/plans/ComparisonTable";
import { FaqSection } from "@/components/sections/FaqSection";
import { brandFaq } from "@/config/faq";

export const metadata: Metadata = {
  title: "Planos para marcas com condição de fundador",
  description:
    "Conheça os planos da Matchy para marcas de beleza e reserve o preço de fundador sem pagar nada agora. A condição fica garantida para o lançamento.",
  alternates: { canonical: "/planos" },
  openGraph: {
    title: "Planos Matchy: reserve a condição de fundador",
    description: "Preço especial de lançamento para marcas que entrarem antes da abertura. Nenhuma cobrança agora.",
    url: "/planos",
  },
};

export default function PlanosPage() {
  const faq = brandFaq.filter((f) =>
    ["Vou pagar algo agora?", "O que é a condição de fundador?", "Quando o app lança?"].includes(f.question),
  );

  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40" aria-labelledby="planos-titulo">
        <DecorCircles
          circles={[
            { color: "blush", size: "26rem", className: "-left-40 -top-24 hidden md:block" },
            { color: "orange", size: "12rem", className: "-right-16 top-40 hidden md:block" },
          ]}
        />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <ScriptSeal className="mb-6">Condição de lançamento</ScriptSeal>
            <h1 id="planos-titulo" className="text-title-1 text-plum">
              Planos com <span className="text-pink">preço de fundador</span>
            </h1>
            <p className="mt-6 text-body text-plum-soft">
              Escolha o plano que faz sentido para o volume de conteúdo da sua marca e reserve agora o preço de lançamento,
              que vai valer enquanto a sua assinatura estiver ativa.
            </p>
          </div>
          <div className="mt-12">
            <PlansGrid />
          </div>
          <div className="mx-auto mt-14 max-w-2xl rounded-card border border-cream-dark bg-white/70 p-6 text-center md:p-8">
            <p className="font-display text-xl text-plum">Nenhuma cobrança agora</p>
            <p className="mt-3 text-body-sm text-plum-soft">
              Ao reservar, você entra na lista de espera com o plano escolhido. Quando o app abrir, a gente avisa por e-mail e a
              condição de fundador vai estar garantida para você decidir com calma se quer assinar.
            </p>
          </div>
        </Container>
      </section>

      <Section tone="blush" labelledBy="comparativo-titulo">
        <SectionHeading
          id="comparativo-titulo"
          eyebrow="Comparativo"
          title="Todos os recursos lado a lado"
          className="mb-10"
        />
        <ComparisonTable />
        <p className="mt-4 text-sm text-plum-soft md:hidden">Arraste a tabela para o lado para ver todos os planos.</p>
        <div className="mt-10">
          <Button href="/marcas#lista" variant="secondary" event="click_entrar_lista" eventParams={{ origem: "planos_comparativo" }}>
            Ainda em dúvida? Entre na lista sem escolher plano
          </Button>
        </div>
      </Section>

      <FaqSection items={faq} title="Sobre a condição de fundador" />
    </>
  );
}
