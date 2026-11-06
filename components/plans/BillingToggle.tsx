"use client";

import { cn } from "@/lib/cn";
import type { BillingCycle } from "@/config/plans";

export function BillingToggle({
  value,
  onChange,
  savingsLabel,
}: {
  value: BillingCycle;
  onChange: (v: BillingCycle) => void;
  savingsLabel?: string;
}) {
  const options: { value: BillingCycle; label: string }[] = [
    { value: "mensal", label: "Mensal" },
    { value: "anual", label: "Anual" },
  ];
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row">
      <div role="radiogroup" aria-label="Ciclo de cobrança" className="inline-flex rounded-full border-2 border-cream-dark bg-white p-1">
        {options.map((o) => {
          const active = value === o.value;
          return (
            <button
              key={o.value}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(o.value)}
              onKeyDown={(e) => {
                if (["ArrowLeft", "ArrowRight"].includes(e.key)) {
                  e.preventDefault();
                  onChange(value === "mensal" ? "anual" : "mensal");
                }
              }}
              tabIndex={active ? 0 : -1}
              className={cn(
                "h-11 rounded-full px-6 text-base font-bold transition-colors",
                active ? "bg-plum text-cream" : "text-plum hover:text-pink-ink",
              )}
            >
              {o.label}
            </button>
          );
        })}
      </div>
      {savingsLabel && <span className="rounded-full bg-orange px-3 py-1 text-sm font-bold text-plum">{savingsLabel}</span>}
    </div>
  );
}
