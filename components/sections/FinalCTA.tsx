import Link from "next/link";
import SafeImage from "../SafeImage";
import { siteConfig, IMAGES } from "@/lib/content";

export default function FinalCTA() {
  return (
    <section
      style={{ position: "relative", overflow: "hidden" }}
      className="relative w-full py-20 sm:py-28 overflow-hidden bg-bordeaux text-white"
    >
      {/* Background Photo with Bordeaux ~82% Overlay */}
      <div
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden" }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <SafeImage
          src={IMAGES.yogherFinalCTA}
          alt="Yoga practice outdoors by river and mountains"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#5A0016]/82 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-eyebrow text-cotton mb-3 inline-block">
          Start Today
        </span>
        <h2 className="text-[32px] sm:text-[44px] md:text-[56px] font-extrabold tracking-tightest leading-[1.05] text-white mb-6">
          Your future self will thank you.
        </h2>
        <p className="text-softpink text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-medium">
          Start your daily practice and join 5,000+ women on the mat as early as tomorrow morning.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#plans"
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full bg-cotton text-bordeaux font-extrabold text-sm tracking-wide shadow-lg hover:bg-white transition-all flex items-center justify-center"
          >
            Start your plan
          </Link>
          <a
            href={siteConfig.yogherWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full border-2 border-cotton text-cotton font-extrabold text-sm tracking-wide hover:bg-cotton/10 transition-all flex items-center justify-center"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
