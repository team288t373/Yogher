import SafeImage from "../SafeImage";
import { yogherContent } from "@/lib/content";

export default function Coaches() {
  const { coaches } = yogherContent;

  return (
    <section id="coaches" className="w-full py-16 sm:py-24 bg-white border-y border-cotton/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-eyebrow text-bordeaux/90 mb-2 inline-block">
            Coaches
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold tracking-tightest text-bordeaux leading-tight">
            Certified women coaches who understand a woman&apos;s body.
          </h2>
        </div>

        {/* Mobile Horizontal Scroll-Snap Slider / Desktop Grid */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory px-4 sm:px-0 scroll-px-4 no-scrollbar">
          {coaches.map((coach, idx) => (
            <div
              key={idx}
              className="group w-[85%] max-w-[320px] md:w-auto md:max-w-none shrink-0 snap-start whitespace-normal bg-softpink/30 rounded-card-lg border border-cotton shadow-sm overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Photo Area with 4:3 ratio on mobile / 4:5 on desktop */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[4/5] bg-cotton overflow-hidden">
                {/* Default Portrait Photo */}
                <SafeImage
                  src={coach.image}
                  alt={`${coach.name}, YogHer yoga coach portrait`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 85vw, (max-width: 1200px) 45vw, 360px"
                  className="object-cover object-top transition-opacity duration-300 md:group-hover:opacity-0"
                  fallbackInitials={coach.initials}
                />

                {/* Practice Photo on Desktop Hover */}
                {coach.practiceImage && (
                  <SafeImage
                    src={coach.practiceImage}
                    alt={`${coach.name} in yoga posture`}
                    fill
                    loading="lazy"
                    sizes="(min-width: 768px) 45vw, 360px"
                    className="object-cover object-center hidden md:block opacity-0 transition-opacity duration-300 md:group-hover:opacity-100"
                  />
                )}

                <div className="absolute top-3 right-3 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-bordeaux text-xs font-bold border border-cotton/60 shadow-sm z-10">
                  {coach.experience}
                </div>
              </div>

              {/* Coach Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-bordeaux mb-1">
                    {coach.name}
                  </h3>
                  <p className="text-muted text-sm font-medium">
                    {coach.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-center gap-1.5 pt-4 text-xs font-semibold text-muted">
          <span>Swipe to see all coaches</span>
          <span aria-hidden="true">→</span>
        </div>
      </div>
    </section>
  );
}
