import { z } from "zod";
import { planIds } from "@/config/plans";

export const brandSegments = [
  { value: "maquiagem", label: "Maquiagem" },
  { value: "skincare", label: "Skincare" },
  { value: "cabelo", label: "Cabelo" },
  { value: "perfumaria", label: "Perfumaria" },
  { value: "outro", label: "Outro" },
] as const;

export const ugcVolumes = [
  { value: "1-5", label: "1 a 5 conteúdos" },
  { value: "6-15", label: "6 a 15 conteúdos" },
  { value: "16-30", label: "16 a 30 conteúdos" },
  { value: "31-60", label: "31 a 60 conteúdos" },
  { value: "60+", label: "Mais de 60 conteúdos" },
] as const;

export const creatorNiches = [
  { value: "maquiagem", label: "Maquiagem" },
  { value: "skincare", label: "Skincare" },
  { value: "cabelo", label: "Cabelo" },
  { value: "lifestyle", label: "Lifestyle" },
  { value: "outro", label: "Outro" },
] as const;

export const followerRanges = [
  { value: "ate-1k", label: "Até 1 mil" },
  { value: "1k-10k", label: "1 a 10 mil" },
  { value: "10k-50k", label: "10 a 50 mil" },
  { value: "50k-100k", label: "50 a 100 mil" },
  { value: "100k+", label: "Mais de 100 mil" },
] as const;

export const brazilStates = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA",
  "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO",
] as const;

const values = <T extends readonly { value: string }[]>(list: T) =>
  list.map((i) => i.value) as [T[number]["value"], ...T[number]["value"][]];

/** Mude para false se quiser aceitar marcas pequenas que usam Gmail, Hotmail etc. */
export const REQUIRE_CORPORATE_EMAIL = true;

const freeEmailDomains = [
  "gmail.com", "hotmail.com", "outlook.com", "yahoo.com", "yahoo.com.br",
  "icloud.com", "live.com", "bol.com.br", "uol.com.br",
];

const handle = z
  .string()
  .trim()
  .transform((v) => v.replace(/^@/, "").replace(/^https?:\/\/(www\.)?(instagram|tiktok)\.com\/@?/i, "").replace(/\/$/, ""))
  .pipe(z.string().regex(/^[A-Za-z0-9._]{1,30}$/, "Informe um @ válido, só com letras, números, ponto e underline"));

const optionalHandle = z
  .string()
  .trim()
  .optional()
  .transform((v) => (v ? v : undefined))
  .pipe(handle.optional());

const whatsapp = z
  .string()
  .trim()
  .optional()
  .transform((v) => (v ? v.replace(/\D/g, "") : undefined))
  .refine((v) => !v || (v.length >= 10 && v.length <= 13), "Informe o WhatsApp com DDD");

/** Campos comuns aos dois formulários (atribuição, consentimento e honeypot). */
const meta = {
  consent: z.literal(true, { error: "Você precisa aceitar a política de privacidade" }),
  website_url: z.string().max(0).optional(), // honeypot: precisa chegar vazio
  utm_source: z.string().max(200).optional(),
  utm_medium: z.string().max(200).optional(),
  utm_campaign: z.string().max(200).optional(),
  landing_page: z.string().max(300).optional(),
  source_page: z.string().max(300).optional(),
};

export const brandSchema = z.object({
  brand_name: z.string().trim().min(2, "Informe o nome da marca").max(120),
  brand_site: z.string().trim().min(3, "Informe o site ou o Instagram da marca").max(200),
  contact_name: z.string().trim().min(2, "Informe o seu nome").max(120),
  contact_role: z.string().trim().min(2, "Informe o seu cargo").max(120),
  email: z
    .email("Informe um e-mail válido")
    .trim()
    .toLowerCase()
    .max(200)
    .refine(
      (v) => !REQUIRE_CORPORATE_EMAIL || !freeEmailDomains.includes(v.split("@")[1] ?? ""),
      "Use o e-mail corporativo da marca",
    ),
  whatsapp,
  segment: z.enum(values(brandSegments), { error: "Escolha o segmento" }),
  plan_interest: z.enum([...planIds, "indefinido"], { error: "Escolha um plano" }),
  ugc_volume: z.enum(values(ugcVolumes), { error: "Escolha uma faixa" }),
  ...meta,
});

export const creatorSchema = z.object({
  name: z.string().trim().min(2, "Informe o seu nome").max(120),
  email: z.email("Informe um e-mail válido").trim().toLowerCase().max(200),
  instagram: handle,
  tiktok: optionalHandle,
  niche: z.enum(values(creatorNiches), { error: "Escolha o seu nicho" }),
  followers_range: z.enum(values(followerRanges), { error: "Escolha a sua faixa" }),
  city: z.string().trim().min(2, "Informe a sua cidade").max(120),
  state: z.enum(brazilStates, { error: "Escolha o estado" }),
  ...meta,
});

export type BrandInput = z.input<typeof brandSchema>;
export type CreatorInput = z.input<typeof creatorSchema>;
