import { brandSchema } from "@/lib/validation";
import { handleWaitlist } from "@/lib/waitlist";

export async function POST(req: Request) {
  return handleWaitlist(req, brandSchema, "waitlist_brands", (d) => ({
    brand_name: d.brand_name,
    brand_site: d.brand_site,
    contact_name: d.contact_name,
    contact_role: d.contact_role,
    email: d.email,
    whatsapp: d.whatsapp ?? null,
    segment: d.segment,
    plan_interest: d.plan_interest,
    ugc_volume: d.ugc_volume,
    consent: d.consent,
    utm_source: d.utm_source ?? null,
    utm_medium: d.utm_medium ?? null,
    utm_campaign: d.utm_campaign ?? null,
    landing_page: d.landing_page ?? null,
    source_page: d.source_page ?? null,
  }));
}
