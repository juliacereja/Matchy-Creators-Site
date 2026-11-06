import { creatorSchema } from "@/lib/validation";
import { handleWaitlist } from "@/lib/waitlist";

export async function POST(req: Request) {
  return handleWaitlist(req, creatorSchema, "waitlist_creators", (d) => ({
    name: d.name,
    email: d.email,
    instagram: d.instagram,
    tiktok: d.tiktok ?? null,
    niche: d.niche,
    followers_range: d.followers_range,
    city: d.city,
    state: d.state,
    consent: d.consent,
    utm_source: d.utm_source ?? null,
    utm_medium: d.utm_medium ?? null,
    utm_campaign: d.utm_campaign ?? null,
    landing_page: d.landing_page ?? null,
    source_page: d.source_page ?? null,
  }));
}
