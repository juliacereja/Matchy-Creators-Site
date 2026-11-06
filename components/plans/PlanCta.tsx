"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CHECKOUT_ENABLED } from "@/lib/flags";
import { track } from "@/lib/analytics";
import { Button } from "@/components/ui/Button";
import type { BillingCycle, Plan } from "@/config/plans";

/**
 * Botão "Reservar condição de fundador".
 * Checkout desligado: leva ao formulário de marcas com o plano pré-selecionado.
 * Checkout ligado: cria a sessão no Stripe e redireciona.
 */
export function PlanCta({
  plan,
  cycle,
  variant = "primary",
  className,
}: {
  plan: Plan;
  cycle: BillingCycle;
  variant?: "primary" | "cream" | "secondary";
  className?: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onClick = async () => {
    track("click_reservar_fundador", { plano: plan.id, ciclo: cycle });

    if (!CHECKOUT_ENABLED) {
      router.push(`/marcas?plano=${plan.id}#lista`);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      track("begin_checkout", { plano: plan.id, ciclo: cycle });
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId: plan.id, cycle }),
      });
      const body = (await res.json()) as { url?: string; message?: string };
      if (!res.ok || !body.url) throw new Error(body.message);
      window.location.assign(body.url);
    } catch (e) {
      setError(e instanceof Error && e.message ? e.message : "Não foi possível abrir o pagamento agora.");
      setLoading(false);
    }
  };

  return (
    <div className={className}>
      <Button variant={variant} onClick={onClick} disabled={loading} className="w-full">
        {loading ? "Abrindo pagamento..." : "Reservar condição de fundador"}
      </Button>
      {error && (
        <p role="alert" className="mt-2 text-sm font-semibold">
          {error}
        </p>
      )}
    </div>
  );
}
