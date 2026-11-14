import Link from "next/link";
import LeadForm from "../LeadForm";
import SafeImage from "../SafeImage";
import { yogherContent, siteConfig, IMAGES } from "@/lib/content";

export default function HeroYogher() {
  const { hero } = yogherContent;

  return (
    <section className="relative w-full pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 min-w-0">
        {/* Mobile Banner: Directly above H1 (< lg) */}
        <div
          style={{ position: "relative", overflow: "hidden", height: "180px", width: "100%" }}
          className="lg:hidden relative w-full h-[180px] rounded-[24px] overflow-hidden bg-cotton mb-6 shadow-sm"
        >
          <SafeImage
            src={IMAGES.heroLiveClass}
            alt="Woman practising yoga at home in front of laptop showing live class on Google Meet"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 780px"
            className="object-cover object-center"
          />
          {/* Floating Chip on Mobile Banner */}
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-bordeaux flex items-center gap-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Live on Google Meet</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start min-w-0">
          {/* Left Column (Desktop & Mobile Content) */}
          <div className="lg:col-span-7 flex flex-col items-start pt-1 min-w-0 w-full">
            {/* Pill Chip with Equal Size Dots and Flexible Timings */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-cotton border border-cotton/60 text-bordeaux text-xs sm:text-sm font-bold tracking-wide mb-4">
              <span className="w-2 h-2 rounded-full bg-bordeaux shrink-0" />
              <span>Live online</span>
              <span className="w-1.5 h-1.5 rounded-full bg-bordeaux/60 shrink-0" aria-hidden="true" />
              <span>Flexible timings</span>
              <span className="w-1.5 h-1.5 rounded-full bg-bordeaux/60 shrink-0" aria-hidden="true" />
              <span>Mon to Sat (5 AM to 9 PM IST)</span>
              <span className="w-1.5 h-1.5 rounded-full bg-bordeaux/60 shrink-0" aria-hidden="true" />
              <span>Women only</span>
            </div>

            {/* H1 */}
            <h1 className="text-[25px] sm:text-[32px] md:text-[40px] lg:text-[46px] font-extrabold tracking-tightest text-bordeaux leading-[1.14] mb-4">
              {hero.h1}
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg lg:text-[18px] text-muted leading-relaxed max-w-xl mb-6">
              {hero.sub}
            </p>

            {/* Mobile Form: In mobile flow right after sub-headline (H1 -> sub -> form -> buttons) */}
            <div className="lg:hidden w-full mb-6">
              <LeadForm variant="diet" id="diet" />
            </div>

            {/* CTA Buttons (Desktop & Mobile) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6 w-full sm:w-auto">
              <Link
                href={hero.ctaPrimaryHref}
                className="min-h-[48px] px-7 py-3 rounded-full bg-bordeaux text-white font-bold text-sm tracking-wide shadow-md hover:opacity-95 transition-all text-center flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-bordeaux focus:ring-offset-2"
              >
                {hero.ctaPrimary}
              </Link>
              <a
                href={siteConfig.yogherWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-6 py-3 rounded-full border-2 border-bordeaux text-bordeaux font-bold text-sm tracking-wide hover:bg-cotton/30 transition-all text-center flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-bordeaux"
              >
                {hero.ctaSecondary}
              </a>
            </div>

            {/* Avatar Stack under CTA Buttons (Desktop and Mobile) */}
            <div className="flex items-center gap-3.5 pt-1">
              <div className="flex -space-x-3 overflow-hidden shrink-0">
                {IMAGES.heroAvatars.map((avatar, idx) => (
                  <div
                    key={idx}
                    className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-cotton shrink-0 shadow-sm"
                  >
                    <SafeImage
                      src={avatar.src}
                      alt={`${avatar.name}, YogHer member`}
                      fill
                      sizes="40px"
                      className="object-cover object-top"
                    />
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-bordeaux/90 leading-snug">
                <strong className="font-extrabold text-bordeaux">5,000+ women</strong> have started their YogHer journey
              </p>
            </div>
          </div>

          {/* Right Column / Desktop Photo Panel with Overlapping Form (lg and up) */}
          <div className="hidden lg:block lg:col-span-5 w-full min-w-0">
            <div className="relative w-full h-[580px] lg:h-[600px] flex items-end">
              {/* Rounded Photo Panel */}
              <div className="absolute inset-0 rounded-[32px] overflow-hidden bg-cotton shadow-md">
                <SafeImage
                  src={IMAGES.heroLiveClass}
                  alt="Woman practising yoga at home in front of laptop showing live class on Google Meet"
                  fill
                  priority
                  sizes="(min-width: 1024px) 560px, 1100px"
                  className="object-cover object-center"
                />
                {/* Floating Chip top-right */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-xs font-bold text-bordeaux flex items-center gap-2 shadow-md z-10">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Live on Google Meet</span>
                </div>
              </div>

              {/* Overlapping Lead Form Card anchored to bottom-left */}
              <div className="relative z-20 w-[105%] max-w-[420px] -ml-12 mb-3 shadow-2xl rounded-card-lg">
                <LeadForm variant="diet" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
