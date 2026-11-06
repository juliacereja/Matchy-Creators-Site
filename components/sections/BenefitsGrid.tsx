import { FadeIn } from "@/components/ui/Motion";

export type Benefit = { title: string; text: string; icon: string };

/** Grade de benefícios. O ícone é um emoji-símbolo simples dentro de um círculo blush. */
export function BenefitsGrid({ items }: { items: Benefit[] }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2">
      {items.map((b, i) => (
        <FadeIn as="li" key={b.title} delay={i * 0.06} className="flex gap-5 rounded-card border border-cream/15 bg-cream/5 p-7">
          <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blush font-display text-xl text-plum">
            {b.icon}
          </span>
          <div>
            <h3 className="font-display text-xl leading-7 text-cream">{b.title}</h3>
            <p className="mt-2 text-body-sm text-blush">{b.text}</p>
          </div>
        </FadeIn>
      ))}
    </ul>
  );
}
