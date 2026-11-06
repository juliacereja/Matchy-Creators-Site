import { DecorCircles } from "@/components/brand/DecorCircles";
import { ScriptSeal } from "@/components/brand/ScriptSeal";
import { Container } from "@/components/ui/Container";
import { InstagramIcon, TikTokIcon } from "@/components/ui/icons";
import { links } from "@/config/links";

export function ThankYou({
  seal = "Deu match!",
  title,
  intro,
  nextSteps,
  backHref,
  backLabel,
}: {
  seal?: string;
  title: React.ReactNode;
  intro: React.ReactNode;
  nextSteps: string[];
  backHref: string;
  backLabel: string;
}) {
  return (
    <section className="relative overflow-hidden pb-24 pt-32 md:pt-40" aria-labelledby="obrigado-titulo">
      <DecorCircles
        circles={[
          { color: "pink", size: "24rem", className: "-right-32 -top-20 hidden md:block" },
          { color: "blush", size: "18rem", className: "-bottom-24 -left-24" },
        ]}
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl">
          <ScriptSeal className="mb-6">{seal}</ScriptSeal>
          <h1 id="obrigado-titulo" className="text-title-1 text-plum">
            {title}
          </h1>
          <p className="mt-6 text-body text-plum-soft">{intro}</p>

          <div className="mt-10 rounded-card-lg border border-cream-dark bg-white/80 p-7 md:p-9">
            <h2 className="font-display text-2xl text-plum">O que acontece a seguir</h2>
            <ol className="mt-6 space-y-5">
              {nextSteps.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blush font-display text-lg text-plum">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-body-sm text-plum">{s}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10">
            <p className="text-eyebrow text-pink-ink">Enquanto isso, siga a Matchy</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-pink px-8 text-[1.1875rem] font-bold text-cream shadow-pop transition-colors hover:bg-pink-dark"
              >
                <InstagramIcon /> Seguir no Instagram
              </a>
              <a
                href={links.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-plum px-8 text-[1.1875rem] font-bold text-cream transition-colors hover:bg-plum/90"
              >
                <TikTokIcon /> Seguir no TikTok
              </a>
            </div>
            <a href={backHref} className="mt-8 inline-block text-base font-semibold text-pink-ink underline underline-offset-4">
              {backLabel}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
