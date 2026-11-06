import type { Metadata } from "next";
import { Suspense } from "react";
import { DecorCircles } from "@/components/brand/DecorCircles";
import { ScriptSeal } from "@/components/brand/ScriptSeal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Badge } from "@/components/ui/Badge";
import { CreatorMatchCard } from "@/components/mockups/CreatorMatchCard";
import { MatchScoreRing } from "@/components/mockups/MatchScoreRing";
import { PhoneFrame } from "@/components/mockups/PhoneFrame";
import { StepsSection } from "@/components/sections/StepsSection";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";
import { FaqSection } from "@/components/sections/FaqSection";
import { FormFallback, WaitlistSection } from "@/components/sections/WaitlistSection";
import { PlansPreview } from "@/components/plans/PlansPreview";
import { BrandWaitlistForm } from "@/components/forms/BrandWaitlistForm";
import { brandFaq } from "@/config/faq";

export const metadata: Metadata = {
  title: "Para marcas: creators UGC alinhados aos valores da sua marca",
  description:
    "A Matchy vai encontrar nano e micro creators (criadores de conteúdo UGC) compatíveis com os valores, o tom e a estética da sua marca, com contrato e pagamento gerenciados. Garanta a condição de fundador.",
  alternates: { canonical: "/marcas" },
  openGraph: {
    title: "Matchy para marcas: UGC autêntico com score de compatibilidade",
    description:
      "Candidaturas ranqueadas por match, contrato, prazo e pagamento gerenciados. Reserve a condição de fundador sem pagar nada agora.",
    url: "/marcas",
  },
};

const steps = [
  {
    title: "Publique o briefing",
    text: "Descreva o produto, as entregas, o prazo e o cachê em um briefing guiado que leva poucos minutos para preencher.",
  },
  {
    title: "Receba candidaturas ranqueadas",
    text: "Os perfis interessados vão chegar ordenados pelo score de compatibilidade com a sua marca, com portfólio e avaliações à vista.",
  },
  {
    title: "Dê match com um swipe",
    text: "Deslize para a direita nos creators que fazem sentido e monte o casting da campanha em minutos em vez de dias.",
  },
  {
    title: "Receba o conteúdo pronto",
    text: "Contrato, prazo e pagamento vão ser gerenciados pela Matchy. Você aprova a entrega e o conteúdo fica disponível para usar.",
  },
];

const benefits = [
  {
    icon: "∞",
    title: "UGC autêntico em escala",
    text: "Vários conteúdos por mês com creators que já falam como a sua marca, sem perder a naturalidade que faz o UGC converter.",
  },
  {
    icon: "✓",
    title: "Processo formalizado",
    text: "Contrato padrão, direito de uso, prazos e nota de cada job organizados em um só lugar para o jurídico e o financeiro.",
  },
  {
    icon: "◷",
    title: "Menos tempo prospectando",
    text: "Em vez de garimpar perfis e trocar dezenas de directs, a sua equipe vai receber candidaturas já filtradas por afinidade.",
  },
  {
    icon: "★",
    title: "Avaliação pós-job",
    text: "Cada entrega gera uma avaliação que alimenta o score e ajuda a sua marca a repetir as parcerias que funcionaram.",
  },
];

