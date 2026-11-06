import { NextResponse } from "next/server";
import { z } from "zod";
import { CHECKOUT_ENABLED } from "@/lib/flags";
import { getStripe } from "@/lib/stripe";
import { getPlan, planIds } from "@/config/plans";
import { site } from "@/config/site";

const bodySchema = z.object({
  planId: z.enum(planIds),
  cycle: z.enum(["mensal", "anual"]),
});

/**
 * Cria uma sessão do Stripe Checkout para assinatura.
 * Fica bloqueada enquanto NEXT_PUBLIC_CHECKOUT_ENABLED não for "true".
 */
export async function POST(req: Request) {
  if (!CHECKOUT_ENABLED) {
    return NextResponse.json({ message: "O checkout ainda não está disponível." }, { status: 403 });
  }

  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json({ message: "Pagamento não configurado." }, { status: 503 });
  }

  const parsed = bodySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ message: "Plano inválido." }, { status: 422 });
  }

  const plan = getPlan(parsed.data.planId)!;
  const priceId = process.env[plan.stripePriceEnv[parsed.data.cycle]];
  if (!priceId) {
    return NextResponse.json({ message: "Preço do plano não configurado." }, { status: 503 });
  }

  const origin = req.headers.get("origin") ?? site.url;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      locale: "pt-BR",
      allow_promotion_codes: true,
      billing_address_collection: "required",
      tax_id_collection: { enabled: true }, // coleta CNPJ
      // PIX E BOLETO: ative os métodos em Stripe Dashboard > Settings > Payment methods
      // e acrescente "boleto" e/ou "pix" na lista abaixo. Confira no painel quais métodos
      // aceitam cobrança recorrente na sua conta; para Pix pode ser preciso usar
      // mode: "payment" com cobrança avulsa (por exemplo, só no plano anual).
      allowed_payment_method_types: ["card"],
      metadata: { plan_id: plan.id, cycle: parsed.data.cycle, founder: "true" },
      subscription_data: { metadata: { plan_id: plan.id, cycle: parsed.data.cycle, founder: "true" } },
      success_url: `${origin}/obrigado?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/planos`,
    });
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[checkout] erro ao criar sessão", err);
    return NextResponse.json({ message: "Não foi possível iniciar o pagamento." }, { status: 500 });
  }
}
