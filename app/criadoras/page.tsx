import type { Metadata } from "next";
import { DecorCircles } from "@/components/brand/DecorCircles";
import { ScriptSeal } from "@/components/brand/ScriptSeal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { HeartIcon, XIcon } from "@/components/ui/icons";
import { SwipeDeck } from "@/components/mockups/SwipeDeck";
import { PhoneFrame } from "@/components/mockups/PhoneFrame";
import { CampaignCard } from "@/components/mockups/CampaignCard";
import { demoCampaigns } from "@/components/mockups/campaigns";
import { StepsSection } from "@/components/sections/StepsSection";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";
import { FaqSection } from "@/components/sections/FaqSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { CreatorWaitlistForm } from "@/components/forms/CreatorWaitlistForm";
import { creatorFaq } from "@/config/faq";

export const metadata: Metadata = {
  title: "Para criadoras: feche collabs com marcas que combinam com você",
  description:
    "Na Matchy, o que vai contar é o match de estilo e valores com as marcas de beleza, não só o número de seguidores. Entre na lista de espera gratuita para criadoras.",
  alternates: { canonical: "/criadoras" },
  openGraph: {
    title: "Matchy para criadoras: collabs com marcas que combinam com você",
    description:
      "Campanhas de beleza com o seu percentual de match, contrato pronto e pagamento garantido. Entre na lista de espera.",
    url: "/criadoras",
  },
};

const steps = [
  {
    title: "Crie o seu perfil",
    text: "Conte quem você é e responda ao questionário de estilo sobre valores, jeito de falar e estética. Ele vai ser a base de todos os seus matches.",
  },
  {
    title: "Veja as campanhas abertas",
    text: "Cada campanha vai aparecer com o seu percentual de compatibilidade, o valor do cachê, as entregas e o prazo, tudo antes de você decidir.",
  },
  {
    title: "Candidate-se em um toque",
    text: "Gostou? Arraste para a direita e a sua candidatura vai direto para a marca, já ranqueada pelo match. Não curtiu, é só arrastar para a esquerda.",
  },
  {
    title: "Produza, entregue e receba",
    text: "Com o contrato pronto e o pagamento reservado pela marca, você foca no conteúdo. Entrega aprovada, o dinheiro cai na sua carteira.",
  },
];

const benefits = [
  {
    icon: "R$",
    title: "Pagamento garantido",
    text: "A marca reserva o valor antes do job começar, então você produz sabendo que vai receber.",
  },
  {
    icon: "✓",
    title: "Contrato pronto",
    text: "Cada campanha vai vir com contrato claro de entregas, prazos e direito de uso, sem letra miúda.",
  },
  {
    icon: "★",
    title: "Reputação que cresce",
    text: "As avaliações de cada job vão ficar no seu perfil e abrir portas para campanhas maiores.",
  },
  {
    icon: "◎",
    title: "Carteira no app",
    text: "Acompanhe o que entrou, o que está a caminho e transfira para a sua conta quando quiser.",
  },
];

