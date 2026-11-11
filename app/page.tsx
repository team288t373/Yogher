import OfferStrip from "@/components/sections/OfferStrip";
import Header from "@/components/Header";
import HeroYogher from "@/components/sections/HeroYogher";
import VideoReelsSection from "@/components/sections/VideoReelsSection";
import StatsBand from "@/components/sections/StatsBand";
import Programs from "@/components/sections/Programs";
import HowItWorks from "@/components/sections/HowItWorks";
import MembershipIncludes from "@/components/sections/MembershipIncludes";
import Coaches from "@/components/sections/Coaches";
import Testimonials from "@/components/sections/Testimonials";
import PlansSection from "@/components/sections/PlansSection";
import JournalSection from "@/components/sections/JournalSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function YogherPage() {
  return (
    <>
      {/* 1. Offer strip */}
      <OfferStrip />

      {/* 2. Header */}
      <Header brand="yogher" />

      <main className="flex-1 flex flex-col">
        {/* 3. Hero with free diet plan lead form */}
        <HeroYogher />

        {/* 4. 9:16 Vertical Video Reels (Right after Form Section with Left-to-Right Scrolling) */}
        <VideoReelsSection />

        {/* 5. Stats band */}
        <StatsBand />

        {/* 5. Programs + GlowHer cross-link card */}
        <Programs />

        {/* 6. How it works */}
        <HowItWorks />

        {/* 7. Every membership includes */}
        <MembershipIncludes />

        {/* 8. Coaches */}
        <Coaches />

        {/* 10. Testimonials */}
        <Testimonials />

        {/* 11. Plans (Group & 1-on-1 toggle) */}
        <PlansSection />

        {/* 12. From our journal */}
        <JournalSection />

        {/* 13. FAQ */}
        <FAQSection />

        {/* 14. Final CTA with background photo */}
        <FinalCTA />
      </main>

      {/* 15. Footer */}
      <Footer brand="yogher" />

      {/* 16. Sticky Mobile CTA */}
      <StickyMobileCTA brand="yogher" />
    </>
  );
}
