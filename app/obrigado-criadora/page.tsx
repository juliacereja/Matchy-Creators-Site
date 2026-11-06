import type { Metadata } from "next";
import { ThankYou } from "@/components/sections/ThankYou";

export const metadata: Metadata = {
  title: "Você está na lista",
  description: "Cadastro confirmado na lista de espera de criadoras da Matchy.",
  robots: { index: false, follow: false },
};

export default function ObrigadoCriadoraPage() {
  return (
    <ThankYou
      title="Pronto, o seu lugar está garantido"
      intro="Que bom ter você com a gente! O seu cadastro entrou na lista de espera e você vai estar entre as primeiras criadoras a montar o perfil na Matchy."
      nextSteps={[
        "Fique de olho no seu e-mail: é por lá que vai chegar o convite de acesso antecipado.",
        "Assim que o app abrir, você cria o perfil e responde ao questionário de estilo, que é o que vai definir os seus matches.",
        "Com o perfil pronto, as primeiras campanhas vão aparecer com o seu percentual de compatibilidade para você se candidatar.",
      ]}
      backHref="/criadoras"
      backLabel="Voltar para a página de criadoras"
    />
  );
}
