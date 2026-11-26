"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/content";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

interface LeadFormProps {
  variant: "diet" | "batch";
  id?: string;
}

const COUNTRY_CODES = [
  { code: "+91", label: "+91", title: "India (+91)" },
  { code: "+1", label: "+1", title: "USA/Canada (+1)" },
  { code: "+44", label: "+44", title: "UK (+44)" },
  { code: "+971", label: "+971", title: "UAE (+971)" },
  { code: "+65", label: "+65", title: "Singapore (+65)" },
  { code: "+61", label: "+61", title: "Australia (+61)" },
];

const GOAL_OPTIONS = [
  "Weight loss",
  "Fat loss",
  "PCOS / irregular periods",
  "Body toning",
  "Stress relief / fitness",
];

const TIME_OPTIONS = [
  "Early morning",
  "Morning",
  "Afternoon",
  "Evening",
  "Flexible timings",
];

export default function LeadForm({ variant, id }: LeadFormProps) {
  const isDiet = variant === "diet";
  const pageType = isDiet ? "yogher" : "glowher";

  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selection, setSelection] = useState(
    isDiet ? GOAL_OPTIONS[0] : TIME_OPTIONS[0]
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Store & read UTM params, and listen for goal pre-selection event
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const utms = ["utm_source", "utm_medium", "utm_campaign", "utm_content"];
      utms.forEach((param) => {
        const val = urlParams.get(param);
        if (val) {
          sessionStorage.setItem(param, val);
        }
      });

      const handleGoalSelect = (e: Event) => {
        const customEvent = e as CustomEvent<{ goal: string }>;
        if (customEvent.detail?.goal && GOAL_OPTIONS.includes(customEvent.detail.goal)) {
          setSelection(customEvent.detail.goal);
        }
      };

      window.addEventListener("yogher-select-goal", handleGoalSelect);
      return () => window.removeEventListener("yogher-select-goal", handleGoalSelect);
    }
  }, []);

  const validatePhone = (num: string, code: string): boolean => {
    const cleaned = num.replace(/\D/g, "");
    if (code === "+91") {
      return cleaned.length === 10;
    }
    return cleaned.length >= 7 && cleaned.length <= 15;
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    const utm_source = (typeof window !== "undefined" && sessionStorage.getItem("utm_source")) || "";
    const utm_medium = (typeof window !== "undefined" && sessionStorage.getItem("utm_medium")) || "";
    const utm_campaign = (typeof window !== "undefined" && sessionStorage.getItem("utm_campaign")) || "";
    const utm_content = (typeof window !== "undefined" && sessionStorage.getItem("utm_content")) || "";

    const payload = {
      name: trimmedName,
      phone: fullPhone,
      goal: isDiet ? selection : undefined,
      preferredTime: !isDiet ? selection : undefined,
      page: pageType,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
    };

    const targetMessage = isDiet
      ? `Hi YogHer! I'd like to join YogHer live classes.\n\nName: ${trimmedName}\nPhone: ${fullPhone}\nGoal: ${selection}\nPlease share batch timings and details.`
      : `Hi GlowHer! I'd like to know more about the live face yoga classes.\n\nName: ${trimmedName}\nPhone: ${fullPhone}\nPreferred Time: ${selection}\nPlease share batch timings and joining details.`;

    const targetWhatsappUrl = isDiet
      ? `https://wa.me/918679244416?text=${encodeURIComponent(targetMessage)}`
      : `https://wa.me/917302970977?text=${encodeURIComponent(targetMessage)}`;

    // 1. Send to client webhook if configured (background fire-and-forget)
    const webhookUrl = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "no-cors",
          body: JSON.stringify(payload),
        }).catch((e) => console.warn("Client webhook notice:", e));
      } catch (e) {
        console.warn("Client webhook notice:", e);
      }
    }

    // 2. Send to local API route in background
    try {
      fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});
    } catch {}

    // 3. Fire conversion events if trackers exist
    if (typeof window !== "undefined") {
      try {
        sessionStorage.setItem("yogher_lead_submitted", "true");
        localStorage.setItem("yogher_lead_submitted", "true");
        localStorage.setItem("yogher_user_name", trimmedName);
        localStorage.setItem("yogher_user_phone", fullPhone);
      } catch {
        // ignore storage errors
      }

      if (typeof window.fbq === "function") {
        window.fbq("track", "Lead", { content_name: pageType });
      }
      if (typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          event_category: "Lead",
          event_label: pageType,
        });
      }

      // Direct instant redirect to WhatsApp Business with pre-filled message
      window.location.href = targetWhatsappUrl;

      // Reset submitting flag after a short timeout in case user navigates back
      setTimeout(() => {
        setIsSubmitting(false);
      }, 2500);
    }
  };

  return (
    <div
      id={id}
      className={`w-full min-w-0 ${
        isDiet
          ? "bg-white p-3.5 sm:p-8 rounded-card-lg shadow-xl shadow-bordeaux/5 border border-cotton/80"
          : "bg-softpink p-3.5 sm:p-8 rounded-card-lg border border-cotton"
      }`}
    >
      {isDiet ? (
        <>
          <span className="inline-block px-2.5 py-0.5 sm:py-1 bg-cotton text-bordeaux text-[10px] sm:text-xs font-bold uppercase tracking-eyebrow rounded-full mb-1.5 sm:mb-3">
            Join YogHer Live
          </span>
          <h2 className="text-lg sm:text-[26px] font-extrabold text-bordeaux tracking-tight leading-tight">
            Find the right batch for you
          </h2>
          <p className="text-muted text-xs sm:text-sm mt-0.5 sm:mt-1.5 mb-2 sm:mb-6">
            Share your goal to get batch timings, fees and joining link directly on WhatsApp.
          </p>
        </>
      ) : (
        <>
          <h2 className="text-lg sm:text-[26px] font-extrabold text-bordeaux tracking-tight leading-tight">
            Find a batch that fits your day
          </h2>
          <p className="text-muted text-xs sm:text-sm mt-0.5 sm:mt-1.5 mb-2 sm:mb-6">
            We will send batch timings and your joining link on WhatsApp.
          </p>
        </>
      )}

      <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-4 w-full min-w-0" noValidate>
        {errorMsg && (
          <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl" role="alert">
            {errorMsg}
          </div>
        )}

        <div className="w-full min-w-0">
          <label htmlFor={`name-${variant}`} className="block text-[11px] sm:text-xs font-semibold text-bordeaux uppercase tracking-wider mb-1 sm:mb-1.5">
            Full name
          </label>
          <input
            id={`name-${variant}`}
            type="text"
            required
            placeholder="e.g. Priya Sharma"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSubmitting}
            className="w-full min-w-0 min-h-[38px] sm:min-h-[46px] px-3 sm:px-3.5 py-1.5 sm:py-2.5 rounded-xl border border-input-border bg-white text-bordeaux placeholder:text-muted/60 text-[16px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-bordeaux focus:border-bordeaux transition-all"
          />
        </div>

        <div className="w-full min-w-0">
          <label htmlFor={`phone-${variant}`} className="block text-[11px] sm:text-xs font-semibold text-bordeaux uppercase tracking-wider mb-1 sm:mb-1.5">
            WhatsApp number
          </label>
          <div className="flex gap-2 w-full min-w-0">
            <select
              aria-label="Country Code"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              disabled={isSubmitting}
              className="w-[88px] sm:w-[96px] shrink-0 min-h-[38px] sm:min-h-[46px] px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-input-border bg-white text-bordeaux text-[16px] sm:text-xs font-medium focus:outline-none focus:ring-2 focus:ring-bordeaux focus:border-bordeaux"
            >
              {COUNTRY_CODES.map((c) => (
                <option key={c.code} value={c.code} title={c.title}>
                  {c.label}
                </option>
              ))}
            </select>
            <input
              id={`phone-${variant}`}
              type="tel"
              required
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={countryCode === "+91" ? 10 : 15}
              placeholder={countryCode === "+91" ? "98765 43210" : "Phone number"}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              disabled={isSubmitting}
              className="flex-1 min-w-0 w-full min-h-[38px] sm:min-h-[46px] px-3 sm:px-3.5 py-1.5 sm:py-2.5 rounded-xl border border-input-border bg-white text-bordeaux placeholder:text-muted/60 text-[16px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-bordeaux focus:border-bordeaux transition-all"
            />
          </div>
        </div>

        <div className="w-full min-w-0">
          <label htmlFor={`selection-${variant}`} className="block text-[11px] sm:text-xs font-semibold text-bordeaux uppercase tracking-wider mb-1 sm:mb-1.5">
            {isDiet ? "Main goal" : "Preferred time"}
          </label>
          <select
            id={`selection-${variant}`}
            value={selection}
            onChange={(e) => setSelection(e.target.value)}
            disabled={isSubmitting}
            className="w-full min-w-0 min-h-[38px] sm:min-h-[46px] px-3 sm:px-3.5 py-1.5 sm:py-2.5 rounded-xl border border-input-border bg-white text-bordeaux text-[16px] sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-bordeaux focus:border-bordeaux transition-all"
          >
            {isDiet
              ? GOAL_OPTIONS.map((goal) => (
                  <option key={goal} value={goal}>
                    {goal}
                  </option>
                ))
              : TIME_OPTIONS.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full min-h-[42px] sm:min-h-[48px] px-5 sm:px-6 py-2 sm:py-3 rounded-full bg-bordeaux text-white font-bold text-xs sm:text-sm tracking-wide shadow-md hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bordeaux transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span>Opening WhatsApp...</span>
            </>
          ) : isDiet ? (
            "Get Batch Details on WhatsApp"
          ) : (
            "Get Batch Timings on WhatsApp"
          )}
        </button>

        <p className="text-center text-[11px] sm:text-xs text-muted/80 pt-0.5">
          Your details stay private. No spam.
        </p>
      </form>
    </div>
  );
}
