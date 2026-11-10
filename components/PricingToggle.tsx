"use client";

import { useState } from "react";
import Link from "next/link";
import { yogherContent } from "@/lib/content";
import { PricingPlan } from "@/lib/types";

export default function PricingToggle() {
  const [mode, setMode] = useState<"group" | "personal">("group");

  const groupPlans = yogherContent.plansGroup;
  const personalPlans = yogherContent.plansPersonal.items;
  const personalSharedFeatures = yogherContent.plansPersonal.sharedFeatures;

  // For mobile display: re-order group plans so the "popular" plan comes first
  const popularGroup = groupPlans.find((p) => p.popular);
  const otherGroup = groupPlans.filter((p) => !p.popular);
  const mobileOrderedGroup = popularGroup ? [popularGroup, ...otherGroup] : groupPlans;

  const renderGroupCard = (plan: PricingPlan, isMobileView: boolean) => {
    const isDark = plan.popular;

    return (
      <div
        key={`${plan.id}-${isMobileView ? "mobile" : "desktop"}`}
        className={`relative flex flex-col justify-between p-5 sm:p-6 lg:p-8 rounded-card-lg transition-all duration-200 ${
          isDark
            ? "bg-bordeaux text-white shadow-2xl scale-[1.02] border-2 border-bordeaux-light z-10 hover:shadow-2xl hover:-translate-y-0.5"
            : "bg-white text-bordeaux border border-cotton shadow-sm hover:shadow-lg hover:-translate-y-0.5"
        }`}
      >
        {plan.popular && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-cotton text-bordeaux text-xs font-extrabold uppercase tracking-eyebrow rounded-full shadow-sm">
            Most popular
          </div>
        )}

        <div>
          <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-bordeaux"}`}>
            {plan.name}
          </h3>

          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-6">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {plan.price}
            </span>
            {plan.strikePrice && (
              <span className={`text-sm sm:text-base line-through font-medium ${isDark ? "text-cotton" : "text-muted"}`}>
                {plan.strikePrice}
              </span>
            )}
            <span className={`text-xs font-semibold ${isDark ? "text-cotton" : "text-muted"}`}>
              {plan.duration}
            </span>
          </div>

          <div className={`h-px w-full mb-6 ${isDark ? "bg-bordeaux-light" : "bg-cotton/60"}`} />

          <ul className="space-y-3.5 mb-8">
            {plan.features?.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                <span
                  className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                    isDark ? "bg-cotton text-bordeaux" : "bg-cotton/60 text-bordeaux"
                  }`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className={isDark ? "text-softpink" : "text-bordeaux"}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Link
            href={plan.ctaHref}
            className={`w-full min-h-[48px] px-6 py-3 rounded-full font-bold text-sm tracking-wide flex items-center justify-center transition-all ${
              isDark
                ? "bg-cotton text-bordeaux hover:bg-white"
                : "bg-bordeaux text-white hover:opacity-95"
            }`}
          >
            {plan.ctaText}
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Switcher Controls */}
      <div className="flex justify-center mb-8">
        <div
          role="group"
          aria-label="Class type switcher"
          className="inline-flex p-1.5 bg-cotton/50 rounded-full border border-cotton shadow-inner"
        >
          <button
            type="button"
            aria-pressed={mode === "group"}
            onClick={() => setMode("group")}
            className={`min-h-[44px] px-6 py-2.5 rounded-full text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-bordeaux ${
              mode === "group"
                ? "bg-bordeaux text-white shadow-md"
                : "text-bordeaux hover:text-bordeaux/80"
            }`}
          >
            Group classes
          </button>
          <button
            type="button"
            aria-pressed={mode === "personal"}
            onClick={() => setMode("personal")}
            className={`min-h-[44px] px-6 py-2.5 rounded-full text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-bordeaux ${
              mode === "personal"
                ? "bg-bordeaux text-white shadow-md"
                : "text-bordeaux hover:text-bordeaux/80"
            }`}
          >
            1-on-1 Personal
          </button>
        </div>
      </div>

      {mode === "group" ? (
        <>
          {/* Desktop Grid for Group */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {groupPlans.map((plan) => renderGroupCard(plan, false))}
          </div>

          {/* Mobile Stack for Group (Most Popular First) */}
          <div className="flex md:hidden flex-col gap-6">
            {mobileOrderedGroup.map((plan) => renderGroupCard(plan, true))}
          </div>
        </>
      ) : (
        <div className="w-full max-w-4xl mx-auto">
          {/* Intro line */}
          <div className="text-center mb-6 p-4 sm:p-5 bg-cotton/40 rounded-card border border-cotton text-bordeaux text-sm sm:text-base leading-relaxed">
            {yogherContent.plansPersonal.intro}
          </div>

          {/* Shared 1-on-1 Feature List (listed once) */}
          <div className="mb-8 p-6 bg-white rounded-card-lg border border-cotton shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-eyebrow text-bordeaux mb-4">
              All 1-on-1 plans include
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {personalSharedFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-cotton text-bordeaux flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </span>
                  <span className="text-bordeaux font-medium leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Compact rows (name + price + CTA) */}
          <div className="flex md:hidden flex-col gap-3">
            {personalPlans.map((plan) => (
              <div
                key={plan.id}
                className={`p-4 rounded-card border transition-all flex items-center justify-between gap-3 ${
                  plan.popular
                    ? "bg-bordeaux text-white border-bordeaux-light shadow-md"
                    : "bg-white text-bordeaux border border-cotton shadow-sm"
                }`}
              >
                <div className="min-w-0 flex-1">
                  {plan.popular && (
                    <span className="inline-block px-2 py-0.5 bg-cotton text-bordeaux text-[10px] font-bold uppercase tracking-wider rounded-full mb-1">
                      Most popular
                    </span>
                  )}
                  <h3 className={`text-sm font-bold leading-tight ${plan.popular ? "text-white" : "text-bordeaux"}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-lg font-extrabold">{plan.price}</span>
                    <span className={`text-xs ${plan.popular ? "text-cotton" : "text-muted"}`}>
                      {plan.duration}
                    </span>
                  </div>
                </div>

                <Link
                  href={plan.ctaHref}
                  className={`shrink-0 min-h-[44px] px-4 py-2.5 rounded-full font-bold text-xs flex items-center justify-center ${
                    plan.popular
                      ? "bg-cotton text-bordeaux hover:bg-white"
                      : "bg-bordeaux text-white hover:opacity-95"
                  }`}
                >
                  Talk to advisor
                </Link>
              </div>
            ))}
          </div>

          {/* Desktop: 4 Cards in Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {personalPlans.map((plan) => (
              <div
                key={plan.id}
                className={`p-6 rounded-card-lg border flex flex-col justify-between transition-all duration-200 ${
                  plan.popular
                    ? "bg-bordeaux text-white border-2 border-bordeaux-light shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                    : "bg-white text-bordeaux border border-cotton shadow-sm hover:shadow-lg hover:-translate-y-0.5"
                }`}
              >
                <div>
                  {plan.popular && (
                    <span className="inline-block px-2.5 py-0.5 bg-cotton text-bordeaux text-[10px] font-extrabold uppercase tracking-wider rounded-full mb-2">
                      Most popular
                    </span>
                  )}
                  <h3 className={`text-base font-bold mb-3 ${plan.popular ? "text-white" : "text-bordeaux"}`}>
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-extrabold">{plan.price}</span>
                    <span className={`block text-xs mt-0.5 ${plan.popular ? "text-cotton" : "text-muted"}`}>
                      {plan.duration}
                    </span>
                  </div>
                </div>

                <Link
                  href={plan.ctaHref}
                  className={`w-full min-h-[44px] px-4 py-2.5 rounded-full font-bold text-xs tracking-wide flex items-center justify-center ${
                    plan.popular
                      ? "bg-cotton text-bordeaux hover:bg-white"
                      : "bg-bordeaux text-white hover:opacity-95"
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
