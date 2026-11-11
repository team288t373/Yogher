"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/content";

interface StickyMobileCTAProps {
  brand: "yogher" | "glowher";
}

export default function StickyMobileCTA({ brand }: StickyMobileCTAProps) {
  const isYogher = brand === "yogher";
  const ctaText = isYogher ? "Join from ₹1,199" : "Join from ₹999";
  const targetHref = isYogher ? "#plans" : "#trial";
  const whatsappUrl = isYogher ? siteConfig.yogherWhatsAppUrl : siteConfig.glowherWhatsAppUrl;

  const [formInView, setFormInView] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // 1. Observer for the hero form
    const formElement = document.querySelector(targetHref);
    if (!formElement) {
      setFormInView(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFormInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(formElement);

    // 2. Mobile menu state listener
    const handleMenuToggle = (e: Event) => {
      const ce = e as CustomEvent<{ isOpen: boolean }>;
      setMenuOpen(!!ce.detail?.isOpen);
    };

    window.addEventListener("mobile-menu-toggle", handleMenuToggle);

    return () => {
      observer.disconnect();
      window.removeEventListener("mobile-menu-toggle", handleMenuToggle);
    };
  }, [targetHref]);

  const shouldShow = !formInView && !menuOpen;

  return (
    <div
      aria-label="Mobile quick actions"
      aria-hidden={!shouldShow}
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-cotton p-3 shadow-2xl px-4 flex items-center gap-3 transition-all duration-300 ease-in-out ${
        shouldShow
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <Link
        href={targetHref}
        tabIndex={shouldShow ? 0 : -1}
        className="flex-1 min-h-[46px] flex items-center justify-center rounded-full bg-bordeaux text-white font-bold text-sm tracking-wide shadow-md active:opacity-90 transition-opacity"
      >
        {ctaText}
      </Link>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        tabIndex={shouldShow ? 0 : -1}
        className="w-[46px] h-[46px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md active:opacity-90 flex-shrink-0"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.074-1.807-.411-1.425-.589-2.336-2.029-2.408-2.123-.07-.096-.575-.765-.575-1.46 0-.693.361-1.034.49-1.174.129-.141.282-.176.376-.176.094 0 .188.001.27.006.086.004.202-.033.315.24.118.282.4 1.002.435 1.076.035.074.059.16.012.253-.047.094-.07.153-.141.236-.07.082-.148.184-.212.247-.07.07-.144.146-.062.287.082.141.365.602.784.974.54.48 1 .63 1.141.7.141.07.224.059.306-.035.082-.094.353-.411.447-.553.094-.141.188-.118.318-.07.129.047.824.388.965.459.141.07.235.106.27.165.035.059.035.342-.109.747z" />
        </svg>
      </a>
    </div>
  );
}
