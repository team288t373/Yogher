import SafeImage from "../SafeImage";
import { yogherContent } from "@/lib/content";

export default function Testimonials() {
  const { testimonials } = yogherContent;

  return (
    <section id="reviews" className="w-full py-16 sm:py-24 bg-softpink/60 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-eyebrow text-bordeaux/90 mb-2 inline-block">
            Success Stories
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[46px] font-extrabold tracking-tightest text-bordeaux leading-tight mb-3">
            Real women. Real results.
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-lg mx-auto">
            Hear transformation stories and daily habit breakthroughs from women in our live batches.
          </p>
        </div>

        {/* Member Testimonials Grid */}
        <div className="flex md:grid md:grid-cols-3 gap-4 lg:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory px-4 sm:px-0 scroll-px-4 no-scrollbar touch-pan-x">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="w-[85%] max-w-[340px] md:w-auto md:max-w-none shrink-0 snap-start whitespace-normal bg-white p-6 sm:p-7 lg:p-8 rounded-card-lg border border-cotton shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between min-w-0"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 text-amber-500 mb-4" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Member Profile */}
                <div className="flex items-center gap-3.5 sm:gap-4 mb-5 sm:mb-6 min-w-0">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-cotton shrink-0 bg-cotton shadow-sm">
                    <SafeImage
                      src={t.image}
                      alt={`${t.name}, YogHer member`}
                      fill
                      loading="lazy"
                      sizes="(min-width: 640px) 80px, 64px"
                      className="object-cover object-top"
                      fallbackInitials={t.initials}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-extrabold text-bordeaux text-base sm:text-lg leading-tight">
                      {t.name}
                    </h3>
                    <span className="text-[11px] sm:text-xs font-semibold text-muted bg-cotton/50 px-2.5 py-0.5 rounded-full inline-block mt-1">
                      {t.duration}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-muted text-sm sm:text-base italic leading-relaxed break-words">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Verified Member Badge */}
              <div className="pt-5 mt-5 border-t border-cotton/40 flex items-center gap-1.5 text-xs font-bold text-bordeaux">
                <svg className="w-4 h-4 text-emerald-600 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Verified YogHer Member</span>
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
