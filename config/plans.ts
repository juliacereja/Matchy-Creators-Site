/**
 * PLACEHOLDERS: edite nomes, preços, limites e recursos aqui.
 * Os preços são mensais. No ciclo anual, informe o valor equivalente por mês
 * (o total cobrado no ano é calculado como valor x 12).
 */

export type BillingCycle = "mensal" | "anual";

export type Plan = {
  id: "essencial" | "crescimento" | "escala";
  name: string;
  tagline: string;
  fullPrice: Record<BillingCycle, number>;
  founderPrice: Record<BillingCycle, number>;
  activeCampaigns: number | "ilimitadas";
  creatorsPerCampaign: number;
  features: string[];
  highlighted?: boolean;
  /** IDs de preço do Stripe, lidos do ambiente. Só usados com o checkout ligado. */
  stripePriceEnv: Record<BillingCycle, string>;
};

export const plans: Plan[] = [
  {
    id: "essencial",
    name: "Essencial",
    tagline: "Para marcas que vão testar UGC com as primeiras campanhas.",
    fullPrice: { mensal: 397, anual: 330 },
    founderPrice: { mensal: 247, anual: 197 },
    activeCampaigns: 2,
    creatorsPerCampaign: 5,
    features: [
      "Score de compatibilidade em cada candidatura",
      "Briefing guiado de campanha",
      "Contrato e pagamento gerenciados pela Matchy",
      "Avaliação pós-job",
    ],
    stripePriceEnv: {
      mensal: "STRIPE_PRICE_ESSENCIAL_MENSAL",
      anual: "STRIPE_PRICE_ESSENCIAL_ANUAL",
    },
  },
  {
    id: "crescimento",
    name: "Crescimento",
    tagline: "Para marcas que vão produzir conteúdo todo mês, com constância.",
    fullPrice: { mensal: 797, anual: 664 },
    founderPrice: { mensal: 497, anual: 397 },
    activeCampaigns: 6,
    creatorsPerCampaign: 15,
    highlighted: true,
    features: [
      "Tudo do Essencial",
      "Filtros avançados de estética e tom",
      "Direito de uso do conteúdo estendido",
      "Relatório de desempenho por campanha",
      "Suporte prioritário",
    ],
    stripePriceEnv: {
      mensal: "STRIPE_PRICE_CRESCIMENTO_MENSAL",
      anual: "STRIPE_PRICE_CRESCIMENTO_ANUAL",
    },
  },
  {
    id: "escala",
    name: "Escala",
    tagline: "Para marcas e agências que vão rodar várias frentes ao mesmo tempo.",
    fullPrice: { mensal: 1597, anual: 1330 },
    founderPrice: { mensal: 997, anual: 797 },
    activeCampaigns: "ilimitadas",
    creatorsPerCampaign: 40,
    features: [
      "Tudo do Crescimento",
      "Múltiplos usuários e marcas",
      "Gerente de conta dedicado",
      "Curadoria manual de criadoras",
      "Integração via API",
    ],
    stripePriceEnv: {
      mensal: "STRIPE_PRICE_ESCALA_MENSAL",
      anual: "STRIPE_PRICE_ESCALA_ANUAL",
    },
  },
];

export const planIds = plans.map((p) => p.id) as [Plan["id"], ...Plan["id"][]];

export function getPlan(id: string | null | undefined) {
  return plans.find((p) => p.id === id);
}

/** Linhas da tabela comparativa. true/false vira ícone; string aparece como texto. */
export const comparisonRows: { label: string; values: Record<Plan["id"], boolean | string> }[] = [
  {
    label: "Campanhas ativas",
    values: { essencial: "2", crescimento: "6", escala: "Ilimitadas" },
  },
  {
    label: "Criadoras por campanha",
    values: { essencial: "5", crescimento: "15", escala: "40" },
  },
  {
    label: "Score de compatibilidade",
    values: { essencial: true, crescimento: true, escala: true },
  },
  {
    label: "Contrato, prazo e pagamento gerenciados",
    values: { essencial: true, crescimento: true, escala: true },
  },
  {
    label: "Avaliação pós-job",
    values: { essencial: true, crescimento: true, escala: true },
  },
  {
    label: "Filtros avançados de estética e tom",
    values: { essencial: false, crescimento: true, escala: true },
  },
  {
    label: "Direito de uso estendido",
    values: { essencial: false, crescimento: true, escala: true },
  },
  {
    label: "Relatório por campanha",
    values: { essencial: false, crescimento: true, escala: true },
  },
  {
    label: "Múltiplos usuários e marcas",
    values: { essencial: false, crescimento: false, escala: true },
  },
  {
    label: "Gerente de conta dedicado",
    values: { essencial: false, crescimento: false, escala: true },
  },
  {
    label: "Suporte",
    values: { essencial: "E-mail", crescimento: "Prioritário", escala: "Dedicado" },
  },
];

export const formatBRL = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
