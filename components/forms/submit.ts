import { readAttribution } from "@/lib/utm";

export type SubmitResult = { ok: true } | { ok: false; message: string; field?: string };

/** Envia o cadastro com UTMs e página de origem para a API route. */
export async function submitWaitlist(endpoint: string, data: Record<string, unknown>): Promise<SubmitResult> {
  const attribution = readAttribution();
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        ...attribution,
        source_page: window.location.pathname + window.location.search,
      }),
    });
    if (res.ok) return { ok: true };
    const body = (await res.json().catch(() => ({}))) as { message?: string; field?: string };
    return { ok: false, message: body.message ?? "Não conseguimos salvar agora. Tente de novo em instantes.", field: body.field };
  } catch {
    return { ok: false, message: "Sem conexão no momento. Confira a sua internet e tente de novo." };
  }
}
