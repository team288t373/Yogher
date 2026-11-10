import { yogherContent } from "@/lib/content";

export default function OfferStrip() {
  return (
    <div className="w-full bg-bordeaux text-white py-2.5 px-4 text-center text-xs sm:text-sm font-semibold tracking-wide">
      <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-cotton animate-pulse" />
        <span>{yogherContent.offerStrip}</span>
      </div>
    </div>
  );
}
