import { glowherContent } from "@/lib/content";
import { Clock, CalendarCheck, Tag, Sparkles } from "lucide-react";

const FACT_ICONS = [Clock, CalendarCheck, Tag, Sparkles];

export default function QuickFacts() {
  const { quickFacts } = glowherContent;

  return (
    <section className="w-full py-12 bg-white border-y border-cotton/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickFacts.map((fact, idx) => {
            const Icon = FACT_ICONS[idx % FACT_ICONS.length];
            return (
              <div
                key={idx}
                className="pt-6 border-t-2 border-bordeaux flex flex-col justify-between"
              >
                <div className="w-[52px] h-[52px] rounded-full bg-cotton text-bordeaux flex items-center justify-center shrink-0 mb-4">
                  <Icon className="w-7 h-7 stroke-[2]" aria-hidden="true" />
                </div>
                <p className="text-lg sm:text-xl font-extrabold text-bordeaux leading-snug">
                  {fact}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
