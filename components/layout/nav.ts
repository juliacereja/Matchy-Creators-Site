export const navLinks = [
  { href: "/marcas", label: "Para marcas" },
  { href: "/criadoras", label: "Para criadoras" },
  { href: "/planos", label: "Planos" },
];

/** O botão "Entrar na lista" leva à lista certa conforme a página. */
export function waitlistHrefFor(pathname: string) {
  if (pathname.startsWith("/criadoras")) return "/criadoras#lista";
  if (pathname.startsWith("/marcas") || pathname.startsWith("/planos")) return "/marcas#lista";
  return "/#escolha";
}
