"use client";

import { useState } from "react";
import SafeImage from "../SafeImage";
import { yogherContent, siteConfig } from "@/lib/content";
import type { VideoReview } from "@/lib/types";

export default function Testimonials() {
  const { testimonials, videoReviews } = yogherContent;
  const [activeTab, setActiveTab] = useState<"video" | "written">("video");
  const [selectedVideo, setSelectedVideo] = useState<VideoReview | null>(null);

  return (
    <section id="reviews" className="w-full py-16 sm:py-24 bg-softpink/60 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-eyebrow text-bordeaux/90 mb-2 inline-block">
            Success stories &amp; Live Recordings
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold tracking-tightest text-bordeaux leading-tight mb-4">
            Real women. Real results.
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-lg mx-auto">
            Watch real class recording sessions from Google Meet and hear transformation stories from women in our batches.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex items-center p-1 bg-white rounded-full border border-cotton shadow-sm mt-6">
            <button
              type="button"
              onClick={() => setActiveTab("video")}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "video"
                  ? "bg-bordeaux text-white shadow-sm"
                  : "text-bordeaux hover:bg-cotton/30"
              }`}
            >
              <svg className="w-4 h-4 fill-current text-red-500" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>Video Reviews &amp; Class Sessions</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("written")}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "written"
                  ? "bg-bordeaux text-white shadow-sm"
                  : "text-bordeaux hover:bg-cotton/30"
              }`}
            >
              <span>Member Stories</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Video Reviews & Class Recordings */}
        {activeTab === "video" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(videoReviews || []).map((vid) => (
                <div
                  key={vid.id}
                  onClick={() => setSelectedVideo(vid)}
                  className="group bg-white rounded-card-lg border border-cotton shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Video Thumbnail with Play Button */}
                    <div className="relative aspect-video w-full bg-bordeaux/90 overflow-hidden">
                      <SafeImage
                        src={vid.thumbnail}
                        alt={vid.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* YouTube Play Icon Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-red-700 transition-all">
                          <svg className="w-6 h-6 fill-current translate-x-0.5" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* Duration Tag */}
                      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-black/80 text-white text-[11px] font-semibold tracking-wide backdrop-blur-sm">
                        {vid.duration}
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-bordeaux text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                        {vid.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      <h3 className="font-extrabold text-bordeaux text-base sm:text-lg leading-snug mb-2 group-hover:text-bordeaux transition-colors">
                        {vid.title}
                      </h3>
                      <p className="text-muted text-xs sm:text-sm leading-relaxed mb-4">
                        &ldquo;{vid.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-cotton/40 mt-auto flex items-center justify-between text-xs font-bold text-bordeaux">
                    <span>{vid.clientName}</span>
                    <span className="inline-flex items-center gap-1 text-red-600 group-hover:translate-x-1 transition-transform">
                      <span>Watch video</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Reassurance note below video grid */}
            <div className="text-center pt-2">
              <p className="text-xs text-muted flex items-center justify-center gap-2">
                <span>📹</span>
                <span>All sessions are conducted live on Google Meet with real-time posture corrections.</span>
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: Written Testimonials */}
        {activeTab === "written" && (
          <div>
            <div className="flex md:grid md:grid-cols-3 gap-4 lg:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory px-4 sm:px-0 scroll-px-4 no-scrollbar">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="w-[85%] max-w-[340px] md:w-auto md:max-w-none shrink-0 snap-start whitespace-normal bg-white p-5 sm:p-6 lg:p-8 rounded-card-lg border border-cotton shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between min-w-0"
                >
                  <div>
                    <div className="flex items-center gap-3.5 sm:gap-4 mb-5 sm:mb-6 min-w-0">
                      <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-cotton shrink-0 bg-cotton shadow-sm">
                        <SafeImage
                          src={t.image}
                          alt={`${t.name}, YogHer member`}
                          fill
                          loading="lazy"
                          sizes="(min-width: 1024px) 96px, 80px"
                          className="object-cover object-top"
                          fallbackInitials={t.initials}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-extrabold text-bordeaux text-base sm:text-lg lg:text-xl leading-tight">
                          {t.name}
                        </h3>
                        <span className="text-[11px] sm:text-xs font-semibold text-muted bg-cotton/50 px-2.5 py-0.5 rounded-full inline-block mt-1">
                          {t.duration}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted text-sm sm:text-base italic leading-relaxed break-words">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex md:hidden items-center justify-center gap-1.5 pt-4 text-xs font-semibold text-muted">
              <span>Swipe to see all stories</span>
              <span aria-hidden="true">→</span>
            </div>
          </div>
        )}

        {/* Video Player Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedVideo(null);
            }}
          >
            <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-pink/40">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Video Player / Embed */}
              <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                {selectedVideo.youtubeId ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-bordeaux to-[#33000d] text-white">
                    <SafeImage
                      src={selectedVideo.thumbnail}
                      alt={selectedVideo.title}
                      fill
                      className="object-cover opacity-30"
                    />
                    <div className="relative z-10 max-w-md mx-auto space-y-4">
                      <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                        <svg className="w-8 h-8 fill-current translate-x-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-extrabold text-white leading-tight">
                        {selectedVideo.title}
                      </h4>
                      <p className="text-softpink text-xs sm:text-sm leading-relaxed">
                        To watch this full live recording or get client review videos directly, message our support team on WhatsApp.
                      </p>
                      <a
                        href={`https://wa.me/918679244416?text=${encodeURIComponent(
                          `Hi YogHer! I would like to watch the video recording: "${selectedVideo.title}". Please share the link.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:bg-emerald-700 transition-colors shadow-lg"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                        </svg>
                        <span>Request Video on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Details Footer */}
              <div className="p-5 sm:p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-cotton">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted block">
                    {selectedVideo.category}
                  </span>
                  <h4 className="font-extrabold text-bordeaux text-base sm:text-lg">
                    {selectedVideo.title}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedVideo(null)}
                  className="px-5 py-2 rounded-full border border-cotton text-bordeaux font-bold text-xs hover:bg-cotton/30 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
