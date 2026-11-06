import type { Metadata } from "next";
import { ThankYou } from "@/components/sections/ThankYou";

export const metadata: Metadata = {
  title: "Sua marca está na lista",
  description: "Cadastro confirmado na lista de espera de marcas da Matchy.",
  robots: { index: false, follow: false },
};

export default function ObrigadoMarcaPage() {
  return (
    <ThankYou
      title="Sua marca está na lista de fundadoras"
      intro="Recebemos o seu cadastro e a condição de fundador do plano escolhido já está reservada para o seu e-mail. Nenhuma cobrança foi feita e nenhuma vai ser feita sem a sua confirmação."
      nextSteps={[
        "Nos próximos dias, a equipe da Matchy pode entrar em contato para entender melhor as necessidades de conteúdo da sua marca.",
        "Antes da abertura, você vai receber por e-mail a data de lançamento e um convite de acesso antecipado.",
        "No lançamento, é só criar a conta, publicar o primeiro briefing e decidir com calma se quer assinar com o preço de fundador.",
      ]}
      backHref="/marcas"
      backLabel="Voltar para a página de marcas"
    />
  );
}
