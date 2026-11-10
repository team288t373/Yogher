import SafeImage from "../SafeImage";
import { glowherContent } from "@/lib/content";

export default function GlowReviews() {
  const { testimonials } = glowherContent;

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-16 sm:py-24 bg-white/40 border-t border-cotton/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-eyebrow text-bordeaux/90 mb-2 inline-block">
            Member Feedback
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold tracking-tightest text-bordeaux leading-tight">
            Glow stories from GlowHer members.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-card-lg border border-cotton shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cotton">
                    <SafeImage
                      src={t.image}
                      alt={t.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                      fallbackInitials={t.initials}
                    />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-bordeaux text-base">{t.name}</h3>
                    <span className="text-xs text-muted">{t.duration}</span>
                  </div>
                </div>
                <p className="text-muted text-sm italic">&ldquo;{t.quote}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
