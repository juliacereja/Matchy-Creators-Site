"use client";

import Link from "next/link";
import { track } from "@/lib/analytics";
import { ArrowIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

const options = [
  {
    href: "/marcas",
    event: "click_sou_marca" as const,
    title: "Sou marca",
    text: "Quero encontrar criadoras que falem a língua da minha marca e produzam UGC com constância.",
    tone: "bg-plum text-cream",
    sub: "text-blush",
    chip: "bg-blush text-plum",
    chipText: "Condição de fundador",
  },
  {
    href: "/criadoras",
    event: "click_sou_criadora" as const,
    title: "Sou criadora",
    text: "Quero fechar collabs com marcas de beleza que combinam comigo, mesmo começando agora.",
    tone: "bg-pink-deep text-cream",
    sub: "text-cream",
    chip: "bg-cream text-pink-ink",
    chipText: "Gratuito para criadoras",
  },
];

export function AudienceChoice({ className }: { className?: string }) {
  return (
    <div id="escolha" className={cn("grid gap-5 md:grid-cols-2", className)}>
      {options.map((o) => (
        <Link
          key={o.href}
          href={o.href}
          onClick={() => track(o.event, { origem: "home" })}
          className={cn(
            "group relative flex min-h-[15rem] flex-col justify-between overflow-hidden rounded-card-lg p-8 transition-transform duration-300 hover:-translate-y-1 md:min-h-[17rem] md:p-10",
            o.tone,
          )}
        >
          <span aria-hidden="true" className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-orange transition-transform duration-500 group-hover:scale-110" />
          <span className={cn("relative w-fit rounded-full px-3 py-1 text-sm font-bold", o.chip)}>{o.chipText}</span>
          <span className="relative mt-8 block">
            <span className="flex items-center gap-3 font-display text-[2.25rem] font-extrabold leading-none tracking-[0.02em] md:text-[2.75rem]">
              {o.title}
              <ArrowIcon className="h-8 w-8 transition-transform duration-300 group-hover:translate-x-1.5" />
            </span>
            <span className={cn("mt-4 block max-w-sm text-body", o.sub)}>{o.text}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
