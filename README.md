# Matchy: landing page e listas de espera

Next.js (App Router) + TypeScript + Tailwind + Framer Motion + Supabase. Pronto para a Vercel.

```bash
npm install
cp .env.example .env.local   # preencha as chaves
npm run dev
```

## Tipografia

| Fonte | Classe | Uso |
| --- | --- | --- |
| Bootzy TM (local, 700 e 800) | `font-display` | Só títulos grandes, logo e números de destaque. Tracking +2%. |
| Outfit (Google Fonts, 300 a 700) | `font-sans` | Todo o resto: corpo, botões, labels. |
| Rousie (local, `public/fonts/Rousie.woff2`) | `font-script` | Fonte script do site. Só em selos (componente `ScriptSeal`) ou numa palavra de destaque isolada, sempre em minúsculas, sem caixa alta e sem letter-spacing, em negrito e maior que o label em Outfit (28px contra 15px). Nunca em parágrafo ou UI. |

## Linguagem

Use "creators" (e "creator" no singular) para falar de quem produz conteúdo, porque o termo serve para qualquer gênero. Prefira frases sem artigo ou falando direto com "você", sem adjetivos de gênero. A expressão "criadores de conteúdo" fica só nos títulos e descrições de SEO, onde ajuda na busca. As páginas antigas `/criadoras` e `/obrigado-criadora` redirecionam para `/creators` e `/obrigado-creator`.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Planos (nomes, preços, limites, recursos, tabela comparativa) | `config/plans.ts` |
| Redes sociais e e-mail | `config/links.ts`, `config/site.ts` |
| Perguntas frequentes | `config/faq.ts` |
| Cores, fontes e escala tipográfica | `tailwind.config.ts`, `app/fonts.ts` |
| Opções dos formulários e regra do e-mail corporativo | `lib/validation.ts` |
| Eventos de analytics | `lib/analytics.ts` |

## Supabase

1. Crie um projeto em https://supabase.com (região São Paulo, `sa-east-1`).
2. Abra **SQL Editor > New query**, cole o conteúdo de `supabase/schema.sql` e clique em **Run**.
3. Em **Project Settings > API**, copie a **Project URL** e a chave **anon public**.
4. Preencha `SUPABASE_URL` e `SUPABASE_ANON_KEY` no `.env.local`.
5. Os cadastros aparecem em **Table Editor** (`waitlist_brands` e `waitlist_creators`). Com a chave anon ninguém consegue ler os dados, só inserir.

## Vercel

1. Suba o projeto para um repositório no GitHub.
2. Na Vercel, clique em **Add New > Project** e importe o repositório (o framework é detectado sozinho).
3. Em **Settings > Environment Variables**, cadastre todas as variáveis do `.env.example`, com `NEXT_PUBLIC_SITE_URL` apontando para o domínio final e `NEXT_PUBLIC_CHECKOUT_ENABLED=false`.
4. Faça o deploy. Sempre que mudar uma variável `NEXT_PUBLIC_*`, faça um novo deploy, porque elas entram no build.

## Ligar o checkout no lançamento

1. No Stripe, crie os produtos e os preços recorrentes (mensal e anual) de cada plano e copie os `price_...`.
2. Preencha `STRIPE_SECRET_KEY` e as variáveis `STRIPE_PRICE_*`.
3. Mude `NEXT_PUBLIC_CHECKOUT_ENABLED=true` e faça um novo deploy.
4. Pix e boleto: veja o comentário em `app/api/checkout/route.ts`.

## Pendências antes de publicar

- **Placeholders**: preços e recursos (`config/plans.ts`), fotos (componente `PhotoPlaceholder`), campanhas e creators fictícios dos mockups (`components/mockups/`), textos de termos e privacidade (revisão jurídica).
- **Acessibilidade de cor**: `#E5215F` com texto creme pequeno dá contraste 4,1:1 (o AA pede 4,5:1). Por isso os botões usam texto bold de 19px, as superfícies magenta com texto pequeno usam `pink-deep` (#D61C56) e o texto magenta pequeno sobre creme usa `pink-ink` (#B8174C). Laranja leva texto plum, porque creme sobre laranja não passa no AA.
