import PricingToggle from "../PricingToggle";

export default function PlansSection() {
  return (
    <section id="plans" className="w-full py-16 sm:py-24 bg-white border-y border-cotton/40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-eyebrow text-bordeaux/90 mb-2 inline-block">
            Plans
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold tracking-tightest text-bordeaux leading-tight mb-3">
            Pick the plan that fits your goal.
          </h2>
          <p className="text-muted text-sm sm:text-base">
            All prices include GST. Pay securely by UPI, card, net banking or wallet.
          </p>
        </div>

        <PricingToggle />
      </div>
    </section>
  );
}
