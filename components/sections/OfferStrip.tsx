import { yogherContent } from "@/lib/content";

export default function OfferStrip() {
  return (
    <div className="w-full bg-bordeaux text-white py-2 sm:py-2.5 px-4 text-center text-xs sm:text-sm font-semibold tracking-wide">
      <p className="max-w-[1200px] mx-auto leading-snug">
        {yogherContent.offerStrip}
      </p>
    </div>
  );
}
