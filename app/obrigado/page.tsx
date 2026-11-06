import type { Metadata } from "next";
import { ThankYou } from "@/components/sections/ThankYou";

// Destino do Stripe Checkout (só é usado com NEXT_PUBLIC_CHECKOUT_ENABLED=true)
export const metadata: Metadata = {
  title: "Assinatura confirmada",
  robots: { index: false, follow: false },
};

export default function ObrigadoCheckoutPage() {
  return (
    <ThankYou
      seal="Tudo certo!"
      title="Assinatura confirmada com preço de fundador"
      intro="O pagamento foi processado e o seu preço de fundador está garantido. Você vai receber o recibo e os próximos passos no e-mail informado no checkout."
      nextSteps={[
        "Confira o e-mail de confirmação com o recibo da assinatura.",
        "Acesse o app com o mesmo e-mail para configurar o perfil da sua marca.",
        "Publique o primeiro briefing e comece a receber candidaturas ranqueadas por match.",
      ]}
      backHref="/"
      backLabel="Voltar para a página inicial"
    />
  );
}
