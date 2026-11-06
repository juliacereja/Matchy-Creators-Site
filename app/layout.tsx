import type { Metadata, Viewport } from "next";
import "./globals.css";
import { bootzy, outfit, rousie } from "./fonts";
import { site } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AttributionCapture } from "@/components/layout/AttributionCapture";
import { AnalyticsScripts } from "@/components/layout/AnalyticsScripts";
import { MotionProvider } from "@/components/ui/Motion";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Matchy | Onde marcas e criadores de conteúdo se encontram",
    template: "%s | Matchy",
  },
  description: site.description,
  applicationName: "Matchy",
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: "Matchy",
    title: "Matchy | Onde marcas e criadores de conteúdo se encontram",
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FFF4E6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${bootzy.variable} ${outfit.variable} ${rousie.variable}`}>
      <body>
        <MotionProvider>
          <Header />
          <main id="conteudo" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
        </MotionProvider>
        <AttributionCapture />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
