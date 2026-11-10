import { yogherContent } from "@/lib/content";
import { ClipboardCheck, Utensils, Clock, Video } from "lucide-react";

const STEP_ICONS = [
  ClipboardCheck,
  Utensils,
  Clock,
  Video,
];

export default function HowItWorks() {
  const { howItWorks } = yogherContent;

  return (
    <section id="how" className="w-full py-16 sm:py-24 bg-softpink/60">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-eyebrow text-bordeaux/90 mb-2 inline-block">
            How it works
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold tracking-tightest text-bordeaux leading-tight">
            On the mat by tomorrow morning.
          </h2>
        </div>

        {/* Mobile Simple List (< md) */}
        <div className="md:hidden flex flex-col gap-3.5">
          {howItWorks.map((step, idx) => {
            const Icon = STEP_ICONS[idx % STEP_ICONS.length];
            return (
              <div
                key={idx}
                className="flex items-center gap-4 bg-white p-4 rounded-card border border-cotton shadow-sm"
              >
                <div className="w-[52px] h-[52px] rounded-full bg-cotton text-bordeaux flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 stroke-[2]" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-extrabold text-muted uppercase tracking-widest block mb-0.5">
                    Step {step.step}
                  </span>
                  <h3 className="text-base font-bold text-bordeaux leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed mt-0.5">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Cards (>= md) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map((step, idx) => {
            const Icon = STEP_ICONS[idx % STEP_ICONS.length];
            return (
              <div
                key={idx}
                className="relative bg-white p-7 rounded-card-lg border border-cotton shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-[52px] h-[52px] rounded-full bg-cotton text-bordeaux flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 stroke-[2]" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-extrabold text-muted/70 tracking-widest uppercase">
                      Step {step.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-bordeaux mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-cotton border border-white text-bordeaux text-xs font-bold text-center leading-6 pointer-events-none">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
