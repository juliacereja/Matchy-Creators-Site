import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Ícone da marca: "M" creme em quadrado arredondado magenta
export default async function AppleIcon() {
  const font = await readFile(join(process.cwd(), "public/fonts/BootzyTM.ttf"));
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#E5215F", borderRadius: 48, color: "#FFF4E6", fontSize: 120, fontFamily: "Bootzy", paddingTop: 10 }}>
        M
      </div>
    ),
    { ...size, fonts: [{ name: "Bootzy", data: font, weight: 800 }] },
  );
}
