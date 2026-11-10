import SafeImage from "../SafeImage";
import { yogherContent } from "@/lib/content";

export default function JournalSection() {
  const { journal } = yogherContent;

  return (
    <section className="w-full py-16 sm:py-24 bg-softpink/60">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-eyebrow text-bordeaux/90 mb-2 inline-block">
            Our journal
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold tracking-tightest text-bordeaux leading-tight">
            From our journal.
          </h2>
        </div>

        {/* Mobile Swipe Row / Desktop 4-Column Grid */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory px-4 sm:px-0 scroll-px-4 no-scrollbar">
          {journal.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="group w-[85%] max-w-[300px] md:w-auto md:max-w-none shrink-0 snap-start whitespace-normal bg-white p-4 sm:p-5 rounded-card-lg border border-cotton shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Cover Image: aspect-[4/3], radius 20px */}
                <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden bg-cotton mb-4 shadow-sm">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 280px, (min-width: 768px) 45vw, 85vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="font-extrabold text-bordeaux text-base sm:text-lg mb-2 leading-snug group-hover:text-bordeaux-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted text-xs sm:text-sm leading-relaxed line-clamp-2">
                  {item.excerpt}
                </p>
              </div>

              <div className="pt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-bordeaux group-hover:text-bordeaux-light transition-colors">
                <span>Read article</span>
                <span aria-hidden="true">→</span>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-center gap-1.5 pt-4 text-xs font-semibold text-muted">
          <span>Swipe to read more articles</span>
          <span aria-hidden="true">→</span>
        </div>
      </div>
    </section>
  );
}
