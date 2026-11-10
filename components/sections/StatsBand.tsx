import { yogherContent } from "@/lib/content";

export default function StatsBand() {
  return (
    <section className="w-full bg-bordeaux text-softpink py-12 border-y border-bordeaux-light">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-bordeaux-light/50">
          {yogherContent.stats.map((stat, i) => (
            <div key={i} className={`flex flex-col items-center justify-center ${i > 1 ? "pt-6 md:pt-0" : ""}`}>
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tightest text-white mb-1">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cotton">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
