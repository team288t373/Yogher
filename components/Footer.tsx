import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/content";

interface FooterProps {
  brand: "yogher" | "glowher";
}

export default function Footer({ brand }: FooterProps) {
  const isYogher = brand === "yogher";

  return (
    <footer className="w-full bg-bordeaux text-softpink pt-16 pb-32 md:pb-16 border-t border-bordeaux-light">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-bordeaux-light/50">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <Image
                src="/brand/yogher-logo.png"
                alt="YogHer Logo"
                width={56}
                height={56}
                unoptimized
                className="w-14 h-14 rounded-full object-cover shrink-0 shadow-md"
                loading="lazy"
              />
              <div>
                <span className="text-3xl font-extrabold tracking-tightest text-white leading-none block">
                  {isYogher ? "YogHer" : "GlowHer"}
                </span>
                <span className="block text-xs uppercase tracking-widest text-cotton font-semibold mt-1">
                  {isYogher ? "Live online yoga for Indian women" : "Live face yoga by YogHer"}
                </span>
              </div>
            </div>

            <p className="text-cotton text-sm max-w-sm leading-relaxed">
              Made with care for women, by women.
            </p>
            <div className="pt-2">
              <a
                href={isYogher ? siteConfig.yogherWhatsAppUrl : siteConfig.glowherWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 min-h-[44px] bg-cotton text-bordeaux rounded-full hover:bg-white transition-colors"
              >
                <span>WhatsApp: {siteConfig.phone}</span>
              </a>
            </div>
          </div>

          {/* Programs / Sub-brands */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-eyebrow text-cotton mb-4">
              Explore Programs
            </h3>
            <ul className="space-y-2 text-sm">
              {isYogher ? (
                <>
                  <li>
                    <Link href="#programs" className="text-softpink hover:text-white transition-colors min-h-[44px] flex items-center">
                      Weight loss & fat loss
                    </Link>
                  </li>
                  <li>
                    <Link href="#programs" className="text-softpink hover:text-white transition-colors min-h-[44px] flex items-center">
                      PCOS and irregular periods
                    </Link>
                  </li>
                  <li>
                    <Link href="#programs" className="text-softpink hover:text-white transition-colors min-h-[44px] flex items-center">
                      Body toning & fitness
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/glowher"
                      className="inline-flex items-center gap-1.5 text-cotton font-bold hover:underline min-h-[44px]"
                    >
                      <span>GlowHer (Face yoga)</span>
                      <span className="text-xs">→</span>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="#benefits" className="text-softpink hover:text-white transition-colors min-h-[44px] flex items-center">
                      Why face yoga
                    </Link>
                  </li>
                  <li>
                    <Link href="#session" className="text-softpink hover:text-white transition-colors min-h-[44px] flex items-center">
                      30-minute daily session
                    </Link>
                  </li>
                  <li>
                    <Link href="#pricing" className="text-softpink hover:text-white transition-colors min-h-[44px] flex items-center">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-1.5 text-cotton font-bold hover:underline min-h-[44px]"
                    >
                      <span>All YogHer programs</span>
                      <span className="text-xs">→</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Legal & Policy */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-eyebrow text-cotton mb-4">
              Policies
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-softpink hover:text-white transition-colors min-h-[44px] flex items-center">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-softpink hover:text-white transition-colors min-h-[44px] flex items-center">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-softpink hover:text-white transition-colors min-h-[44px] flex items-center">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-softpink/70 gap-4">
          <p>© {new Date().getFullYear()} YogHer Wellness. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>GST Included</span>
            <span>·</span>
            <span>Google Meet Live</span>
            <span>·</span>
            <span>Women Only</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
