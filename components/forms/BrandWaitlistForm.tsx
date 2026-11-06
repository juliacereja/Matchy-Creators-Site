"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { brandSchema, brandSegments, ugcVolumes } from "@/lib/validation";
import { plans, getPlan } from "@/config/plans";
import { track } from "@/lib/analytics";
import { Button } from "@/components/ui/Button";
import { ConsentField, Field, Honeypot, Input, Select } from "./fields";
import { submitWaitlist } from "./submit";

type FormIn = z.input<typeof brandSchema>;
type FormOut = z.output<typeof brandSchema>;

const planOptions = [
  ...plans.map((p) => ({ value: p.id, label: p.name })),
  { value: "indefinido", label: "Ainda não sei" },
];

export function BrandWaitlistForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [serverError, setServerError] = useState<string | null>(null);
  const preselected = getPlan(params.get("plano"));

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormIn, unknown, FormOut>({
    resolver: zodResolver(brandSchema),
    defaultValues: { plan_interest: preselected?.id ?? ("" as FormIn["plan_interest"]) },
  });

  // atualiza o plano quando a marca clica em outro plano sem sair da página
  useEffect(() => {
    if (preselected) setValue("plan_interest", preselected.id, { shouldValidate: false });
  }, [preselected, setValue]);

  const onSubmit = async (data: FormOut) => {
    setServerError(null);
    const result = await submitWaitlist("/api/waitlist/brands", data);
    if (!result.ok) {
      if (result.field === "email") setError("email", { message: result.message });
      else setServerError(result.message);
      return;
    }
    track("submit_waitlist_brand", { plano: data.plan_interest, segmento: data.segment });
    router.push("/obrigado-marca");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative grid gap-5 sm:grid-cols-2" aria-describedby="form-marca-nota">
      {preselected && (
        <p className="rounded-2xl bg-blush-soft px-5 py-4 text-base text-plum sm:col-span-2">
          Você está reservando a condição de fundador do plano <strong className="font-bold text-pink-ink">{preselected.name}</strong>.
          Pode trocar abaixo se quiser.
        </p>
      )}

      <Field label="Nome da marca" error={errors.brand_name?.message}>
        {({ id, describedBy }) => (
          <Input id={id} aria-describedby={describedBy} aria-invalid={!!errors.brand_name} autoComplete="organization" {...register("brand_name")} />
        )}
      </Field>
      <Field label="Site ou Instagram" error={errors.brand_site?.message} hint="Ex.: suamarca.com.br ou @suamarca">
        {({ id, describedBy }) => (
          <Input id={id} aria-describedby={describedBy} aria-invalid={!!errors.brand_site} {...register("brand_site")} />
        )}
      </Field>
      <Field label="Seu nome" error={errors.contact_name?.message}>
        {({ id, describedBy }) => (
          <Input id={id} aria-describedby={describedBy} aria-invalid={!!errors.contact_name} autoComplete="name" {...register("contact_name")} />
        )}
      </Field>
      <Field label="Cargo" error={errors.contact_role?.message}>
        {({ id, describedBy }) => (
          <Input id={id} aria-describedby={describedBy} aria-invalid={!!errors.contact_role} autoComplete="organization-title" placeholder="Ex.: Gerente de marketing" {...register("contact_role")} />
        )}
      </Field>
      <Field label="E-mail corporativo" error={errors.email?.message}>
        {({ id, describedBy }) => (
          <Input id={id} type="email" inputMode="email" aria-describedby={describedBy} aria-invalid={!!errors.email} autoComplete="email" placeholder="voce@suamarca.com.br" {...register("email")} />
        )}
      </Field>
      <Field label="WhatsApp" optional error={errors.whatsapp?.message}>
        {({ id, describedBy }) => (
          <Input id={id} type="tel" inputMode="tel" aria-describedby={describedBy} aria-invalid={!!errors.whatsapp} autoComplete="tel" placeholder="(11) 90000-0000" {...register("whatsapp")} />
        )}
      </Field>
      <Field label="Segmento" error={errors.segment?.message}>
        {({ id, describedBy }) => (
          <Select id={id} aria-describedby={describedBy} aria-invalid={!!errors.segment} options={brandSegments} {...register("segment")} />
        )}
      </Field>
      <Field label="Plano de interesse" error={errors.plan_interest?.message}>
        {({ id, describedBy }) => (
          <Select id={id} aria-describedby={describedBy} aria-invalid={!!errors.plan_interest} options={planOptions} {...register("plan_interest")} />
        )}
      </Field>
      <Field label="Quantos conteúdos UGC você precisa por mês?" error={errors.ugc_volume?.message} className="sm:col-span-2">
        {({ id, describedBy }) => (
          <Select id={id} aria-describedby={describedBy} aria-invalid={!!errors.ugc_volume} options={ugcVolumes} {...register("ugc_volume")} />
        )}
      </Field>

      <Honeypot {...register("website_url")} />

      <div className="sm:col-span-2">
        <ConsentField error={errors.consent?.message} {...register("consent")} />
      </div>

      {serverError && (
        <p role="alert" className="rounded-2xl bg-blush-soft px-5 py-4 text-base font-semibold text-pink-ink sm:col-span-2">
          {serverError}
        </p>
      )}

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? "Enviando..." : "Garantir meu lugar na lista"}
        </Button>
        <p id="form-marca-nota" className="mt-3 text-sm text-plum-soft">
          Nenhuma cobrança agora. Você só vai decidir sobre a assinatura no lançamento.
        </p>
      </div>
    </form>
  );
}
