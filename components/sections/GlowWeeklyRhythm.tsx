import { glowherContent } from "@/lib/content";

export default function GlowWeeklyRhythm() {
  const { weeklyRhythm } = glowherContent;

  return (
    <section id="rhythm" className="w-full py-16 sm:py-24 bg-white border-y border-cotton/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-eyebrow text-bordeaux/90 mb-2 inline-block">
            Your Weekly Rhythm
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold tracking-tightest text-bordeaux leading-tight mb-4">
            Monday to Friday. Face Yoga + Abhyanga.
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            Thoughtfully balanced between two complementary practices — 3 days of Face Yoga for lift, tone and symmetry, and 2 days of Ayurvedic Abhyanga for lymphatic drainage and calming circulation.
          </p>
        </div>

        {/* 3 Highlights Pill Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12 text-center">
          <div className="bg-cotton/40 rounded-card p-4 border border-cotton">
            <span className="text-2xl sm:text-3xl font-extrabold text-bordeaux block mb-1">3 Days</span>
            <span className="text-xs sm:text-sm font-semibold text-muted">Face Yoga for Lift & Tone</span>
          </div>
          <div className="bg-cotton/40 rounded-card p-4 border border-cotton">
            <span className="text-2xl sm:text-3xl font-extrabold text-bordeaux block mb-1">2 Days</span>
            <span className="text-xs sm:text-sm font-semibold text-muted">Abhyanga for Calm & Flow</span>
          </div>
          <div className="bg-cotton/40 rounded-card p-4 border border-cotton">
            <span className="text-2xl sm:text-3xl font-extrabold text-bordeaux block mb-1">5 Days</span>
            <span className="text-xs sm:text-sm font-semibold text-muted">Mon–Fri Consistent Self-Care</span>
          </div>
        </div>

        {/* 5-Day Weekly Flow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {weeklyRhythm.map((item, idx) => {
            const isAbhyanga = item.type === "abhyanga";
            return (
              <div
                key={idx}
                className={`rounded-card-lg p-5 sm:p-6 border flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-sm ${
                  isAbhyanga
                    ? "bg-cotton/50 border-cotton/90"
                    : "bg-softpink/60 border-cotton"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-extrabold tracking-wider text-muted uppercase">
                      {item.day}
                    </span>
                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        isAbhyanga
                          ? "bg-bordeaux text-white"
                          : "bg-cotton text-bordeaux border border-cotton/80"
                      }`}
                    >
                      {item.practice}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-bordeaux mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-muted text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-cotton/40 mt-4 text-[11px] font-bold text-bordeaux/80">
                  30 mins · Live Meet
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Individual Guidance */}
        <div className="mt-8 p-4 sm:p-5 rounded-card bg-cotton/20 border border-cotton/60 text-center max-w-2xl mx-auto text-xs sm:text-sm text-muted">
          <strong className="font-bold text-bordeaux">Personalized guidance:</strong> The exact sequence of face exercises and Abhyanga strokes is guided individually by your teacher, customized to your face structure, skin concerns, and comfort.
        </div>
      </div>
    </section>
  );
}
