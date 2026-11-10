"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  brand: "yogher" | "glowher";
}

export default function Header({ brand }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const isYogher = brand === "yogher";

  return (
    <header className="sticky top-0 z-40 w-full bg-softpink/95 backdrop-blur-md border-b border-cotton/60 transition-all">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-6 h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Brand Switcher + Logo */}
        <div className="flex items-center gap-2.5 sm:gap-6 min-w-0">
          <Link
            href={isYogher ? "/" : "/glowher"}
            className="flex items-center gap-2 sm:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-bordeaux rounded-lg shrink-0"
          >
            {isYogher ? (
              <>
                <Image
                  src="/brand/yogher-logo.png"
                  alt="YogHer Logo"
                  width={44}
                  height={44}
                  priority
                  unoptimized
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover shrink-0 shadow-sm"
                />
                <span className="text-2xl sm:text-[26px] font-extrabold tracking-tightest text-bordeaux leading-none">
                  YogHer
                </span>
              </>
            ) : (
              <>
                <Image
                  src="/brand/yogher-logo.png"
                  alt="YogHer Logo"
                  width={40}
                  height={40}
                  priority
                  unoptimized
                  className="w-10 h-10 rounded-full object-cover shrink-0 shadow-sm"
                />
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-[26px] font-extrabold tracking-tightest text-bordeaux leading-none">
                    GlowHer
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted mt-0.5">
                    by YogHer
                  </span>
                </div>
              </>
            )}
          </Link>

          {/* Desktop Brand Switcher */}
          <nav aria-label="Brand switcher" className="hidden lg:flex items-center p-1 bg-white rounded-full border border-cotton shadow-sm">
            <Link
              href="/"
              className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all ${
                isYogher
                  ? "bg-bordeaux text-white shadow-sm"
                  : "text-bordeaux hover:bg-softpink border border-transparent"
              }`}
            >
              YogHer
            </Link>
            <Link
              href="/glowher"
              className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all ${
                !isYogher
                  ? "bg-bordeaux text-white shadow-sm"
                  : "text-bordeaux hover:bg-softpink border border-transparent"
              }`}
            >
              GlowHer
            </Link>
          </nav>
        </div>

        {/* Center: Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-bordeaux">
          {isYogher ? (
            <>
              <Link href="#programs" className="hover:text-muted transition-colors py-2">
                Programs
              </Link>
              <Link href="#how" className="hover:text-muted transition-colors py-2">
                How it works
              </Link>
              <Link href="#coaches" className="hover:text-muted transition-colors py-2">
                Coaches
              </Link>
              <Link href="#plans" className="hover:text-muted transition-colors py-2">
                Plans
              </Link>
              <Link
                href="/glowher"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-cotton text-bordeaux rounded-full text-xs font-bold hover:bg-cotton/80 transition-colors"
              >
                <span>Face Yoga</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </>
          ) : (
            <>
              <Link href="#benefits" className="hover:text-muted transition-colors py-2">
                Benefits
              </Link>
              <Link href="#rhythm" className="hover:text-muted transition-colors py-2">
                Weekly Rhythm
              </Link>
              <Link href="#results" className="hover:text-muted transition-colors py-2">
                Results
              </Link>
              <Link href="#pricing" className="hover:text-muted transition-colors py-2">
                Pricing
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-cotton text-bordeaux rounded-full text-xs font-bold hover:bg-cotton/80 transition-colors"
              >
                <span>All yoga programs</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </>
          )}
        </nav>

        {/* Right: CTA & Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Brand Switcher for tablets / mobile */}
          <div className="flex md:hidden lg:hidden items-center p-0.5 bg-white rounded-full border border-cotton shadow-sm">
            <Link
              href="/"
              className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                isYogher ? "bg-bordeaux text-white" : "text-bordeaux"
              }`}
            >
              YogHer
            </Link>
            <Link
              href="/glowher"
              className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                !isYogher ? "bg-bordeaux text-white" : "text-bordeaux"
              }`}
            >
              GlowHer
            </Link>
          </div>

          <Link
            href={isYogher ? "#plans" : "#pricing"}
            className="hidden sm:inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-full bg-bordeaux text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity focus:outline-none focus:ring-2 focus:ring-bordeaux focus:ring-offset-2"
          >
            {isYogher ? "See plans from ₹1,199" : "Start at ₹999"}
          </Link>

          {/* Mobile hamburger button */}
          <button
            ref={hamburgerRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden w-10 h-10 rounded-full bg-cotton flex items-center justify-center text-bordeaux hover:bg-cotton/80 transition-colors focus:outline-none focus:ring-2 focus:ring-bordeaux shrink-0"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Accessible slide-down / modal mobile menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        brand={brand}
        triggerRef={hamburgerRef}
      />
    </header>
  );
}
