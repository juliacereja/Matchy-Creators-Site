import { forwardRef, useId } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const control =
  "mt-2 block w-full rounded-2xl border-2 border-cream-dark bg-white px-4 py-3 text-base text-plum placeholder:text-plum-soft/60 transition-colors focus:border-pink focus:outline-none focus-visible:ring-0 aria-[invalid=true]:border-pink-ink";

type FieldProps = {
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  className?: string;
  children: (ids: { id: string; describedBy?: string }) => React.ReactNode;
};

export function Field({ label, error, hint, optional, className, children }: FieldProps) {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-erro` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;
  return (
    <div className={className}>
      <label htmlFor={id} className="text-base font-semibold text-plum">
        {label}
        {optional && <span className="ml-1 font-normal text-plum-soft">(opcional)</span>}
      </label>
      {children({ id, describedBy })}
      {hint && !error && (
        <p id={hintId} className="mt-1.5 text-sm text-plum-soft">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-sm font-semibold text-pink-ink">
          {error}
        </p>
      )}
    </div>
  );
}

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...props }, ref) {
    return <input ref={ref} className={cn(control, className)} {...props} />;
  },
);

export const Select = forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement> & { options: readonly { value: string; label: string }[]; placeholder?: string }
>(function Select({ className, options, placeholder = "Selecione", ...props }, ref) {
  return (
    <select ref={ref} className={cn(control, "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%233B0E1E%22 stroke-width=%222.5%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat pr-12", className)} {...props}>
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
});

/** Checkbox obrigatório de consentimento LGPD. */
export const ConsentField = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { error?: string }
>(function ConsentField({ error, ...props }, ref) {
  const id = useId();
  return (
    <div>
      <div className="flex items-start gap-3">
        <input
          ref={ref}
          id={id}
          type="checkbox"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-erro` : undefined}
          className="mt-1 h-5 w-5 shrink-0 cursor-pointer rounded accent-pink"
          {...props}
        />
        <label htmlFor={id} className="text-sm leading-6 text-plum-soft">
          Concordo em receber comunicações da Matchy sobre o lançamento e autorizo o uso dos meus dados conforme a{" "}
          <Link href="/privacidade" target="_blank" className="font-semibold text-pink-ink underline underline-offset-2">
            política de privacidade
          </Link>
          , nos termos da LGPD.
        </label>
      </div>
      {error && (
        <p id={`${id}-erro`} role="alert" className="mt-1.5 text-sm font-semibold text-pink-ink">
          {error}
        </p>
      )}
    </div>
  );
});

/** Campo-isca invisível para humanos. Bots que preenchem tudo são descartados no servidor. */
export const Honeypot = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  function Honeypot(props, ref) {
    return (
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Deixe este campo em branco
          <input ref={ref} type="text" tabIndex={-1} autoComplete="off" {...props} />
        </label>
      </div>
    );
  },
);
