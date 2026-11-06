import type { FaqItem } from "@/config/faq";

/** FAQ com <details> nativo: acessível por teclado e sem JavaScript. */
export function Accordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-cream-dark overflow-hidden rounded-card border border-cream-dark bg-white/60">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-lg font-semibold text-plum transition-colors hover:bg-blush-soft/60 md:px-8 [&::-webkit-details-marker]:hidden">
            {item.question}
            <span
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink text-xl leading-none text-cream transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="px-6 pb-6 text-body text-plum-soft md:px-8">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
