"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { track, type AnalyticsEvent } from "@/lib/analytics";

type Variant = "primary" | "secondary" | "plum" | "cream" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  // Texto creme sobre Match Pink: bold 19px+ para valer como texto grande no critério AA
  primary: "bg-pink text-cream hover:bg-pink-dark shadow-pop",
  secondary: "border-2 border-plum/80 text-plum hover:bg-plum hover:text-cream",
  plum: "bg-plum text-cream hover:bg-plum/90",
  cream: "bg-cream text-pink-ink hover:bg-white",
  ghost: "text-plum underline-offset-4 hover:underline",
};

const sizes: Record<Size, string> = {
  md: "min-h-12 px-6 py-3 text-[1.1875rem]",
  lg: "min-h-14 px-8 py-4 text-[1.1875rem]",
};

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  event?: AnalyticsEvent;
  eventParams?: Record<string, string>;
};

type AsLink = Common & { href: string; onClick?: never; type?: never; disabled?: never };
type AsButton = Common & {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button(props: AsLink | AsButton) {
  const { variant = "primary", size = "md", className, children, event, eventParams } = props;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full text-center font-bold leading-tight transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );

  const handleTrack = () => {
    if (event) track(event, eventParams);
  };

  if (props.href !== undefined) {
    return (
      <Link href={props.href} className={classes} onClick={handleTrack}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      disabled={props.disabled}
      className={classes}
      onClick={() => {
        handleTrack();
        props.onClick?.();
      }}
    >
      {children}
    </button>
  );
}
