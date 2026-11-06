import { ogSize, renderOg } from "@/lib/og";

export const alt = "Matchy: Planos com preço de lançamento";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ eyebrow: "Condição de fundador", title: "Planos com preço de lançamento" });
}
