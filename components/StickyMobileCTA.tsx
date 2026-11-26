"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/content";

interface StickyMobileCTAProps {
  brand?: "yogher";
}

export default function StickyMobileCTA({ brand = "yogher" }: StickyMobileCTAProps) {
  const ctaText = "Join from ₹1,199";
  const targetHref = "#plans";
  const whatsappJoinUrl =
    "https://wa.me/917302970977?text=Hi%20YogHer!%20I%27d%20like%20to%20start%20the%201-Month%20Live%20Yoga%20Trial%20(%E2%82%B91%2C199%20%2F%2030%20days).%20Please%20share%20batch%20timings%20and%20joining%20details.";
  const whatsappUrl = siteConfig.yogherWhatsAppUrl;

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

  // Hide sticky CTA when hero form is already in view or mobile menu is open
  const isVisible = !formInView && !menuOpen;

  return (
    <div
      role="region"
      aria-label="Quick actions"
      className={`fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-cotton/80 p-3 sm:hidden transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-2 max-w-[420px] mx-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with YogHer on WhatsApp"
          className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-full border border-cotton bg-softpink text-bordeaux font-bold text-xs hover:bg-cotton transition-colors active:scale-95"
        >
          <span className="truncate">Chat on WhatsApp</span>
        </a>

        <a
          href={whatsappJoinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[44px] flex items-center justify-center px-4 py-2 rounded-full bg-bordeaux text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-md active:scale-95 transition-all text-center"
        >
          <span className="truncate">{ctaText}</span>
        </a>
      </div>
    </div>
  );
}
