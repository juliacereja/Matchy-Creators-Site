import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Como a Matchy coleta, usa e protege os dados das listas de espera, conforme a LGPD.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacidadePage() {
  return (
    <LegalPage title="Política de privacidade" updated="5 de novembro de 2026">
      <p>
        Esta política explica como a Matchy trata os dados pessoais enviados pelos formulários de lista de espera deste site,
        em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018).
      </p>
      <h2>Quais dados coletamos</h2>
      <p>
        Para marcas, coletamos nome da marca, site ou Instagram, nome e cargo da pessoa responsável, e-mail corporativo,
        WhatsApp (opcional), segmento, plano de interesse e volume estimado de conteúdo. Para criadoras, coletamos nome,
        e-mail, perfis no Instagram e no TikTok, nicho, faixa de seguidores, cidade e estado. Em ambos os casos também
        registramos a página de origem, os parâmetros de campanha (UTM) e informações técnicas do navegador.
      </p>
      <h2>Para que usamos</h2>
      <p>
        Usamos esses dados para organizar a lista de espera, avisar sobre o lançamento, oferecer acesso antecipado, garantir a
        condição de fundador às marcas e entender quais canais trouxeram cada cadastro. A base legal é o seu consentimento,
        que você pode revogar quando quiser.
      </p>
      <h2>Compartilhamento</h2>
      <p>
        Os dados ficam armazenados em provedores de infraestrutura contratados pela Matchy e não são vendidos nem
        compartilhados com terceiros para fins de marketing.
      </p>
      <h2>Seus direitos</h2>
      <p>
        Você pode pedir acesso, correção, portabilidade ou exclusão dos seus dados, além de revogar o consentimento, pelo
        e-mail <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>
      <h2>Por quanto tempo guardamos</h2>
      <p>
        Mantemos os dados enquanto a lista de espera estiver ativa ou até você pedir a exclusão, o que acontecer primeiro.
      </p>
    </LegalPage>
  );
}
