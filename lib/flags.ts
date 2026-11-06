/**
 * Liga o checkout do Stripe. Com false (padrão), todos os botões de plano
 * levam ao formulário da lista de espera de marcas.
 */
export const CHECKOUT_ENABLED = process.env.NEXT_PUBLIC_CHECKOUT_ENABLED === "true";
