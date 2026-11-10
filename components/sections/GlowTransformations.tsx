"use client";

import Image from "next/image";
import { glowherContent } from "@/lib/content";

export default function GlowTransformations() {
  const { transformations } = glowherContent;

  if (!transformations || transformations.length === 0) {
    return null;
  }

  return (
    <section id="results" className="w-full py-16 sm:py-24 bg-softpink border-b border-cotton">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-eyebrow text-bordeaux/90 mb-2 inline-block">
            Real Client Results
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold tracking-tightest text-bordeaux leading-tight mb-3">
            Transformations that speak.
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            Real transformations from consistent Face Yoga and Abhyanga practice. No filters, no invasive treatments, and zero expensive tools.
          </p>
        </div>

        {/* Transformations Grid / Mobile Slider */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory px-4 sm:px-0 scroll-px-4 no-scrollbar">
          {transformations.map((t) => (
            <div
              key={t.id}
              className="w-[85%] max-w-[340px] md:w-auto md:max-w-none shrink-0 snap-start whitespace-normal bg-white rounded-card-lg border border-cotton shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Transformation Image */}
                <div className="relative w-full aspect-[4/5] bg-cotton overflow-hidden">
                  <Image
                    src={t.image}
                    alt={`${t.title} - ${t.focus}`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 85vw, (max-width: 1200px) 45vw, 360px"
                    className="object-cover object-top"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-bordeaux text-xs font-bold border border-cotton/60 shadow-sm">
                    {t.duration}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-extrabold text-bordeaux mb-1 leading-snug">
                    {t.title}
                  </h3>
                  <p className="text-xs font-bold text-muted/90 uppercase tracking-wide mb-2.5">
                    {t.focus}
                  </p>
                  {t.quote && (
                    <p className="text-xs sm:text-sm text-muted leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  )}
                </div>
              </div>

              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                <span className="inline-block text-[11px] font-semibold text-bordeaux bg-cotton/50 px-2.5 py-1 rounded-full">
                  Verified YogHer Member
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-center gap-1.5 pt-4 text-xs font-semibold text-muted">
          <span>Swipe to see all transformations</span>
          <span aria-hidden="true">→</span>
        </div>

        {/* Note on Individual Timelines */}
        <p className="text-center text-xs text-muted/80 max-w-xl mx-auto mt-8">
          Every face is unique. These results reflect individual experiences with consistent practice. Your timeline may vary based on skin texture, lifestyle, and practice regularity.
        </p>
      </div>
    </section>
  );
}
