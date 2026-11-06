import { comparisonRows, plans } from "@/config/plans";
import { CheckIcon, MinusIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-card-lg border border-cream-dark bg-white/70">
      <table className="w-full min-w-[40rem] border-collapse text-left">
        <caption className="sr-only">Comparação de recursos entre os planos</caption>
        <thead>
          <tr className="border-b border-cream-dark">
            <th scope="col" className="px-6 py-5 text-base font-semibold text-plum-soft">Recurso</th>
            {plans.map((p) => (
              <th key={p.id} scope="col" className={cn("px-6 py-5 font-display text-lg", p.highlighted ? "text-pink-ink" : "text-plum")}>
                {p.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr key={row.label} className="border-b border-cream-dark last:border-0">
              <th scope="row" className="px-6 py-4 text-base font-medium text-plum">{row.label}</th>
              {plans.map((p) => {
                const v = row.values[p.id];
                return (
                  <td key={p.id} className={cn("px-6 py-4 text-base text-plum", p.highlighted && "bg-blush-soft/50")}>
                    {v === true ? (
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-pink text-cream">
                        <CheckIcon className="h-3.5 w-3.5" />
                        <span className="sr-only">Incluído</span>
                      </span>
                    ) : v === false ? (
                      <span className="inline-flex h-6 w-6 items-center justify-center text-plum-soft">
                        <MinusIcon className="h-4 w-4" />
                        <span className="sr-only">Não incluído</span>
                      </span>
                    ) : (
                      <span className="font-semibold">{v}</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
