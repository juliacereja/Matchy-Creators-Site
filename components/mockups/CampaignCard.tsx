import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import type { Campaign } from "./campaigns";

/** Card de campanha como o creator vai ver no app. */
export function CampaignCard({
  campaign,
  className,
  showCta = true,
}: {
  campaign: Campaign;
  className?: string;
  showCta?: boolean;
}) {
  return (
    <article
      aria-label={`Campanha ${campaign.title} da marca ${campaign.brand}`}
      className={cn("flex h-full flex-col rounded-[1.75rem] border border-cream-dark bg-white p-3 shadow-soft", className)}
    >
      <div className="relative">
        <PhotoPlaceholder label="foto do produto" className="aspect-[5/4] rounded-[1.4rem]" />
        <Badge tone="orange" className="absolute right-2.5 top-2.5">
          {campaign.match}% de match
        </Badge>
      </div>
      <div className="flex flex-1 flex-col px-2 pb-1 pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-ink">{campaign.brand}</p>
        <p className="mt-1 font-display text-lg leading-6 text-plum">{campaign.title}</p>
        <p className="mt-1.5 text-sm text-plum-soft">
          {campaign.spots} vagas · {campaign.deadline}
        </p>
        <p className="mt-1 text-sm text-plum-soft">
          {campaign.deliverables} · <span className="font-semibold text-plum">{campaign.fee}</span>
        </p>
        {showCta && (
          <span
            aria-hidden="true"
            className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-pink text-[1.1875rem] font-bold text-cream"
          >
            Quero participar
          </span>
        )}
      </div>
    </article>
  );
}
