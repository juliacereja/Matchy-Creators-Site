export const navLinks = [
  { href: "/marcas", label: "Para marcas" },
  { href: "/creators", label: "Para creators" },
  { href: "/planos", label: "Planos" },
];

/** O botão "Entrar na lista" leva à lista certa conforme a página. */
export function waitlistHrefFor(pathname: string) {
  if (pathname.startsWith("/creators")) return "/creators#lista";
  if (pathname.startsWith("/marcas") || pathname.startsWith("/planos")) return "/marcas#lista";
  return "/#escolha";
}
