"use client";

import { useState, useEffect } from "react";
import { glowherContent, siteConfig } from "@/lib/content";
import type { DownloadItem } from "@/lib/types";

const COUNTRY_CODES = [
  { code: "+91", label: "+91", title: "India (+91)" },
  { code: "+1", label: "+1", title: "USA/Canada (+1)" },
  { code: "+44", label: "+44", title: "UK (+44)" },
  { code: "+971", label: "+971", title: "UAE (+971)" },
  { code: "+65", label: "+65", title: "Singapore (+65)" },
  { code: "+61", label: "+61", title: "Australia (+61)" },
];

export default function GlowDownloads() {
  const { downloads } = glowherContent;

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activeItem, setActiveItem] = useState<DownloadItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Form states inside modal
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Check if user already submitted a lead form previously
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const submitted =
          sessionStorage.getItem("yogher_lead_submitted") === "true" ||
          localStorage.getItem("yogher_lead_submitted") === "true";
        if (submitted) {
          setIsUnlocked(true);
        }
        const savedName = localStorage.getItem("yogher_user_name");
        if (savedName) setName(savedName);
      } catch {
        // ignore storage errors
      }
    }
  }, []);

  if (!downloads || downloads.length === 0) {
    return null;
  }

  // Trigger browser download for a PDF
  const triggerDownload = (item: DownloadItem) => {
    const link = document.createElement("a");
    link.href = item.fileUrl;
    link.download = item.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadClick = (item: DownloadItem) => {
    // Check live state from storage too in case user submitted hero form just now
    let alreadyUnlocked = isUnlocked;
    if (typeof window !== "undefined") {
      try {
        if (
          sessionStorage.getItem("yogher_lead_submitted") === "true" ||
          localStorage.getItem("yogher_lead_submitted") === "true"
        ) {
          alreadyUnlocked = true;
          setIsUnlocked(true);
        }
      } catch {}
    }

    if (alreadyUnlocked) {
      // User has already filled form -> direct download!
      triggerDownload(item);
    } else {
      // Need details first -> open lead capture modal
      setActiveItem(item);
      setDownloadSuccess(false);
      setErrorMsg(null);
      setModalOpen(true);
    }
  };

  const validatePhone = (num: string, code: string): boolean => {
    const cleaned = num.replace(/\D/g, "");
    if (code === "+91") {
      return cleaned.length === 10;
    }
    return cleaned.length >= 7 && cleaned.length <= 15;
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const trimmedName = name.trim();
    if (!trimmedName) {
      setErrorMsg("Please enter your full name.");
      return;
    }

    if (!validatePhone(phoneNumber, countryCode)) {
      setErrorMsg(
        countryCode === "+91"
          ? "Please enter a valid 10-digit Indian WhatsApp number."
          : "Please enter a valid phone number."
      );
      return;
    }

    setIsSubmitting(true);
    const fullPhone = `${countryCode} ${phoneNumber.trim()}`;

    const payload = {
      name: trimmedName,
      phone: fullPhone,
      goal: activeItem ? `PDF Download: ${activeItem.title}` : "PDF Guide Download",
      page: "glowher",
      utm_source: (typeof window !== "undefined" && sessionStorage.getItem("utm_source")) || "",
      utm_medium: (typeof window !== "undefined" && sessionStorage.getItem("utm_medium")) || "",
      utm_campaign: (typeof window !== "undefined" && sessionStorage.getItem("utm_campaign")) || "",
      utm_content: (typeof window !== "undefined" && sessionStorage.getItem("utm_content")) || "",
    };

    try {
      // 1. Client webhook
      const webhookUrl = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL;
      if (webhookUrl) {
        try {
          await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            mode: "no-cors",
            body: JSON.stringify(payload),
          });
        } catch (e) {
          console.warn("Client webhook notice:", e);
        }
      }

      // 2. Server API route
      try {
        await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch {
        // Ignored in static export
      }

      // 3. Track conversion
      if (typeof window !== "undefined") {
        if (typeof window.fbq === "function") {
          window.fbq("track", "Lead", { content_name: "glowher_pdf_download" });
        }
        if (typeof window.gtag === "function") {
          window.gtag("event", "generate_lead", {
            event_category: "Lead",
            event_label: "glowher_pdf_download",
          });
        }

        try {
          sessionStorage.setItem("yogher_lead_submitted", "true");
          localStorage.setItem("yogher_lead_submitted", "true");
          localStorage.setItem("yogher_user_name", trimmedName);
          localStorage.setItem("yogher_user_phone", fullPhone);
        } catch {}
      }

      setIsUnlocked(true);
      setDownloadSuccess(true);

      // Trigger the download automatically
      if (activeItem) {
        triggerDownload(activeItem);
      }
    } catch {
      setIsUnlocked(true);
      setDownloadSuccess(true);
      if (activeItem) {
        triggerDownload(activeItem);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveItem(null);
    setDownloadSuccess(false);
    setErrorMsg(null);
  };

  const whatsappHref = activeItem
    ? `https://wa.me/918679244416?text=${encodeURIComponent(
        `Hi YogHer! I downloaded the ${activeItem.title}. I'd like to know more about the live face yoga batches.\n\nName: ${name || "Member"}\nPhone: ${countryCode} ${phoneNumber}`
      )}`
    : siteConfig.glowherWhatsAppUrl;

  return (
    <section id="downloads" className="w-full py-16 sm:py-20 bg-cotton/30 border-b border-cotton">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-eyebrow text-bordeaux/90 mb-2 inline-block">
            Free Client Guides
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold tracking-tightest text-bordeaux leading-tight mb-3">
            Download your Face Yoga &amp; Abhyanga guides.
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            Read through our client reference material, weekly rhythms, and Ayurvedic self-care rituals anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {downloads.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-card-lg p-6 sm:p-7 border border-cotton shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cotton text-bordeaux text-xs font-bold">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span>{item.pages}</span>
                  </span>
                  <span className="text-xs font-semibold text-muted/80">{item.fileSize}</span>
                </div>

                <h3 className="text-xl font-extrabold text-bordeaux mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleDownloadClick(item)}
                className="inline-flex items-center justify-center gap-2 min-h-[46px] w-full px-6 py-3 rounded-full bg-bordeaux text-white font-bold text-sm hover:opacity-95 active:scale-[0.99] transition-all shadow-sm cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download PDF</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Gated Lead Capture Modal */}
      {modalOpen && activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="relative w-full max-w-[440px] bg-white rounded-[28px] p-6 sm:p-8 shadow-2xl border border-pink/40 max-h-[92vh] overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-softpink text-bordeaux flex items-center justify-center hover:bg-cotton transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!downloadSuccess ? (
              <>
                {/* Header */}
                <div className="mb-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cotton text-bordeaux text-xs font-bold mb-3">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span>{activeItem.pages} · {activeItem.fileSize}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-bordeaux leading-tight mb-2">
                    Unlock Free PDF Guide
                  </h3>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed">
                    Enter your name and WhatsApp number to download <span className="font-semibold text-bordeaux">{activeItem.title}</span> instantly.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleModalSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-bordeaux/90 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full min-h-[46px] px-4 rounded-xl border border-pink/50 bg-softpink/40 text-bordeaux text-base placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-bordeaux/30 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-bordeaux/90 mb-1.5">
                      WhatsApp Number
                    </label>
                    <div className="flex gap-2 w-full">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="w-[96px] shrink-0 min-h-[46px] px-2.5 rounded-xl border border-pink/50 bg-softpink/40 text-bordeaux font-bold text-base focus:outline-none focus:ring-2 focus:ring-bordeaux/30 focus:bg-white transition-all cursor-pointer"
                        aria-label="Country calling code"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={c.code} value={c.code} title={c.title}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        required
                        inputMode="numeric"
                        autoComplete="tel-national"
                        maxLength={countryCode === "+91" ? 10 : 15}
                        placeholder={countryCode === "+91" ? "98765 43210" : "Phone number"}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="flex-1 min-w-0 w-full min-h-[46px] px-4 rounded-xl border border-pink/50 bg-softpink/40 text-bordeaux text-base placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-bordeaux/30 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[48px] px-6 py-3.5 rounded-full bg-bordeaux text-white font-extrabold text-sm tracking-wide shadow-md hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        <span>Unlocking Guide...</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span>Download PDF Now</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-muted text-center leading-normal pt-1 flex items-center justify-center gap-1.5">
                    <span>🔒</span>
                    <span>100% free download. We will also send the guide on WhatsApp.</span>
                  </p>
                </form>
              </>
            ) : (
              /* Success State */
              <div className="text-center py-4 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-bordeaux mb-1">
                    Download Started!
                  </h3>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
                    Your copy of <span className="font-semibold text-bordeaux">{activeItem.title}</span> is downloading now.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-cotton/40 border border-cotton text-xs text-bordeaux">
                  If your download did not start automatically,{" "}
                  <button
                    type="button"
                    onClick={() => triggerDownload(activeItem)}
                    className="font-extrabold underline text-bordeaux cursor-pointer hover:opacity-80"
                  >
                    click here to download again
                  </button>.
                </div>

                <div className="pt-2 flex flex-col gap-2.5">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[46px] px-6 py-3 rounded-full bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                    <span>Connect with Coach on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="w-full min-h-[42px] px-6 py-2.5 rounded-full border border-pink/40 text-bordeaux font-bold text-xs hover:bg-cotton/20 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
