import Link from "next/link";
import { formatBRL, plans } from "@/config/plans";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

/** Resumo dos planos para a página /marcas, com link para /planos. */
export function PlansPreview() {
  return (
    <div>
      <ul className="grid gap-5 md:grid-cols-3">
        {plans.map((p) => (
          <li
            key={p.id}
            className={cn(
              "flex flex-col rounded-card p-7",
              p.highlighted ? "bg-pink-deep text-cream" : "border border-cream-dark bg-white/70 text-plum",
            )}
          >
            <p className="font-display text-xl">{p.name}</p>
            <p className="mt-4 flex items-baseline gap-2">
              <span className={cn("text-base line-through", p.highlighted ? "text-cream" : "text-plum-soft")}>
                <span className="sr-only">De </span>{formatBRL(p.fullPrice.mensal)}
              </span>
              <span className="font-display text-3xl font-extrabold">
                <span className="sr-only">por </span>{formatBRL(p.founderPrice.mensal)}
              </span>
              <span className={p.highlighted ? "text-cream" : "text-plum-soft"}>/mês</span>
            </p>
            <p className={cn("mt-3 text-body-sm", p.highlighted ? "text-cream" : "text-plum-soft")}>
              {typeof p.activeCampaigns === "number" ? `${p.activeCampaigns} campanhas ativas` : "Campanhas ilimitadas"} e até{" "}
              {p.creatorsPerCampaign} creators por campanha.
            </p>
            <Link
              href={`/planos#plano-${p.id}`}
              className={cn("mt-5 text-base font-bold underline underline-offset-4", p.highlighted ? "text-cream" : "text-pink-ink")}
            >
              Ver detalhes do {p.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <Button href="/planos" size="lg" event="click_ver_planos" eventParams={{ origem: "marcas_previa" }}>
          Ver todos os planos
        </Button>
        <p className="text-sm text-plum-soft">Nenhuma cobrança agora. A condição fica reservada para o lançamento.</p>
      </div>
    </div>
  );
}
