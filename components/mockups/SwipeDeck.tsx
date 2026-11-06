"use client";

import { AnimatePresence, m, useReducedMotion, type Variants } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { HeartIcon, XIcon } from "@/components/ui/icons";
import { CampaignCard } from "./CampaignCard";
import { demoCampaigns } from "./campaigns";

type Direction = "right" | "left";

const cardVariants: Variants = {
  enter: { opacity: 0, y: 16, scale: 0.96 },
  center: { opacity: 1, y: 0, scale: 1, x: 0, rotate: 0 },
  exit: (dir: Direction) => ({
    x: dir === "right" ? 260 : -260,
    rotate: dir === "right" ? 14 : -14,
    opacity: 0,
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
  }),
};

/**
 * Deck de campanhas que passa sozinho (direita = coração, esquerda = X).
 * Os botões também funcionam por teclado. A animação pausa com o mouse ou o foco
 * em cima e não roda para quem prefere movimento reduzido.
 */
export function SwipeDeck({ autoPlay = true }: { autoPlay?: boolean }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>("right");
  const [paused, setPaused] = useState(false);
  const total = demoCampaigns.length;

  const swipe = useCallback((dir: Direction) => {
    setDirection(dir);
    setIndex((i) => i + 1);
  }, []);

  useEffect(() => {
    if (!autoPlay || reduce || paused) return;
    const id = window.setInterval(() => swipe(index % 3 === 1 ? "left" : "right"), 2800);
    return () => window.clearInterval(id);
  }, [autoPlay, reduce, paused, index, swipe]);

  const current = demoCampaigns[index % total];
  const next = demoCampaigns[(index + 1) % total];

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative mx-auto h-[23.5rem] w-full max-w-[15.5rem]">
        {/* card de trás */}
        <div aria-hidden="true" className="absolute inset-0 translate-y-3 scale-[0.94] opacity-70">
          <CampaignCard campaign={next} showCta={false} />
        </div>

        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <m.div
            key={index}
            custom={direction}
            className="absolute inset-0"
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <CampaignCard campaign={current} />
          </m.div>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => swipe("left")}
          aria-label="Passar campanha"
          className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-cream-dark bg-white text-plum shadow-soft transition-transform hover:scale-105"
        >
          <XIcon className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={() => swipe("right")}
          aria-label="Curtir campanha e se candidatar"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-pink text-cream shadow-pop transition-transform hover:scale-105"
        >
          <HeartIcon className="h-7 w-7" />
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        Campanha em destaque: {current.title}, da marca {current.brand}, {current.match}% de match.
      </p>
    </div>
  );
}
