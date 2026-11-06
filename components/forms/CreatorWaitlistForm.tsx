"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { brazilStates, creatorNiches, creatorSchema, followerRanges } from "@/lib/validation";
import { track } from "@/lib/analytics";
import { Button } from "@/components/ui/Button";
import { ConsentField, Field, Honeypot, Input, Select } from "./fields";
import { submitWaitlist } from "./submit";

type FormIn = z.input<typeof creatorSchema>;
type FormOut = z.output<typeof creatorSchema>;

const stateOptions = brazilStates.map((uf) => ({ value: uf, label: uf }));

export function CreatorWaitlistForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormIn, unknown, FormOut>({ resolver: zodResolver(creatorSchema) });

  const onSubmit = async (data: FormOut) => {
    setServerError(null);
    const result = await submitWaitlist("/api/waitlist/creators", data);
    if (!result.ok) {
      if (result.field === "email") setError("email", { message: result.message });
      else setServerError(result.message);
      return;
    }
    track("submit_waitlist_creator", { nicho: data.niche, seguidores: data.followers_range });
    router.push("/obrigado-criadora");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative grid gap-5 sm:grid-cols-2">
      <Field label="Seu nome" error={errors.name?.message}>
        {({ id, describedBy }) => (
          <Input id={id} aria-describedby={describedBy} aria-invalid={!!errors.name} autoComplete="name" {...register("name")} />
        )}
      </Field>
      <Field label="E-mail" error={errors.email?.message}>
        {({ id, describedBy }) => (
          <Input id={id} type="email" inputMode="email" aria-describedby={describedBy} aria-invalid={!!errors.email} autoComplete="email" {...register("email")} />
        )}
      </Field>
      <Field label="@ do Instagram" error={errors.instagram?.message}>
        {({ id, describedBy }) => (
          <Input id={id} aria-describedby={describedBy} aria-invalid={!!errors.instagram} autoCapitalize="none" placeholder="@seuperfil" {...register("instagram")} />
        )}
      </Field>
      <Field label="@ do TikTok" optional error={errors.tiktok?.message}>
        {({ id, describedBy }) => (
          <Input id={id} aria-describedby={describedBy} aria-invalid={!!errors.tiktok} autoCapitalize="none" placeholder="@seuperfil" {...register("tiktok")} />
        )}
      </Field>
      <Field label="Nicho principal" error={errors.niche?.message}>
        {({ id, describedBy }) => (
          <Select id={id} aria-describedby={describedBy} aria-invalid={!!errors.niche} options={creatorNiches} {...register("niche")} />
        )}
      </Field>
      <Field label="Faixa de seguidores" error={errors.followers_range?.message} hint="Considere a rede em que você tem mais seguidores.">
        {({ id, describedBy }) => (
          <Select id={id} aria-describedby={describedBy} aria-invalid={!!errors.followers_range} options={followerRanges} {...register("followers_range")} />
        )}
      </Field>
      <Field label="Cidade" error={errors.city?.message}>
        {({ id, describedBy }) => (
          <Input id={id} aria-describedby={describedBy} aria-invalid={!!errors.city} autoComplete="address-level2" {...register("city")} />
        )}
      </Field>
      <Field label="Estado" error={errors.state?.message}>
        {({ id, describedBy }) => (
          <Select id={id} aria-describedby={describedBy} aria-invalid={!!errors.state} options={stateOptions} placeholder="UF" {...register("state")} />
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
          {isSubmitting ? "Enviando..." : "Quero entrar na lista"}
        </Button>
        <p className="mt-3 text-sm text-plum-soft">É gratuito e leva menos de um minuto.</p>
      </div>
    </form>
  );
}
