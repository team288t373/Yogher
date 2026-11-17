import { yogherContent } from "@/lib/content";

export default function OfferStrip() {
  const offerMessage = "Hi YogHer! I want to claim the 3-Month Progress plan offer at 60% off. Please share the offer details and batch timings.";
  const offerWhatsAppUrl = `https://wa.me/918679244416?text=${encodeURIComponent(offerMessage)}`;

  return (
    <a
      href={offerWhatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full bg-bordeaux hover:bg-[#46101f] text-white py-2.5 px-4 text-center text-xs sm:text-sm font-semibold tracking-wide transition-colors group cursor-pointer"
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span className="inline-block w-2 h-2 rounded-full bg-cotton animate-pulse" />
        <span>{yogherContent.offerStrip}</span>
        <span className="underline font-bold text-cotton group-hover:text-white transition-colors ml-1">
          Claim on WhatsApp →
        </span>
      </div>
    </a>
  );
}
