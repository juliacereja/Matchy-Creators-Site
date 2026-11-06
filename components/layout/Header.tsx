"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { track } from "@/lib/analytics";
import { navLinks, waitlistHrefFor } from "./nav";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const waitlistHref = waitlistHrefFor(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // fecha o menu ao trocar de página
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300",
        scrolled || open ? "bg-cream/95 shadow-[0_1px_0_#F1DFC8] backdrop-blur" : "bg-cream/0",
      )}
    >
      <a
        href="#conteudo"
        className="sr-only left-4 top-3 z-50 rounded-full bg-plum px-4 py-2 text-cream focus:not-sr-only focus:absolute"
      >
        Pular para o conteúdo
      </a>
      <div className="mx-auto flex h-[4.5rem] max-w-site items-center justify-between px-5 sm:px-8">
        <Logo className="text-[1.75rem]" />

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 text-base font-semibold transition-colors",
                  active ? "bg-blush-soft text-pink-ink" : "text-plum hover:text-pink-ink",
                )}
                onClick={link.href === "/planos" ? () => track("click_ver_planos", { origem: "header" }) : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href={waitlistHref} event="click_entrar_lista" eventParams={{ origem: "header" }}>
            Entrar na lista
          </Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-full text-plum md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6" aria-hidden="true">
            <span className={cn("absolute left-0 top-0 h-0.5 w-6 rounded bg-plum transition-transform", open && "translate-y-[7px] rotate-45")} />
            <span className={cn("absolute left-0 top-[7px] h-0.5 w-6 rounded bg-plum transition-opacity", open && "opacity-0")} />
            <span className={cn("absolute left-0 top-[14px] h-0.5 w-6 rounded bg-plum transition-transform", open && "-translate-y-[7px] -rotate-45")} />
          </span>
        </button>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-cream-dark bg-cream px-5 pb-10 pt-6 md:hidden"
      >
        <nav aria-label="Principal no celular">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname.startsWith(link.href) ? "page" : undefined}
                  className="block rounded-2xl px-4 py-4 font-display text-2xl text-plum hover:bg-blush-soft"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          href={waitlistHref}
          size="lg"
          className="mt-8 w-full"
          event="click_entrar_lista"
          eventParams={{ origem: "menu_mobile" }}
        >
          Entrar na lista
        </Button>
      </div>
    </header>
  );
}
