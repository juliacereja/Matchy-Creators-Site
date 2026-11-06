/**
 * Ponto único de eventos. Envia para GA4 (gtag) e Meta Pixel (fbq) quando
 * estiverem carregados; sem eles, só registra no console em desenvolvimento.
 */

export type AnalyticsEvent =
  | "click_sou_marca"
  | "click_sou_creator"
  | "click_ver_planos"
  | "click_reservar_fundador"
  | "click_entrar_lista"
  | "submit_waitlist_brand"
  | "submit_waitlist_creator"
  | "begin_checkout";

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const metaEventMap: Partial<Record<AnalyticsEvent, string>> = {
  submit_waitlist_brand: "Lead",
  submit_waitlist_creator: "CompleteRegistration",
  begin_checkout: "InitiateCheckout",
};

export function track(event: AnalyticsEvent, params: Params = {}) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", event, params);

  if (window.fbq) {
    const standard = metaEventMap[event];
    if (standard) window.fbq("track", standard, params);
    else window.fbq("trackCustom", event, params);
  }

  if (process.env.NODE_ENV === "development") {
    console.info("[track]", event, params);
  }
}
