import SafeImage from "../SafeImage";
import { glowherContent, IMAGES } from "@/lib/content";
import { ArrowUpRight, Sparkles, Waves, CalendarCheck } from "lucide-react";

const BENEFIT_ICONS = [
  ArrowUpRight,
  Sparkles,
  Waves,
  CalendarCheck,
];

export default function GlowBenefits() {
  const { benefits } = glowherContent;

  return (
    <section id="benefits" className="w-full py-16 sm:py-24 bg-softpink/60">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-eyebrow text-bordeaux/90 mb-2 inline-block">
            Why face yoga
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold tracking-tightest text-bordeaux leading-tight">
            Your face has more than 40 muscles. Most of them never get a workout.
          </h2>
        </div>

        {/* Mobile Banner: 200px banner above cards (< md) */}
        <div className="md:hidden relative w-full h-[200px] rounded-[24px] overflow-hidden bg-cotton mb-6 shadow-sm">
          <SafeImage
            src={IMAGES.glowherBenefits}
            alt="Woman with calm face lifted towards the sky"
            fill
            loading="lazy"
            sizes="(max-width: 767px) 100vw, 600px"
            className="object-cover object-center"
          />
        </div>

        {/* Desktop Layout: Photo on Left (aspect-[3/4], radius 28px) + 2x2 Grid on Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Desktop Left Column Photo */}
          <div className="hidden md:block md:col-span-5">
            <div className="relative w-full h-full min-h-[460px] aspect-[3/4] rounded-[28px] overflow-hidden bg-cotton shadow-md">
              <SafeImage
                src={IMAGES.glowherBenefits}
                alt="Woman with calm face lifted towards the sky"
                fill
                loading="lazy"
                sizes="(min-width: 768px) 45vw, 480px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column (2x2 Grid of Benefit Cards) */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = BENEFIT_ICONS[idx % BENEFIT_ICONS.length];
              return (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-7 rounded-card-lg border border-cotton shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-[52px] h-[52px] rounded-full bg-cotton text-bordeaux flex items-center justify-center shrink-0 mb-5">
                      <Icon className="w-7 h-7 stroke-[2]" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-extrabold text-bordeaux mb-2 leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-muted text-sm sm:text-base leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
