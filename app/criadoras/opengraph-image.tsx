import { ogSize, renderOg } from "@/lib/og";

export const alt = "Matchy: Feche collabs com marcas que combinam com você";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ eyebrow: "Para criadoras", title: "Feche collabs com marcas que combinam com você" });
}
