const KEY = "matchy_attribution";

export type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  landing_page?: string;
};

/** Guarda os UTMs da primeira página visitada na sessão. */
export function captureAttribution() {
  try {
    const params = new URLSearchParams(window.location.search);
    const current = readAttribution();
    const next: Attribution = {
      utm_source: params.get("utm_source") ?? current.utm_source,
      utm_medium: params.get("utm_medium") ?? current.utm_medium,
      utm_campaign: params.get("utm_campaign") ?? current.utm_campaign,
      landing_page: current.landing_page ?? window.location.pathname,
    };
    sessionStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // sessionStorage indisponível (modo privado, bloqueio): segue sem atribuição
  }
}

export function readAttribution(): Attribution {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) ?? "{}") as Attribution;
  } catch {
    return {};
  }
}
