"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  brand: "yogher" | "glowher";
  triggerRef: React.RefObject<HTMLButtonElement>;
}

export default function MobileMenu({ isOpen, onClose, brand, triggerRef }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape key, trap focus, lock body scroll, and notify StickyMobileCTA
  useEffect(() => {
    if (!isOpen) {
      document.body.removeAttribute("data-mobile-menu-open");
      window.dispatchEvent(new CustomEvent("mobile-menu-toggle", { detail: { isOpen: false } }));
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.setAttribute("data-mobile-menu-open", "true");
    window.dispatchEvent(new CustomEvent("mobile-menu-toggle", { detail: { isOpen: true } }));

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        triggerRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusableElements.length) return;

        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Initial focus into menu
    const firstFocusable = menuRef.current?.querySelector<HTMLElement>("a, button");
    firstFocusable?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.removeAttribute("data-mobile-menu-open");
      window.dispatchEvent(new CustomEvent("mobile-menu-toggle", { detail: { isOpen: false } }));
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  const yogherLinks = [
    { label: "Programs", href: "#programs" },
    { label: "How it works", href: "#how" },
    { label: "Coaches", href: "#coaches" },
    { label: "Plans", href: "#plans" },
    { label: "Face Yoga (GlowHer)", href: "/glowher", isPage: true },
  ];

  const glowherLinks = [
    { label: "Benefits", href: "#benefits" },
    { label: "Weekly Rhythm", href: "#rhythm" },
    { label: "Client Results", href: "#results" },
    { label: "Guides & Downloads", href: "#downloads" },
    { label: "Pricing", href: "#pricing" },
    { label: "All yoga programs", href: "/", isPage: true },
  ];

  const links = brand === "yogher" ? yogherLinks : glowherLinks;
  const ctaHref = brand === "yogher" ? "#plans" : "#pricing";
  const ctaText = brand === "yogher" ? "See plans from ₹1,199" : "Start at ₹999";

  const handleLinkClick = () => {
    onClose();
    triggerRef.current?.focus();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-bordeaux/40 backdrop-blur-sm transition-opacity"
        onClick={() => {
          onClose();
          triggerRef.current?.focus();
        }}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className="relative z-10 w-full bg-softpink border-b-2 border-bordeaux/20 shadow-2xl px-6 pt-6 pb-8 flex flex-col max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between pb-4 border-b border-cotton">
          {/* Brand Switcher inside mobile menu */}
          <div className="flex items-center p-1 bg-white rounded-full border border-cotton shadow-sm">
            <Link
              href="/"
              onClick={handleLinkClick}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                brand === "yogher"
                  ? "bg-bordeaux text-white shadow-sm"
                  : "text-bordeaux hover:bg-softpink"
              }`}
            >
              YogHer
            </Link>
            <Link
              href="/glowher"
              onClick={handleLinkClick}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                brand === "glowher"
                  ? "bg-bordeaux text-white shadow-sm"
                  : "text-bordeaux hover:bg-softpink"
              }`}
            >
              GlowHer
            </Link>
          </div>

          {/* Close button */}
          <button
            onClick={() => {
              onClose();
              triggerRef.current?.focus();
            }}
            aria-label="Close menu"
            className="w-11 h-11 rounded-full bg-cotton flex items-center justify-center text-bordeaux hover:bg-cotton/80 transition-colors focus:outline-none focus:ring-2 focus:ring-bordeaux"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col py-6 space-y-4">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className={`text-lg font-bold transition-colors py-2 px-1 min-h-[44px] flex items-center ${
                link.isPage
                  ? "text-bordeaux flex items-center justify-between border-t border-cotton/60 pt-4"
                  : "text-bordeaux hover:text-muted"
              }`}
            >
              <span>{link.label}</span>
              {link.isPage && (
                <span className="text-xs font-semibold px-2.5 py-1 bg-cotton text-bordeaux rounded-full">
                  Explore
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="pt-2">
          <Link
            href={ctaHref}
            onClick={handleLinkClick}
            className="w-full min-h-[48px] flex items-center justify-center rounded-full bg-bordeaux text-white font-bold text-sm tracking-wide shadow-md hover:opacity-95 transition-all"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
}
