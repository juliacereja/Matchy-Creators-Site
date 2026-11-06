import { cn } from "@/lib/cn";

/** Moldura de celular para os mockups do app. */
export function PhoneFrame({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[18.5rem] rounded-[3rem] bg-plum p-3 shadow-soft sm:w-[20rem]",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-[2.4rem] bg-cream">
        <div aria-hidden="true" className="absolute left-1/2 top-2.5 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-plum" />
        <div className="flex items-center justify-between px-6 pb-1 pt-3 text-[0.7rem] font-semibold text-plum" aria-hidden="true">
          <span>9:41</span>
          <span>5G</span>
        </div>
        {children}
      </div>
    </div>
  );
}
