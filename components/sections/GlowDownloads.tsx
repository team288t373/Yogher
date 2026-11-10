import { glowherContent } from "@/lib/content";

export default function GlowDownloads() {
  const { downloads } = glowherContent;

  if (!downloads || downloads.length === 0) {
    return null;
  }

  return (
    <section id="downloads" className="w-full py-16 sm:py-20 bg-cotton/30 border-b border-cotton">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-eyebrow text-bordeaux/90 mb-2 inline-block">
            Free Client Guides
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold tracking-tightest text-bordeaux leading-tight mb-3">
            Download your Face Yoga &amp; Abhyanga guides.
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            Read through our client reference material, weekly rhythms, and Ayurvedic self-care rituals anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {downloads.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-card-lg p-6 sm:p-7 border border-cotton shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cotton text-bordeaux text-xs font-bold">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span>{item.pages}</span>
                  </span>
                  <span className="text-xs font-semibold text-muted/80">{item.fileSize}</span>
                </div>

                <h3 className="text-xl font-extrabold text-bordeaux mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <a
                href={item.fileUrl}
                download={item.filename}
                className="inline-flex items-center justify-center gap-2 min-h-[46px] w-full px-6 py-3 rounded-full bg-bordeaux text-white font-bold text-sm hover:opacity-95 transition-opacity shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download PDF</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
