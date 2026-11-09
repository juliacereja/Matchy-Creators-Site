import type { Metadata } from "next";
import { DecorCircles } from "@/components/brand/DecorCircles";
import { ScriptSeal } from "@/components/brand/ScriptSeal";
import { AudienceChoice } from "@/components/sections/AudienceChoice";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { MatchScoreRing } from "@/components/mockups/MatchScoreRing";
import { CreatorMatchCard } from "@/components/mockups/CreatorMatchCard";

export const metadata: Metadata = {
  title: { absolute: "Matchy | Onde marcas e criadores de conteúdo se encontram" },
  description:
    "A Matchy vai conectar marcas a nano e micro creators (criadores de conteúdo UGC) por valores, tom e estética em comum. Entre na lista de espera e garanta acesso antecipado.",
  alternates: { canonical: "/" },
};

const pillars = [
  {
    title: "Valores",
    text: "Sustentabilidade, inclusão, rotina real, ciência na formulação: a marca e o creator contam o que defendem, e a Matchy procura quem acredita nas mesmas coisas.",
  },
  {
    title: "Tom de comunicação",
    text: "Divertido, técnico, acolhedor ou direto ao ponto. Quando o jeito de falar combina, o conteúdo soa natural para quem assiste e para quem paga.",
  },
  {
    title: "Estética",
    text: "Paleta, luz, enquadramento e edição entram no cálculo para que o vídeo do creator pareça ter nascido dentro do feed da marca.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40" aria-labelledby="hero-titulo">
        <DecorCircles
          circles={[
            { color: "pink", size: "16rem", className: "right-10 top-28 hidden lg:block" },
            { color: "orange", size: "5rem", className: "right-[20rem] top-[22rem] hidden xl:block" },
            { color: "blush", size: "5rem", className: "right-5 top-24 lg:hidden" },
            { color: "blush", size: "4rem", className: "bottom-5 left-8 hidden md:block" },
          ]}
        />
        <Container className="relative">
          <div className="max-w-3xl">
            <ScriptSeal className="mb-6">Em breve</ScriptSeal>
            <h1 id="hero-titulo" className="text-title-1 text-plum">
              Onde marcas e creators{" "}
              <span className="text-pink">encontram o match perfeito</span>
            </h1>
            <p className="mt-6 max-w-xl text-body text-plum-soft">
              A Matchy vai aproximar marcas e creators de UGC pelo que faz uma parceria dar certo de verdade, que é ter
              valores, tom e estética em comum. Escolha o seu lado e garanta o seu lugar antes do lançamento.
            </p>
          </div>
          <AudienceChoice className="mt-12 md:mt-14" />
        </Container>
      </section>

      {/* Como funciona o match */}
      <Section labelledBy="match-titulo">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeading
              id="match-titulo"
              eyebrow="Como funciona o match"
              title="Um score que mostra quem combina com quem"
              intro="Marcas e creators vão responder a um questionário rápido sobre o que acreditam, como falam e como gostam que o conteúdo pareça. A Matchy cruza essas respostas e transforma tudo em uma porcentagem de compatibilidade fácil de ler."
            />
            <ul className="mt-10 space-y-4">
              {pillars.map((p, i) => (
                <FadeIn as="li" key={p.title} delay={i * 0.08} className="flex gap-5 rounded-card border border-cream-dark bg-white/70 p-6">
                  <span aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 rounded-full bg-orange" />
                  <div>
                    <h3 className="font-display text-xl text-plum">{p.title}</h3>
                    <p className="mt-2 text-body-sm text-plum-soft">{p.text}</p>
                  </div>
                </FadeIn>
              ))}
            </ul>
          </div>
          <FadeIn className="relative flex justify-center">
            <span aria-hidden="true" className="absolute right-0 top-10 h-64 w-64 rounded-full bg-blush" />
            <div className="relative">
              <CreatorMatchCard />
              <div className="absolute -right-6 -top-8 hidden rounded-full bg-white p-3 shadow-soft sm:block">
                <MatchScoreRing value={92} size={120} />
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Diferencial */}
      <Section tone="plum" labelledBy="diferencial-titulo">
        <DecorCircles circles={[{ color: "pink", size: "6rem", className: "bottom-8 left-8 hidden lg:block" }]} />
        <div className="relative grid gap-12 lg:grid-cols-2">
          <SectionHeading
            id="diferencial-titulo"
            tone="light"
            eyebrow="O diferencial"
            title={<>Seguidores contam uma parte da história. O match conta o resto.</>}
            intro="Hoje a maioria das parcerias começa por uma planilha de números, e muitas terminam com um conteúdo que não parece com a marca. A Matchy vai inverter essa ordem: primeiro a afinidade, depois o alcance."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-card bg-cream/5 p-7 ring-1 ring-cream/15">
              <p className="text-eyebrow text-blush">Para marcas</p>
              <p className="mt-4 text-body-sm text-cream/90">
                Candidaturas chegando já ranqueadas por compatibilidade, com contrato, prazo e pagamento resolvidos dentro
                da plataforma, para a equipe gastar tempo com criatividade em vez de prospecção.
              </p>
              <Button href="/marcas" variant="cream" className="mt-6" event="click_sou_marca" eventParams={{ origem: "home_diferencial" }}>
                Sou marca
              </Button>
            </div>
            <div className="rounded-card bg-cream/5 p-7 ring-1 ring-cream/15">
              <p className="text-eyebrow text-blush">Para creators</p>
              <p className="mt-4 text-body-sm text-cream/90">
                Campanhas abertas mostrando o seu percentual de match, candidatura em um toque e pagamento garantido, para
                você crescer pelo seu estilo e não só pelo tamanho do perfil.
              </p>
              <Button href="/creators" className="mt-6" event="click_sou_creator" eventParams={{ origem: "home_diferencial" }}>
                Sou creator
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA final */}
      <Section labelledBy="cta-home-titulo" className="text-center">
        <div className="mx-auto max-w-2xl">
          <h2 id="cta-home-titulo" className="text-title-2 text-plum">
            As primeiras vagas vão para <br />
            <span className="whitespace-nowrap">
              quem chegar <span className="text-pink">primeiro</span>
            </span>
          </h2>
          <p className="mt-5 text-body text-plum-soft">
            Marcas fundadoras vão garantir um preço especial, e creators da lista vão montar o perfil
            antes de todo mundo para aparecer nas primeiras campanhas.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/planos" size="lg" event="click_ver_planos" eventParams={{ origem: "home_cta" }}>
              Ver planos para marcas
            </Button>
            <Button href="/creators#lista" size="lg" variant="secondary" event="click_sou_creator" eventParams={{ origem: "home_cta" }}>
              Entrar como creator
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
