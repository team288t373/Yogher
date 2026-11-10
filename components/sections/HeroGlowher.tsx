import Link from "next/link";
import LeadForm from "../LeadForm";
import SafeImage from "../SafeImage";
import { glowherContent, siteConfig, IMAGES } from "@/lib/content";

export default function HeroGlowher() {
  const { hero, heroPhoto } = glowherContent;

  const coachFacesRow = (
    <div className="flex items-center gap-3.5 pt-2">
      <div className="flex -space-x-3 overflow-hidden shrink-0">
        {IMAGES.glowherHeroAvatars.map((coach, idx) => (
          <div
            key={idx}
            className="relative w-[52px] h-[52px] rounded-full border-2 border-white overflow-hidden bg-softpink shrink-0 shadow-sm"
          >
            <SafeImage
              src={coach.src}
              alt={`${coach.name}, certified face yoga coach`}
              fill
              sizes="52px"
              className="object-cover object-top"
            />
          </div>
        ))}
      </div>
      <p className="text-xs sm:text-sm font-bold text-bordeaux/90 leading-snug">
        Live with certified face yoga coaches <span className="font-extrabold text-bordeaux">Manisha</span> and <span className="font-extrabold text-bordeaux">Ithieeka</span>
      </p>
    </div>
  );

  return (
    <section className="w-full pt-6 sm:pt-8 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 min-w-0">
        {/* Large Cotton Card with 40px radius */}
        <div className="bg-cotton p-6 sm:p-10 md:p-12 lg:p-14 rounded-card-xl border border-pink/40 shadow-sm w-full min-w-0 overflow-hidden">
          {heroPhoto && (
            <div
              style={{ position: "relative", overflow: "hidden", height: "180px", width: "100%" }}
              className="lg:hidden relative w-full h-[180px] rounded-[24px] overflow-hidden bg-white mb-6 shadow-sm"
            >
              <SafeImage
                src={heroPhoto.src}
                alt={heroPhoto.alt}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 780px"
                className="object-cover object-center"
              />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-w-0">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start min-w-0 w-full">
              {/* Chip */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-bordeaux text-xs sm:text-sm font-bold tracking-wide mb-5 shadow-sm border border-pink/20">
                <span className="w-2 h-2 rounded-full bg-bordeaux" />
                <span>{hero.chip}</span>
              </div>

              {/* H1 */}
              <h1 className="text-[36px] sm:text-[46px] md:text-[54px] lg:text-[64px] font-extrabold tracking-tightest text-bordeaux leading-[1.04] mb-5">
                {hero.h1}
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg lg:text-[18px] text-bordeaux font-medium leading-relaxed max-w-xl mb-6">
                {hero.sub}
              </p>

              {/* Desktop Buttons & Coach Faces */}
              <div className="hidden lg:flex flex-col gap-4 w-full">
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href={hero.ctaPrimaryHref}
                    className="min-h-[48px] px-8 py-3 rounded-full bg-bordeaux text-white font-bold text-sm tracking-wide shadow-md hover:opacity-95 transition-all text-center flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-bordeaux focus:ring-offset-2"
                  >
                    {hero.ctaPrimary}
                  </Link>
                  <a
                    href={siteConfig.glowherWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] px-6 py-3 rounded-full border-2 border-bordeaux text-bordeaux font-bold text-sm tracking-wide hover:bg-white/40 transition-all text-center flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-bordeaux"
                  >
                    {hero.ctaSecondary}
                  </a>
                </div>

                {/* Coach Faces under CTA buttons (Desktop) */}
                {coachFacesRow}
              </div>
            </div>

            {/* Right Column / Lead Form in soft-pink */}
            <div className="lg:col-span-5 w-full min-w-0">
              <LeadForm variant="batch" id="trial" />

              {/* Mobile Buttons directly below the form + Coach Faces */}
              <div className="lg:hidden flex flex-col gap-3.5 mt-6 w-full">
                <Link
                  href={hero.ctaPrimaryHref}
                  className="w-full min-h-[46px] flex items-center justify-center rounded-full bg-bordeaux text-white font-bold text-sm shadow-md"
                >
                  {hero.ctaPrimary}
                </Link>
                <a
                  href={siteConfig.glowherWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[46px] flex items-center justify-center rounded-full border-2 border-bordeaux text-bordeaux font-bold text-sm hover:bg-white/40"
                >
                  {hero.ctaSecondary}
                </a>

                {/* Coach Faces under form & buttons (Mobile) */}
                <div className="pt-2">
                  {coachFacesRow}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
