import Link from "next/link";
import SafeImage from "../SafeImage";
import { glowherContent } from "@/lib/content";

export default function GlowCoaches() {
  const { coaches } = glowherContent;

  return (
    <section className="w-full py-16 sm:py-24 bg-white border-y border-cotton/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-eyebrow text-bordeaux/90 mb-2 inline-block">
            Your coaches
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold tracking-tightest text-bordeaux leading-tight">
            Certified face yoga instructors.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {coaches.map((coach, idx) => (
            <div
              key={idx}
              className="bg-softpink/30 rounded-card-lg border border-cotton shadow-sm overflow-hidden flex flex-col p-5 sm:p-7 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 justify-between"
            >
              <div>
                {/* Coach Profile Row */}
                <div className="flex flex-row items-center gap-4 sm:gap-6 mb-5">
                  {/* Portrait Photo Area */}
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-card-sm overflow-hidden bg-cotton shrink-0 shadow-sm">
                    <SafeImage
                      src={coach.image}
                      alt={`${coach.name}, GlowHer face yoga instructor`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 80px, 112px"
                      className="object-cover object-top"
                      fallbackInitials={coach.initials}
                    />
                  </div>

                  {/* Info Area */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-bordeaux mb-1 leading-snug">
                      {coach.name}
                    </h3>
                    <p className="text-bordeaux font-semibold text-xs sm:text-sm mb-1 leading-snug">
                      {coach.role}
                    </p>
                    <p className="text-muted text-xs sm:text-sm leading-relaxed mb-2">
                      {coach.experience}
                    </p>
                    <Link
                      href="/#coaches"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-bordeaux hover:underline transition-colors"
                    >
                      <span>Also teaches regular live yoga at YogHer</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>

                {/* Practice Photos Gallery: 3 small photos (aspect-square, radius 14px) */}
                {coach.gallery && coach.gallery.length > 0 && (
                  <div className="pt-3 border-t border-cotton/60">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-muted/70 block mb-2.5">
                      Practice Gallery
                    </span>
                    <div className="grid grid-cols-3 gap-2.5">
                      {coach.gallery.map((imgSrc, imgIdx) => (
                        <div
                          key={imgIdx}
                          className="relative aspect-square rounded-[14px] overflow-hidden bg-cotton shadow-sm group"
                        >
                          <SafeImage
                            src={imgSrc}
                            alt={`${coach.name} practice pose ${imgIdx + 1}`}
                            fill
                            loading="lazy"
                            sizes="(min-width: 640px) 150px, 90px"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
