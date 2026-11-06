import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { links } from "@/config/links";
import { Container } from "@/components/ui/Container";
import { InstagramIcon, TikTokIcon, LinkedInIcon } from "@/components/ui/icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-plum text-cream">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div>
          <Logo tone="cream" className="text-4xl" />
          <p className="mt-4 max-w-sm text-body-sm text-cream/85">
            A Matchy vai aproximar marcas de beleza e criadoras de conteúdo que têm valores, tom e estética em comum.
            O app chega em breve.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <p className="text-eyebrow mb-4 text-blush">Navegue</p>
          <ul className="space-y-3 text-body-sm">
            <li><Link className="hover:text-blush" href="/marcas">Para marcas</Link></li>
            <li><Link className="hover:text-blush" href="/criadoras">Para criadoras</Link></li>
            <li><Link className="hover:text-blush" href="/planos">Planos</Link></li>
            <li><Link className="hover:text-blush" href="/termos">Termos de uso</Link></li>
            <li><Link className="hover:text-blush" href="/privacidade">Política de privacidade</Link></li>
          </ul>
        </nav>

        <div>
          <p className="text-eyebrow mb-4 text-blush">Siga a Matchy</p>
          <ul className="flex gap-3">
            <li>
              <a href={links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Matchy" className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-pink">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href={links.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok da Matchy" className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-pink">
                <TikTokIcon />
              </a>
            </li>
            <li>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn da Matchy" className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-pink">
                <LinkedInIcon />
              </a>
            </li>
          </ul>
          <a href={links.email} className="mt-6 inline-block text-body-sm text-cream/85 hover:text-blush">
            {links.email.replace("mailto:", "")}
          </a>
        </div>
      </Container>
      <div className="border-t border-cream/10">
        <Container className="py-6 text-sm text-cream/70">© {year} Matchy. Todos os direitos reservados.</Container>
      </div>
    </footer>
  );
}