export default function MarcasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40" aria-labelledby="hero-marcas">
        <DecorCircles
          circles={[
            { color: "blush", size: "20rem", className: "right-10 top-24 hidden lg:block" },
            { color: "orange", size: "10rem", className: "right-[28rem] bottom-10 hidden xl:block" },
            { color: "pink", size: "5rem", className: "bottom-5 left-8 hidden md:block" },
          ]}
        />
        <Container className="relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="text-eyebrow mb-5 text-pink-ink">Para marcas</p>
            <h1 id="hero-marcas" className="text-title-1 text-plum">
              Creators que combinam com os <span className="text-pink">valores e a estética</span> da sua marca
            </h1>
            <p className="mt-6 max-w-xl text-body text-plum-soft">
              A Matchy vai cruzar o que a sua marca acredita, como ela fala e como ela aparece com o perfil de cada creator
              de UGC, para entregar candidaturas ranqueadas por compatibilidade e conteúdo que parece ter sido feito em casa.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/planos" size="lg" event="click_reservar_fundador" eventParams={{ origem: "hero_marcas" }}>
                Garantir condição de fundador
              </Button>
              <Button href="#lista" size="lg" variant="secondary" event="click_entrar_lista" eventParams={{ origem: "hero_marcas" }}>
                Entrar na lista de espera
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <CreatorMatchCard className="relative" />
          </div>
        </Container>
      </section>

      {/* Problema */}
      <Section tone="plum" labelledBy="problema-titulo">
        <DecorCircles circles={[{ color: "pink", size: "6rem", className: "bottom-8 left-8 hidden lg:block" }]} />
        <div className="relative grid gap-12 lg:grid-cols-2">
          <SectionHeading
            id="problema-titulo"
            tone="light"
            eyebrow="O problema"
            title="Seguidores não dizem se o conteúdo vai ter a cara da sua marca"
          />
          <div className="space-y-5 text-body text-cream/90">
            <p>
              A maior parte das buscas por creators ainda começa por alcance e engajamento, e esses números ajudam a medir
              audiência, mas dizem pouco sobre o que importa no UGC: se a pessoa acredita no mesmo que a sua marca, se o jeito
              dela falar conversa com o seu público e se a estética do vídeo cabe no seu feed.
            </p>
            <p>
              O resultado aparece em retrabalho, roteiros refeitos, conteúdo engavetado e semanas de prospecção para cada
              campanha. A Matchy nasceu para resolver essa parte que nenhuma planilha de métricas resolve.
            </p>
          </div>
        </div>
      </Section>

      {/* Diferencial */}
      <Section labelledBy="diferencial-marcas">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              id="diferencial-marcas"
              eyebrow="O diferencial"
              title={<>Um <span className="text-pink">score de compatibilidade</span> para cada creator</>}
              intro="Cada candidatura vai chegar com uma porcentagem de match calculada a partir de três dimensões que a sua marca define no cadastro. Você continua vendo seguidores e engajamento, só que agora ao lado de um número que mostra afinidade real."
            />
            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { k: "Valores", v: "O que a marca e o creator defendem" },
                { k: "Tom", v: "Como cada uma conversa com o público" },
                { k: "Estética", v: "Luz, cor, edição e enquadramento" },
              ].map((d) => (
                <div key={d.k} className="rounded-card border border-cream-dark bg-white/70 p-5">
                  <dt className="font-display text-lg text-plum">{d.k}</dt>
                  <dd className="mt-1 text-sm text-plum-soft">{d.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <FadeIn className="relative flex justify-center">
            <span aria-hidden="true" className="absolute left-0 top-8 h-56 w-56 rounded-full bg-orange" />
            <div className="relative rounded-card-lg border border-cream-dark bg-cream p-8 shadow-soft">
              <MatchScoreRing value={92} size={180} />
              <p className="mt-5 max-w-[14rem] text-center text-body-sm text-plum-soft">
                Compatibilidade de <strong className="text-plum">@biamakes</strong> com a campanha de blush líquido
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Como funciona */}
      <Section tone="blush" labelledBy="como-funciona-titulo">
        <StepsSection title="Do briefing ao conteúdo aprovado" steps={steps} />
      </Section>

      {/* Benefícios */}
      <Section tone="plum" labelledBy="beneficios-marcas">
        <SectionHeading
          id="beneficios-marcas"
          tone="light"
          eyebrow="Benefícios"
          title="Mais conteúdo que converte com menos operação"
          className="mb-12"
        />
        <BenefitsGrid items={benefits} />
      </Section>

      {/* Mockup do app */}
      <Section labelledBy="app-marcas">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              id="app-marcas"
              eyebrow="Uma prévia do app"
              title="O casting da campanha na palma da mão"
              intro="No app, a sua equipe vai ver cada candidata em um card com foto, nicho, cidade, afinidades e o score de match em destaque. Um swipe para a direita aprova, e a Matchy cuida do contrato e do cronograma a partir dali."
            />
          </div>
          <div className="relative">
            <ScriptSeal className="absolute -top-4 left-4 z-30 sm:left-20">Em breve</ScriptSeal>
            <PhoneFrame>
              <div className="px-4 pb-6 pt-2">
                <p className="text-center font-display text-xl font-extrabold text-pink">Matchy<span className="text-orange">.</span></p>
                <p className="mt-1 text-center text-xs font-semibold uppercase tracking-[0.18em] text-plum-soft">
                  Blush líquido · 14 candidaturas
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    { n: "Bia Martins", h: "@biamakes", m: 92 },
                    { n: "Luana Reis", h: "@luareis.skin", m: 87 },
                    { n: "Rafa Lima", h: "@rafalima.ugc", m: 81 },
                  ].map((c) => (
                    <li key={c.h} className="flex items-center gap-3 rounded-2xl border border-cream-dark bg-white p-2.5">
                      <PhotoPlaceholder label="foto" className="h-12 w-12 shrink-0 rounded-xl text-[0.5rem]" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-plum">{c.n}</p>
                        <p className="truncate text-xs text-plum-soft">{c.h}</p>
                      </div>
                      <Badge tone={c.m >= 90 ? "pink" : "orange"} className="text-xs">{c.m}%</Badge>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 rounded-2xl bg-blush-soft px-4 py-3 text-center text-xs font-semibold text-plum">
                  Contrato e pagamento gerenciados pela Matchy
                </p>
              </div>
            </PhoneFrame>
          </div>
        </div>
      </Section>

      {/* Prévia dos planos */}
      <Section labelledBy="planos-previa" className="border-t border-cream-dark">
        <SectionHeading
          id="planos-previa"
          eyebrow="Condição de fundador"
          title="Planos com preço de lançamento"
          intro="As marcas que entrarem antes do lançamento vão manter o preço de fundador enquanto a assinatura estiver ativa. Nada é cobrado agora."
          className="mb-12"
        />
        <PlansPreview />
      </Section>

      {/* Lista de espera */}
      <WaitlistSection
        title="Entre na lista de espera para marcas"
        intro="Conte um pouco sobre a sua marca para a gente preparar o seu acesso. Você vai receber o convite antes da abertura, com a condição de fundador garantida para o plano que escolher."
      >
        <Suspense fallback={<FormFallback />}>
          <BrandWaitlistForm />
        </Suspense>
      </WaitlistSection>

      <FaqSection items={brandFaq} />
    </>
  );
}
