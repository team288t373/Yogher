import SafeImage from "../SafeImage";
import { yogherContent } from "@/lib/content";

export default function CoachStrip() {
  const { coachStrip } = yogherContent;

  // Duplicate for seamless infinite marquee loop
  const duplicatedList = [...coachStrip, ...coachStrip];

  return (
    <section className="w-full max-w-full py-16 sm:py-24 bg-white border-y border-cotton/40 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-8 sm:mb-12 text-center">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-eyebrow text-bordeaux/90 mb-2 inline-block">
          Our coaches
        </span>
        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold tracking-tightest text-bordeaux leading-tight">
          Real coaches. Real practice.
        </h2>
      </div>

      {/* Marquee Wrapper: CSS-only marquee, pauses on hover, stops with prefers-reduced-motion */}
      <div className="relative w-full max-w-full overflow-hidden motion-reduce:overflow-x-auto motion-reduce:px-4 no-scrollbar">
        <div className="animate-marquee motion-reduce:animate-none flex gap-4 sm:gap-5 py-2">
          {duplicatedList.map((coach, idx) => (
            <div
              key={`${coach.name}-${idx}`}
              className="relative w-[160px] h-[210px] sm:w-[220px] sm:h-[280px] shrink-0 rounded-[20px] overflow-hidden bg-cotton shadow-sm group hover:shadow-md transition-shadow"
            >
              <SafeImage
                src={coach.image}
                alt={`YogHer coach ${coach.name} practising yoga`}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 220px, 160px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              {/* Caption Chip with Coach's Name */}
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold text-bordeaux shadow-sm pointer-events-none">
                {coach.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
