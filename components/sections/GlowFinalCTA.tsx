import Link from "next/link";
import SafeImage from "../SafeImage";
import { glowherContent, siteConfig, IMAGES } from "@/lib/content";

export default function GlowFinalCTA() {
  const { hero } = glowherContent;

  return (
    <section
      style={{ position: "relative", overflow: "hidden" }}
      className="relative w-full py-16 sm:py-20 overflow-hidden bg-bordeaux text-white"
    >
      {/* Background Photo with Bordeaux ~82% Overlay */}
      <div
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden" }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <SafeImage
          src={IMAGES.glowherFinalCTA}
          alt="Face and prenatal yoga calmness"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#5A0016]/82 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-[28px] sm:text-[38px] md:text-[46px] font-extrabold tracking-tightest leading-tight text-white mb-6">
          Your natural glow, 30 minutes a day.
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#trial"
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full bg-cotton text-bordeaux font-extrabold text-sm tracking-wide shadow-lg hover:bg-white transition-all flex items-center justify-center"
          >
            Join from ₹999
          </Link>
          <a
            href={siteConfig.glowherWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full border-2 border-cotton text-cotton font-extrabold text-sm tracking-wide hover:bg-cotton/10 transition-all flex items-center justify-center"
          >
            {hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
