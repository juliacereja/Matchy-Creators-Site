import { ogSize, renderOg } from "@/lib/og";

export const alt = "Matchy: Onde marcas de beleza e criadoras de conteúdo se encontram";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ eyebrow: "Lista de espera aberta", title: "Onde marcas de beleza e criadoras de conteúdo se encontram" });
}
