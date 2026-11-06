import { ogSize, renderOg } from "@/lib/og";

export const alt = "Matchy: Criadoras alinhadas aos valores da sua marca";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ eyebrow: "Para marcas", title: "Criadoras alinhadas aos valores da sua marca" });
}
