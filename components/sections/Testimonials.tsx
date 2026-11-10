import SafeImage from "../SafeImage";
import { yogherContent } from "@/lib/content";

export default function Testimonials() {
  const { testimonials } = yogherContent;

  return (
    <section className="w-full py-16 sm:py-24 bg-softpink/60 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-eyebrow text-bordeaux/90 mb-2 inline-block">
            Success stories
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold tracking-tightest text-bordeaux leading-tight">
            Real women. Real results.
          </h2>
        </div>

        {/* Mobile Horizontal Scroll-Snap Slider / Desktop 3-Card Grid */}
        <div className="flex md:grid md:grid-cols-3 gap-4 lg:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory px-4 sm:px-0 scroll-px-4 no-scrollbar">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="w-[85%] max-w-[340px] md:w-auto md:max-w-none shrink-0 snap-start whitespace-normal bg-white p-5 sm:p-6 lg:p-8 rounded-card-lg border border-cotton shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between min-w-0"
            >
              <div>
                <div className="flex items-center gap-3.5 sm:gap-4 mb-5 sm:mb-6 min-w-0">
                  {/* Larger Member Photo (80px on mobile/tablet, 96px on desktop) */}
                  <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-cotton shrink-0 bg-cotton shadow-sm">
                    <SafeImage
                      src={t.image}
                      alt={`${t.name}, YogHer member`}
                      fill
                      loading="lazy"
                      sizes="(min-width: 1024px) 96px, 80px"
                      className="object-cover object-top"
                      fallbackInitials={t.initials}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-extrabold text-bordeaux text-base sm:text-lg lg:text-xl leading-tight">
                      {t.name}
                    </h3>
                    <span className="text-[11px] sm:text-xs font-semibold text-muted bg-cotton/50 px-2.5 py-0.5 rounded-full inline-block mt-1">
                      {t.duration}
                    </span>
                  </div>
                </div>

                <p className="text-muted text-sm sm:text-base italic leading-relaxed break-words">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-center gap-1.5 pt-4 text-xs font-semibold text-muted">
          <span>Swipe to see all stories</span>
          <span aria-hidden="true">→</span>
        </div>
      </div>
    </section>
  );
}
