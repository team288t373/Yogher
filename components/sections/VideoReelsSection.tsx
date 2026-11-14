"use client";

import { useState, useRef, useEffect } from "react";
import SafeImage from "../SafeImage";
import { yogherContent, siteConfig } from "@/lib/content";
import type { VideoReel } from "@/lib/types";

function getYouTubeEmbedUrl(urlOrId?: string): string | null {
  if (!urlOrId) return null;
  const trimmed = urlOrId.trim();
  if (!trimmed) return null;

  // Direct 11-character YouTube video ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return `https://www.youtube-nocookie.com/embed/${trimmed}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
  }

  // YouTube Shorts: youtube.com/shorts/<id>
  const shortsMatch = trimmed.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
  if (shortsMatch && shortsMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${shortsMatch[1]}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
  }

  // youtu.be/<id>
  const youtuBeMatch = trimmed.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (youtuBeMatch && youtuBeMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${youtuBeMatch[1]}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
  }

  // youtube.com/watch?v=<id>
  const watchMatch = trimmed.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch && watchMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${watchMatch[1]}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
  }

  // youtube.com/embed/<id>
  const embedMatch = trimmed.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch && embedMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${embedMatch[1]}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
  }

  // If already full embed or web URL
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }

  return null;
}

export default function VideoReelsSection() {
  const { videoReels } = yogherContent;
  const [selectedReel, setSelectedReel] = useState<VideoReel | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedReel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedReel]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedReel(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -280, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 280, behavior: "smooth" });
    }
  };

  if (!videoReels || videoReels.length === 0) {
    return null;
  }

  return (
    <section
      id="class-videos"
      aria-label="Live Class Videos and Stories"
      className="w-full py-12 sm:py-16 bg-gradient-to-b from-softpink via-white to-softpink/40 border-b border-cotton/50 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header with Title and Scroll Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cotton text-bordeaux text-xs font-bold uppercase tracking-eyebrow mb-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>Live Class &amp; Results Videos</span>
            </div>
            <h2 className="text-[26px] sm:text-[34px] md:text-[40px] font-extrabold tracking-tightest text-bordeaux leading-tight">
              See what happens inside our live Google Meet batches.
            </h2>
            <p className="text-muted text-sm sm:text-base mt-1.5 max-w-xl">
              Real posture corrections, interactive live energy, and authentic 90-day transformations.
            </p>
          </div>

          {/* Navigation Arrows for Left-to-Right Scrolling */}
          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <button
              type="button"
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-cotton bg-white text-bordeaux hover:bg-cotton shadow-sm flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-bordeaux"
              aria-label="Scroll videos left"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-cotton bg-white text-bordeaux hover:bg-cotton shadow-sm flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-bordeaux"
              aria-label="Scroll videos right"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* 9:16 Video Reels Horizontal Scroll / Responsive Grid */}
        <div
          ref={scrollRef}
          style={{ touchAction: "pan-x pan-y" }}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-proximity px-1 sm:px-0 pb-4 pt-2 no-scrollbar scroll-smooth justify-start md:justify-center overscroll-x-contain overscroll-y-auto"
        >
          {videoReels.map((reel) => (
            <article
              key={reel.id}
              onClick={() => setSelectedReel(reel)}
              style={{ touchAction: "pan-x pan-y" }}
              className="group relative aspect-[9/16] w-[230px] sm:w-[260px] md:w-[280px] shrink-0 snap-center rounded-[26px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer bg-cotton border border-cotton/80 select-none flex items-center justify-center"
              aria-label="Play video reel"
            >
              {/* Background Thumbnail Image with 9:16 aspect ratio */}
              <div className="absolute inset-0 pointer-events-none">
                <SafeImage
                  src={reel.thumbnail}
                  alt={reel.title || "YogHer live class reel"}
                  fill
                  sizes="(max-width: 640px) 230px, (max-width: 768px) 260px, 280px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  draggable={false}
                />
                {/* Subtle overlay for clean contrast */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-300 pointer-events-none" />
              </div>

              {/* Center Play Button Overlay */}
              <div className="relative z-10 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600/95 text-white flex items-center justify-center shadow-2xl group-hover:scale-115 group-hover:bg-red-600 transition-all duration-300 ring-4 ring-white/40 backdrop-blur-sm pointer-events-none">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current translate-x-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Video Modal Player (Supports 9:16 Shorts, YouTube & Direct Video) */}
      {selectedReel && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
          onClick={() => setSelectedReel(null)}
        >
          <div
            className="relative w-full max-w-[420px] bg-bordeaux/95 text-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3.5 sm:p-4 border-b border-white/10 shrink-0">
              <div className="min-w-0 pr-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-cotton bg-white/10 px-2 py-0.5 rounded-full inline-block mb-1">
                  {selectedReel.tag}
                </span>
                <h4 className="text-sm font-bold text-white truncate">
                  {selectedReel.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedReel(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                aria-label="Close video player"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Video Player Container (9:16 Aspect Ratio) */}
            <div className="relative aspect-[9/16] w-full max-h-[68vh] bg-black overflow-hidden flex items-center justify-center">
              {(() => {
                const embedUrl = getYouTubeEmbedUrl(selectedReel.youtubeUrl || selectedReel.youtubeId);

                if (embedUrl) {
                  return (
                    <iframe
                      src={embedUrl}
                      title={selectedReel.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  );
                }

                // Placeholder / Preview State when user hasn't provided links yet
                return (
                  <div className="relative w-full h-full flex flex-col items-center justify-between p-6 text-center">
                    <SafeImage
                      src={selectedReel.thumbnail}
                      alt={selectedReel.title}
                      fill
                      className="object-cover opacity-40"
                    />
                    <div className="relative z-10 w-full flex justify-end">
                      <span className="px-2.5 py-1 rounded bg-black/70 text-[11px] font-medium text-cotton">
                        {selectedReel.duration}
                      </span>
                    </div>

                    <div className="relative z-10 max-w-xs space-y-3">
                      <div className="w-16 h-16 rounded-full bg-red-600 mx-auto flex items-center justify-center shadow-xl ring-4 ring-white/20">
                        <svg className="w-8 h-8 fill-current translate-x-0.5 text-white" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <h4 className="text-base font-extrabold text-white">
                        {selectedReel.title}
                      </h4>
                      <p className="text-xs text-cotton/90 leading-relaxed">
                        {selectedReel.clientOrCoach}
                      </p>
                    </div>

                    <div className="relative z-10 w-full pt-3">
                      <a
                        href={siteConfig.yogherWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.584 1.961.882 2.796.882 3.183 0 5.769-2.587 5.77-5.767s-2.587-5.768-5.77-5.768z" />
                        </svg>
                        <span>Request Video on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Modal Footer CTA */}
            <div className="p-3.5 sm:p-4 bg-bordeaux border-t border-white/10 shrink-0 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-cotton truncate">
                  Want to attend a live Google Meet batch?
                </p>
                <p className="text-[11px] text-white/70">
                  Batches run Mon to Sat from 5:00 AM to 9:00 PM IST
                </p>
              </div>
              <a
                href={siteConfig.yogherWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2 rounded-full bg-white text-bordeaux hover:bg-cotton font-extrabold text-xs tracking-wide transition-all shadow-sm"
              >
                Join Batch
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
