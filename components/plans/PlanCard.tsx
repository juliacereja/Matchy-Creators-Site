import { Badge } from "@/components/ui/Badge";
import { CheckIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { formatBRL, type BillingCycle, type Plan } from "@/config/plans";
import { PlanCta } from "./PlanCta";

export function PlanCard({ plan, cycle }: { plan: Plan; cycle: BillingCycle }) {
  const featured = !!plan.highlighted;
  const full = plan.fullPrice[cycle];
  const founder = plan.founderPrice[cycle];
  const discount = Math.round((1 - founder / full) * 100);

  return (
    <article
      aria-labelledby={`plano-${plan.id}`}
      className={cn(
        "relative flex h-full flex-col rounded-card-lg p-8 md:p-9",
        featured ? "bg-pink-deep text-cream shadow-pop lg:-my-4 lg:py-12" : "border border-cream-dark bg-white/80 text-plum",
      )}
    >
      {featured && (
        <Badge tone="plum" className="absolute -top-3.5 left-8 px-4 py-1.5 text-sm uppercase tracking-[0.12em]">
          Mais escolhido
        </Badge>
      )}
      <h3 id={`plano-${plan.id}`} className="font-display text-[1.75rem] leading-8">
        {plan.name}
      </h3>
      <p className={cn("mt-2 text-body-sm", featured ? "text-cream" : "text-plum-soft")}>{plan.tagline}</p>

      <div className="mt-7">
        <Badge tone={featured ? "cream" : "orange"} className={featured ? "border-0 text-pink-ink" : ""}>
          Condição de lançamento · {discount}% off
        </Badge>
        <p className="mt-4 flex flex-wrap items-baseline gap-x-3">
          <span className={cn("text-lg line-through", featured ? "text-cream" : "text-plum-soft")}>
            <span className="sr-only">Preço cheio: </span>
            {formatBRL(full)}
          </span>
          <span className="font-display text-[2.75rem] font-extrabold leading-none tracking-[0.02em]">
            <span className="sr-only">Preço de fundador: </span>
            {formatBRL(founder)}
          </span>
          <span className={cn("text-base", featured ? "text-cream" : "text-plum-soft")}>/mês</span>
        </p>
        <p className={cn("mt-2 text-sm", featured ? "text-cream" : "text-plum-soft")}>
          {cycle === "anual" ? `Preço de fundador, cobrado ${formatBRL(founder * 12)} por ano` : "Preço de fundador, cobrado mês a mês"}
        </p>
      </div>

      <dl className={cn("mt-7 grid grid-cols-2 gap-3 rounded-2xl p-4", featured ? "bg-plum/25" : "bg-blush-soft")}>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.14em]">Campanhas ativas</dt>
          <dd className="mt-1 font-display text-2xl capitalize">{plan.activeCampaigns}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.14em]">Creators por campanha</dt>
          <dd className="mt-1 font-display text-2xl">{plan.creatorsPerCampaign}</dd>
        </div>
      </dl>

      <ul className="mt-7 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-3 text-body-sm">
            <span className={cn("mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full", featured ? "bg-cream text-pink-ink" : "bg-pink text-cream")}>
              <CheckIcon className="h-3 w-3" />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <PlanCta plan={plan} cycle={cycle} variant={featured ? "cream" : "primary"} className="mt-9" />
    </article>
  );
}
