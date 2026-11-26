import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  brand: "yogher" | "glowher";
}

export default function Header({ brand }: HeaderProps) {
  const isYogher = brand === "yogher";

  return (
    <header className="sticky top-0 z-40 w-full bg-softpink/95 backdrop-blur-md border-b border-cotton/60 transition-all">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-2.5 sm:gap-6 min-w-0">
          <Link
            href="/"
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
              <Link href="#reviews" className="hover:text-muted transition-colors py-2">
                Reviews
              </Link>
              <Link href="#plans" className="hover:text-muted transition-colors py-2">
                Plans
              </Link>
            </>
          ) : (
            <>
              <Link href="#rhythm" className="hover:text-muted transition-colors py-2">
                Weekly Rhythm
              </Link>
              <Link href="#results" className="hover:text-muted transition-colors py-2">
                Results
              </Link>
              <Link href="#reviews" className="hover:text-muted transition-colors py-2">
                Reviews
              </Link>
              <Link href="#pricing" className="hover:text-muted transition-colors py-2">
                Pricing
              </Link>
            </>
          )}
        </nav>

        {/* Right: CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            href={isYogher ? "#plans" : "#pricing"}
            className="hidden sm:inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-full bg-bordeaux text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity focus:outline-none focus:ring-2 focus:ring-bordeaux focus:ring-offset-2"
          >
            {isYogher ? "See plans from ₹1,199" : "Start at ₹999"}
          </Link>
        </div>
      </div>
    </header>
  );
}
