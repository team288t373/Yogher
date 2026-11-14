import Link from "next/link";
import { glowherContent } from "@/lib/content";
import { PricingPlan } from "@/lib/types";

export default function GlowPricing() {
  const { plans, sharedFeatures } = glowherContent;

  const popularPlan = plans.find((p) => p.popular);
  const otherPlans = plans.filter((p) => !p.popular);
  const mobileOrderedPlans = popularPlan ? [popularPlan, ...otherPlans] : plans;

  const renderCard = (plan: PricingPlan, isMobileView: boolean) => {
    const isDark = plan.popular;

    return (
      <div
        key={`${plan.id}-${isMobileView ? "m" : "d"}`}
        className={`relative flex flex-col justify-between p-5 sm:p-6 lg:p-6 xl:p-7 rounded-card-lg transition-all duration-200 ${
          isDark
            ? "bg-bordeaux text-white shadow-2xl scale-[1.02] border-2 border-bordeaux-light z-10 hover:shadow-2xl hover:-translate-y-0.5"
            : "bg-white text-bordeaux border border-cotton shadow-sm hover:shadow-lg hover:-translate-y-0.5"
        }`}
      >
        {plan.popular && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-cotton text-bordeaux text-xs font-extrabold uppercase tracking-eyebrow rounded-full shadow-sm whitespace-nowrap">
            Most popular
          </div>
        )}

        <div>
          <h3 className={`text-lg sm:text-xl font-bold mb-3 ${isDark ? "text-white" : "text-bordeaux"}`}>
            {plan.name}
          </h3>

          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-2">
            <span className="text-3xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold tracking-tight">
              {plan.price}
            </span>
            <span className={`text-xs font-semibold ${isDark ? "text-cotton" : "text-muted"}`}>
              {plan.duration}
            </span>
          </div>

          {plan.monthlyNote ? (
            <p className={`text-xs font-semibold mb-6 ${isDark ? "text-cotton" : "text-muted"}`}>
              {plan.monthlyNote}
            </p>
          ) : (
            <div className="mb-6 h-4" />
          )}

          <div className={`h-px w-full mb-6 ${isDark ? "bg-bordeaux-light" : "bg-cotton/60"}`} />
        </div>

        <div>
          <Link
            href={plan.ctaHref}
            target={plan.ctaHref.startsWith("http") ? "_blank" : undefined}
            rel={plan.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`w-full min-h-[48px] px-5 py-3 rounded-full font-bold text-sm tracking-wide flex items-center justify-center text-center transition-all ${
              isDark
                ? "bg-cotton text-bordeaux hover:bg-white"
                : "bg-bordeaux text-white hover:opacity-95"
            }`}
          >
            {plan.ctaText}
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section id="pricing" className="w-full py-16 sm:py-24 bg-softpink/60">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-eyebrow text-bordeaux/90 mb-2 inline-block">
            Pricing
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold tracking-tightest text-bordeaux leading-tight mb-3">
            Less than a facial. Lasts all month.
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-lg mx-auto">
            Every plan includes 30-minute live sessions Monday to Friday, a choice of 6 batches and WhatsApp support. GST included.
          </p>
        </div>

        {/* Shared Features Listed Once */}
        <div className="max-w-2xl mx-auto mb-10 p-5 sm:p-6 bg-white rounded-card-lg border border-cotton shadow-sm">
          <h3 className="text-xs font-bold uppercase tracking-eyebrow text-bordeaux mb-3 text-center sm:text-left">
            Every plan includes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {sharedFeatures.map((feat, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-cotton text-bordeaux flex items-center justify-center shrink-0 text-xs font-bold">
                  ✓
                </span>
                <span className="text-bordeaux font-medium leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {plans.map((p) => renderCard(p, false))}
        </div>

        {/* Mobile Stack with Most Popular first */}
        <div className="flex md:hidden flex-col gap-6">
          {mobileOrderedPlans.map((p) => renderCard(p, true))}
        </div>
      </div>
    </section>
  );
}
