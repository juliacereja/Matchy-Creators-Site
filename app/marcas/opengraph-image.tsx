import { ogSize, renderOg } from "@/lib/og";

export const alt = "Matchy: Creators alinhados aos valores da sua marca";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ eyebrow: "Para marcas", title: "Creators alinhados aos valores da sua marca" });
}
