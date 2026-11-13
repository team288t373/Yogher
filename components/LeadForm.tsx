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
  const [isSubmitted, setIsSubmitted] = useState(false);
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

    try {
      // 1. Send to client webhook if configured
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

      // 2. Send to local API route if running in server mode
      try {
        await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch {
        // Ignored in static export mode
      }

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
      }

      setIsSubmitted(true);
      // Automatically redirect to WhatsApp Business with pre-filled message
      if (typeof window !== "undefined") {
        setTimeout(() => {
          window.location.href = whatsappHref;
        }, 400);
      }
    } catch {
      // Always allow the user to see confirmation and proceed to WhatsApp
      setIsSubmitted(true);
      if (typeof window !== "undefined") {
        setTimeout(() => {
          window.location.href = whatsappHref;
        }, 400);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappHref = isDiet
    ? `https://wa.me/918679244416?text=${encodeURIComponent(
        `Hi YogHer! I'd like to join YogHer live classes.\n\nName: ${name || "Member"}\nGoal: ${selection}\nPhone: ${countryCode} ${phoneNumber}\nPlease share batch timings and joining details.`
      )}`
    : `https://wa.me/918679244416?text=${encodeURIComponent(
        `Hi GlowHer! I'd like to know more about the live face yoga classes.\n\nName: ${name || "Member"}\nPreferred Time: ${selection}\nPhone: ${countryCode} ${phoneNumber}`
      )}`;

  if (isSubmitted) {
    return (
      <div
        id={id}
        className={`${
          isDiet
            ? "bg-white p-6 sm:p-8 rounded-card-lg shadow-lg border border-cotton/60"
            : "bg-softpink p-6 sm:p-8 rounded-card-lg border border-cotton"
        } text-center flex flex-col items-center justify-center min-h-[380px] w-full min-w-0`}
      >
        <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-600">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-extrabold text-bordeaux mb-2">
          Opening WhatsApp...
        </h3>
        <p className="text-muted text-base max-w-sm mb-6 leading-relaxed">
          Connecting you with our team on WhatsApp with your details.
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors shadow-md gap-2"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
          </svg>
          <span>Click here to open WhatsApp</span>
        </a>
      </div>
    );
  }

  return (
    <div
      id={id}
      className={`w-full min-w-0 ${
        isDiet
          ? "bg-white p-6 sm:p-8 rounded-card-lg shadow-xl shadow-bordeaux/5 border border-cotton/80"
          : "bg-softpink p-6 sm:p-8 rounded-card-lg border border-cotton"
      }`}
    >
      {isDiet ? (
        <>
          <span className="inline-block px-3 py-1 bg-cotton text-bordeaux text-xs font-bold uppercase tracking-eyebrow rounded-full mb-3">
            Join YogHer Live
          </span>
          <h2 className="text-2xl sm:text-[26px] font-extrabold text-bordeaux tracking-tight leading-tight">
            Find the right batch for you
          </h2>
          <p className="text-muted text-sm mt-1.5 mb-6">
            Share your goal to get batch timings, fees and joining link directly on WhatsApp.
          </p>
        </>
      ) : (
        <>
          <h2 className="text-2xl sm:text-[26px] font-extrabold text-bordeaux tracking-tight leading-tight">
            Find a batch that fits your day
          </h2>
          <p className="text-muted text-sm mt-1.5 mb-6">
            We will send batch timings and your joining link on WhatsApp.
          </p>
        </>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 w-full min-w-0" noValidate>
        {errorMsg && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl" role="alert">
            {errorMsg}
          </div>
        )}

        <div className="w-full min-w-0">
          <label htmlFor={`name-${variant}`} className="block text-xs font-semibold text-bordeaux uppercase tracking-wider mb-1.5">
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
            className="w-full min-w-0 min-h-[46px] px-3.5 py-2.5 rounded-xl border border-input-border bg-white text-bordeaux placeholder:text-muted/60 text-[16px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-bordeaux focus:border-bordeaux transition-all"
          />
        </div>

        <div className="w-full min-w-0">
          <label htmlFor={`phone-${variant}`} className="block text-xs font-semibold text-bordeaux uppercase tracking-wider mb-1.5">
            WhatsApp number
          </label>
          <div className="flex gap-2 w-full min-w-0">
            <select
              aria-label="Country Code"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              disabled={isSubmitting}
              className="w-[96px] shrink-0 min-h-[46px] px-2.5 py-2 rounded-xl border border-input-border bg-white text-bordeaux text-[16px] sm:text-xs font-medium focus:outline-none focus:ring-2 focus:ring-bordeaux focus:border-bordeaux"
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
              className="flex-1 min-w-0 w-full min-h-[46px] px-3.5 py-2.5 rounded-xl border border-input-border bg-white text-bordeaux placeholder:text-muted/60 text-[16px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-bordeaux focus:border-bordeaux transition-all"
            />
          </div>
        </div>

        <div className="w-full min-w-0">
          <label htmlFor={`selection-${variant}`} className="block text-xs font-semibold text-bordeaux uppercase tracking-wider mb-1.5">
            {isDiet ? "Main goal" : "Preferred time"}
          </label>
          <select
            id={`selection-${variant}`}
            value={selection}
            onChange={(e) => setSelection(e.target.value)}
            disabled={isSubmitting}
            className="w-full min-w-0 min-h-[46px] px-3.5 py-2.5 rounded-xl border border-input-border bg-white text-bordeaux text-[16px] sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-bordeaux focus:border-bordeaux transition-all"
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
          className="w-full min-h-[48px] px-6 py-3 rounded-full bg-bordeaux text-white font-bold text-sm tracking-wide shadow-md hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bordeaux transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span>Submitting...</span>
            </>
          ) : isDiet ? (
            "Get Batch Details on WhatsApp"
          ) : (
            "Send me batch timings"
          )}
        </button>

        <p className="text-center text-xs text-muted/80 pt-1">
          Your details stay private. No spam.
        </p>
      </form>
    </div>
  );
}
