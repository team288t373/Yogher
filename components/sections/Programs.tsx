"use client";

import SafeImage from "../SafeImage";
import { yogherContent } from "@/lib/content";

export default function Programs() {
  const { programs } = yogherContent;

  const handleProgramClick = (title: string) => {
    // Map program title to corresponding goal in the LeadForm
    const goalMap: Record<string, string> = {
      "Weight Loss": "Weight loss",
      "Fat Loss": "Fat loss",
      "PCOS and Irregular Periods": "PCOS / irregular periods",
      "Pregnancy Yoga": "Pregnancy yoga",
      "Body Toning": "Body toning",
      "Stress Relief and Fitness": "Stress relief / fitness",
    };
    const goal = goalMap[title] || title;
    window.dispatchEvent(new CustomEvent("yogher-select-goal", { detail: { goal } }));
  };

  return (
    <section id="programs" className="w-full py-16 sm:py-24 bg-white border-y border-cotton/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-eyebrow text-bordeaux/90 mb-2 inline-block">
            Programs
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold tracking-tightest text-bordeaux leading-tight">
            One program for every chapter of her life.
          </h2>
        </div>

        {/* Mobile Compact Rows (< md) */}
        <div className="md:hidden flex flex-col gap-3.5">
          {programs.map((program, idx) => (
            <a
              key={idx}
              href="#diet"
              onClick={() => handleProgramClick(program.title)}
              className="bg-softpink/40 p-3.5 rounded-card border border-cotton shadow-sm flex items-center gap-3.5 active:bg-cotton/30 transition-colors"
            >
              <div className="w-[72px] h-[72px] rounded-card-sm overflow-hidden bg-cotton shrink-0 relative shadow-sm">
                <SafeImage
                  src={program.image}
                  alt={`${program.title} yoga practice`}
                  fill
                  sizes="72px"
                  className="object-cover object-center"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10px] font-extrabold text-muted uppercase tracking-wider">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-bordeaux leading-snug">
                    {program.title}
                  </h3>
                </div>
                <p className="text-muted text-xs leading-relaxed line-clamp-1">
                  {program.description}
                </p>
              </div>
              <span className="text-bordeaux text-sm shrink-0" aria-hidden="true">
                →
              </span>
            </a>
          ))}
        </div>

        {/* Desktop Cards (>= md) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="bg-softpink/30 rounded-card-lg border border-cotton shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Photo on top with 4/3 aspect ratio */}
                <div className="relative w-full aspect-[4/3] bg-cotton overflow-hidden">
                  <SafeImage
                    src={program.image}
                    alt={`${program.title} yoga practice`}
                    fill
                    sizes="(min-width: 1024px) 360px, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-bordeaux font-extrabold text-xs shadow-sm">
                    0{idx + 1}
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-extrabold text-bordeaux mb-2.5">
                    {program.title}
                  </h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0">
                <a
                  href="#diet"
                  onClick={() => handleProgramClick(program.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-bordeaux hover:text-muted transition-colors"
                >
                  <span>Book free trial for this goal</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
