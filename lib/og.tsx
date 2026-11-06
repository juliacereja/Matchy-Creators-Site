import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };

/** Gera a imagem de Open Graph de cada página com a identidade da Matchy. */
export async function renderOg({ eyebrow, title }: { eyebrow: string; title: string }) {
  const bootzy = await readFile(join(process.cwd(), "public/fonts/BootzyTM.ttf"));
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#FFF4E6", padding: 72, position: "relative", fontFamily: "Bootzy" }}>
        <div style={{ position: "absolute", right: -160, top: -160, width: 560, height: 560, borderRadius: 9999, background: "#E5215F" }} />
        <div style={{ position: "absolute", right: 260, bottom: -90, width: 220, height: 220, borderRadius: 9999, background: "#FD5E12" }} />
        <div style={{ position: "absolute", left: -120, bottom: -160, width: 360, height: 360, borderRadius: 9999, background: "#FFB3C8" }} />
        <div style={{ display: "flex", fontSize: 64, color: "#E5215F", letterSpacing: 1.2 }}>Matchy<span style={{ color: "#FD5E12" }}>.</span></div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 820 }}>
          <div style={{ fontSize: 26, color: "#B8174C", letterSpacing: 5, textTransform: "uppercase", marginBottom: 20 }}>{eyebrow}</div>
          <div style={{ fontSize: 68, lineHeight: 1.1, color: "#3B0E1E", letterSpacing: 1.3 }}>{title}</div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: [{ name: "Bootzy", data: bootzy, weight: 800, style: "normal" }] },
  );
}