export default function CriadorasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40" aria-labelledby="hero-criadoras">
        <DecorCircles
          circles={[
            { color: "pink", size: "34rem", className: "-right-40 top-24 hidden lg:block" },
            { color: "orange", size: "8rem", className: "right-[30rem] top-28 hidden xl:block" },
            { color: "blush", size: "20rem", className: "-left-32 -bottom-32" },
          ]}
        />
        <Container className="relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="text-eyebrow mb-5 text-pink-ink">Para criadoras de conteúdo</p>
            <h1 id="hero-criadoras" className="text-title-1 text-plum">
              Feche collabs com marcas que <span className="text-pink">combinam com você</span>
            </h1>
            <p className="mt-6 max-w-xl text-body text-plum-soft">
              A Matchy vai mostrar campanhas de beleza escolhidas para o seu estilo, com o percentual de match na tela, contrato
              pronto e pagamento garantido. Você só precisa ser você e criar o conteúdo que já sabe fazer bem.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#lista" size="lg" event="click_entrar_lista" eventParams={{ origem: "hero_criadoras" }}>
                Quero entrar na lista
              </Button>
              <p className="text-sm font-medium text-plum-soft sm:ml-3">Gratuito para criadoras</p>
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <ScriptSeal className="absolute -top-6 left-2 z-10 sm:left-10">Em breve</ScriptSeal>
            <div className="w-full max-w-sm rounded-card-lg bg-cream/80 p-6 pt-10 backdrop-blur-sm sm:px-10">
              <SwipeDeck />
            </div>
          </div>
        </Container>
      </section>

      {/* Dor */}
      <Section tone="plum" labelledBy="dor-titulo">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            id="dor-titulo"
            tone="light"
            eyebrow="A real"
            title="Com poucos seguidores, parece que as marcas nem te enxergam"
            intro="Você manda direct, monta mídia kit, marca a empresa nos stories e mesmo assim a resposta não vem, porque a maioria das marcas ainda filtra criadoras por número antes de olhar o conteúdo. Quem está começando acaba ficando de fora sem ter tido a chance de mostrar o próprio trabalho."
          />
          <FadeIn className="grid grid-cols-3 gap-3">
            {["foto da criadora", "foto da criadora", "foto da criadora"].map((l, i) => (
              <PhotoPlaceholder key={i} label={l} className={`aspect-[3/4] rounded-[1.5rem] text-[0.65rem] ${i === 1 ? "translate-y-6" : ""}`} />
            ))}
          </FadeIn>
        </div>
      </Section>

      {/* Diferencial */}
      <Section labelledBy="diferencial-criadoras">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <FadeIn className="order-2 lg:order-1">
            <div className="rounded-card-lg border border-cream-dark bg-white/70 p-8">
              <p className="text-eyebrow text-pink-ink">O que vai pesar no seu match</p>
              <ul className="mt-6 space-y-5">
                {[
                  { label: "Estilo e estética do seu conteúdo", value: 40 },
                  { label: "Valores que você defende", value: 35 },
                  { label: "Tom de comunicação", value: 25 },
                ].map((item) => (
                  <li key={item.label}>
                    <div className="flex justify-between text-base font-semibold text-plum">
                      <span>{item.label}</span>
                      <span className="font-display text-pink">{item.value}%</span>
                    </div>
                    <div className="mt-2 h-3 rounded-full bg-blush-soft" aria-hidden="true">
                      <div className="h-3 rounded-full bg-pink" style={{ width: `${item.value * 2.2}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-plum-soft">Pesos ilustrativos. O cálculo final vai ser ajustado com os dados do lançamento.</p>
            </div>
          </FadeIn>
          <div className="order-1 lg:order-2">
            <SectionHeading
              id="diferencial-criadoras"
              eyebrow="O diferencial"
              title={<>Aqui o que conta é o <span className="text-pink">match</span> de estilo e valores</>}
              intro="Seguidores continuam aparecendo no seu perfil, mas a Matchy vai colocar na frente o quanto você combina com cada marca. Uma criadora com dois mil seguidores e a estética certa pode ficar no topo da lista de uma campanha, e é exatamente essa chance que a gente quer abrir para você."
            />
          </div>
        </div>
      </Section>

      {/* Como funciona */}
      <Section tone="blush" labelledBy="como-funciona-titulo">
        <StepsSection title="Do perfil ao pagamento em quatro passos" steps={steps} />
      </Section>

      {/* Mockup do app */}
      <Section labelledBy="app-criadoras">
        <DecorCircles circles={[{ color: "orange", size: "18rem", className: "-left-24 bottom-10 hidden md:block" }]} />
        <div className="relative grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <ScriptSeal tone="plum" className="absolute -top-4 right-4 z-30 sm:right-16">Em breve</ScriptSeal>
            <PhoneFrame>
              <div className="px-4 pb-6 pt-2">
                <p className="text-center font-display text-xl font-extrabold text-pink">Matchy.</p>
                <p className="mt-1 text-center text-xs font-semibold uppercase tracking-[0.18em] text-plum-soft">Campanhas para você</p>
                <div className="relative mt-4">
                  <div aria-hidden="true" className="absolute inset-x-3 -bottom-2 h-full rounded-[1.75rem] bg-blush" />
                  <CampaignCard campaign={demoCampaigns[0]} className="relative" />
                </div>
                <div className="mt-5 flex items-center justify-center gap-6" aria-hidden="true">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-cream-dark bg-white text-plum">
                    <XIcon />
                  </span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-pink text-cream shadow-pop">
                    <HeartIcon className="h-6 w-6" />
                  </span>
                </div>
              </div>
            </PhoneFrame>
          </div>
          <div>
            <SectionHeading
              id="app-criadoras"
              eyebrow="Uma prévia do app"
              title="Deslizou para a direita, está concorrendo"
              intro="As campanhas vão aparecer em cards com tudo o que você precisa saber para decidir rápido: marca, entregas, cachê, número de vagas, prazo e o seu percentual de match. Coração para se candidatar, X para passar, sem formulário longo nem proposta para escrever."
            />
            <ul className="mt-8 space-y-3 text-body-sm text-plum">
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pink text-cream"><HeartIcon className="h-4 w-4" /></span>
                Direita: você se candidata e a marca recebe o seu perfil
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-cream-dark bg-white text-plum"><XIcon className="h-4 w-4" /></span>
                Esquerda: a campanha sai da sua lista
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Benefícios */}
      <Section tone="plum" labelledBy="beneficios-criadoras">
        <SectionHeading
          id="beneficios-criadoras"
          tone="light"
          eyebrow="Benefícios"
          title="Tudo o que faltava para você levar o UGC a sério"
          className="mb-12"
        />
        <BenefitsGrid items={benefits} />
      </Section>

      {/* Lista de espera */}
      <WaitlistSection
        title="Garanta o seu perfil antes das primeiras campanhas"
        intro="Quem entrar agora vai receber o convite antes de todo mundo e montar o perfil com calma, para já estar pronta quando as marcas começarem a publicar. É gratuito e leva menos de um minuto."
      >
        <CreatorWaitlistForm />
      </WaitlistSection>

      <FaqSection items={creatorFaq} />
    </>
  );
}
