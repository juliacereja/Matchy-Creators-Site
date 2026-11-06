import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Termos de uso",
  description: "Termos de uso do site e das listas de espera da Matchy.",
  alternates: { canonical: "/termos" },
};

export default function TermosPage() {
  return (
    <LegalPage title="Termos de uso" updated="5 de novembro de 2026">
      <p>
        Ao usar este site e se cadastrar em uma das listas de espera, você concorda com os termos abaixo. O aplicativo da
        Matchy ainda não foi lançado, e os termos completos da plataforma vão ser apresentados no momento da criação da conta.
      </p>
      <h2>Lista de espera</h2>
      <p>
        O cadastro é gratuito e não cria nenhuma obrigação de compra. A entrada na lista não garante uma data específica de
        acesso, que vai ser liberado em ondas a partir do lançamento.
      </p>
      <h2>Condição de fundador</h2>
      <p>
        Marcas que reservarem a condição de fundador vão ter acesso ao preço de lançamento do plano escolhido no momento da
        assinatura, enquanto ela permanecer ativa. Valores, limites e recursos dos planos podem ser ajustados até o lançamento,
        e qualquer mudança vai ser comunicada por e-mail antes de qualquer cobrança.
      </p>
      <h2>Contato</h2>
      <p>
        Dúvidas sobre estes termos podem ser enviadas para <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
