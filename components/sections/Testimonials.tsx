"use client";

import { useRef, useState, useEffect } from "react";
import SafeImage from "../SafeImage";
import { yogherContent } from "@/lib/content";

export default function Testimonials() {
  const { testimonials } = yogherContent;
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        // If reached or near the end, loop smoothly back to start
        if (scrollLeft + clientWidth >= scrollWidth - 25) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          sliderRef.current.scrollBy({ left: 360, behavior: "smooth" });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <section id="reviews" className="w-full py-16 sm:py-24 bg-softpink/60 overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header with Title and Left/Right Navigation Arrows */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-eyebrow text-bordeaux/90 mb-2 inline-block">
              Success Stories
            </span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[46px] font-extrabold tracking-tightest text-bordeaux leading-tight mb-2">
              Real women. Real results.
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-lg">
              Hear transformation stories and daily habit breakthroughs from women in our live batches.
            </p>
          </div>

          {/* Slider Navigation Arrows */}
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
            <button
              type="button"
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-cotton bg-white text-bordeaux hover:bg-cotton shadow-sm flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-bordeaux"
              aria-label="Previous review"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-cotton bg-white text-bordeaux hover:bg-cotton shadow-sm flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-bordeaux"
              aria-label="Next review"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Auto-Scrolling Member Testimonials Carousel */}
        <div
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          style={{ touchAction: "pan-x pan-y" }}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-proximity px-1 sm:px-0 scroll-px-4 no-scrollbar scroll-smooth overscroll-x-contain overscroll-y-auto"
        >
          {testimonials.map((t, idx) => (
            <article
              key={idx}
              style={{ touchAction: "pan-x pan-y" }}
              className="w-[85%] max-w-[340px] sm:w-[350px] md:w-[370px] shrink-0 snap-start whitespace-normal bg-white p-6 sm:p-7 rounded-card-lg border border-cotton shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between select-none"
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
              <div className="pt-5 mt-5 border-t border-cotton/40 flex items-center justify-between text-xs font-bold text-bordeaux">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-600 fill-current" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Verified YogHer Member</span>
                </span>
                <span className="text-muted text-[11px] font-normal">Google Meet Batch</span>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Swipe Hint and Auto-Scroll Status */}
        <div className="flex items-center justify-between pt-3 text-xs font-semibold text-muted px-1">
          <span className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${isPaused ? "bg-amber-400" : "bg-emerald-500 animate-pulse"}`} />
            <span>{isPaused ? "Paused" : "Auto-scrolling"}</span>
          </span>
          <span className="flex items-center gap-1">
            <span>Swipe to explore all {testimonials.length} stories</span>
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </section>
  );
}
