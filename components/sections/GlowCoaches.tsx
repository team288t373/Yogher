import SafeImage from "../SafeImage";
import { glowherContent } from "@/lib/content";

export default function GlowCoaches() {
  const { coaches } = glowherContent;

  return (
    <section id="coaches" className="w-full py-12 sm:py-20 bg-white border-y border-cotton/40">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-eyebrow text-bordeaux/90 mb-2 inline-block">
            Your coaches
          </span>
          <h2 className="text-[26px] sm:text-[34px] md:text-[42px] font-extrabold tracking-tightest text-bordeaux leading-tight">
            Certified face yoga instructors.
          </h2>
        </div>

        {/* Compact Coach Cards: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-5">
          {coaches.map((coach, idx) => (
            <div
              key={idx}
              className="group bg-softpink/30 hover:bg-softpink/60 rounded-2xl border border-cotton/80 p-3 sm:p-3.5 flex flex-col items-center text-center shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-cotton shadow-xs mb-2.5">
                <SafeImage
                  src={coach.image}
                  alt={`${coach.name}, GlowHer face yoga instructor`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 220px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  fallbackInitials={coach.initials}
                />
              </div>

              {/* Coach Name */}
              <h3 className="text-sm sm:text-base font-extrabold text-bordeaux leading-snug">
                {coach.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
