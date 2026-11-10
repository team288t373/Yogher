import { yogherContent } from "@/lib/content";

export default function FAQSection() {
  const { faqs } = yogherContent;

  return (
    <section id="faq" className="w-full py-16 sm:py-24 bg-white border-t border-cotton/40">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-eyebrow text-bordeaux/90 mb-2 inline-block">
            FAQ
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold tracking-tightest text-bordeaux leading-tight">
            Questions women ask most.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white rounded-card border border-cotton p-5 sm:p-6 shadow-sm transition-all open:shadow-md [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none select-none text-left font-bold text-base sm:text-lg text-bordeaux focus:outline-none focus-visible:ring-2 focus-visible:ring-bordeaux rounded-lg pr-2">
                <span>{faq.question}</span>
                <span className="w-8 h-8 rounded-full bg-cotton flex items-center justify-center text-bordeaux flex-shrink-0 ml-4 transition-transform group-open:rotate-180">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-muted text-sm sm:text-base leading-relaxed border-t border-cotton/40 pt-4">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
