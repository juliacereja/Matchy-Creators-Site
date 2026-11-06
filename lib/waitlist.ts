import "server-only";
import { NextResponse } from "next/server";
import type { z } from "zod";
import { getSupabase } from "@/lib/supabase/server";

type Table = "waitlist_brands" | "waitlist_creators";

/**
 * Valida, filtra spam e grava um cadastro de lista de espera.
 * O e-mail é único por tabela (índice em lower(email)); duplicados voltam 409.
 */
export async function handleWaitlist<S extends z.ZodType>(
  req: Request,
  schema: S,
  table: Table,
  toRow: (data: z.output<S>) => Record<string, unknown>,
) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ message: "Requisição inválida." }, { status: 400 });
  }

  // honeypot preenchido: responde sucesso para o bot não insistir, mas não grava nada
  if (json && typeof json === "object" && "website_url" in json && (json as { website_url?: string }).website_url) {
    return NextResponse.json({ ok: true });
  }

  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    return NextResponse.json(
      { message: issue?.message ?? "Confira os campos e tente de novo.", field: issue?.path[0] },
      { status: 422 },
    );
  }

  const supabase = getSupabase();
  if (!supabase) {
    console.error("[waitlist] SUPABASE_URL ou SUPABASE_ANON_KEY ausentes");
    return NextResponse.json({ message: "Cadastro temporariamente indisponível. Tente mais tarde." }, { status: 503 });
  }

  const { error } = await supabase.from(table).insert({
    ...toRow(parsed.data),
    user_agent: req.headers.get("user-agent")?.slice(0, 300) ?? null,
  });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json(
        { message: "Este e-mail já está na lista. Fique de olho na sua caixa de entrada!", field: "email" },
        { status: 409 },
      );
    }
    console.error("[waitlist] erro ao gravar", table, error);
    return NextResponse.json({ message: "Não conseguimos salvar agora. Tente de novo em instantes." }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
