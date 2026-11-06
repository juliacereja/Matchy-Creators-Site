"use client";

import { useState } from "react";
import { plans, type BillingCycle } from "@/config/plans";
import { BillingToggle } from "./BillingToggle";
import { PlanCard } from "./PlanCard";

export function PlansGrid() {
  const [cycle, setCycle] = useState<BillingCycle>("mensal");
  return (
    <div>
      <h2 className="sr-only">Planos disponíveis</h2>
      <div className="flex justify-center">
        <BillingToggle value={cycle} onChange={setCycle} savingsLabel="Anual com até 2 meses grátis" />
      </div>
      <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3 lg:gap-5">
        {plans.map((p) => (
          <PlanCard key={p.id} plan={p} cycle={cycle} />
        ))}
      </div>
    </div>
  );
}
