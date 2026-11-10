# Fix pass: YogHer + GlowHer landing pages

The project builds and the core works (menu, page-to-page links, pricing toggle, form submit). But a QA pass at 390px (mobile) and 1440px (desktop) found layout bugs, mobile UX problems and copy that drifted from the brief. Fix everything below. Do not redesign what is not listed. Keep the colors, fonts and section order as they are.

Work through the sections in order, then run the checklist at the end.

---

## A. Critical layout bugs (fix first)

### A1. Phone field overflows the form card (both pages, worst on GlowHer)
- On GlowHer mobile the whole page scrolls sideways (page width 455px on a 390px screen). On GlowHer desktop the phone input sticks out of the right edge of the form card. On YogHer mobile the input also runs past the card edge.
- Cause: in `components/LeadForm.tsx`, the phone `<input>` is `flex-1` with no `min-w-0`, and the country `<select>` shows long text ("India (+91)").
- Fix:
  - Country select: fixed width `w-[96px] shrink-0`, option labels short: `+91`, `+1`, `+44`, `+971`, `+65`, `+61` (keep the country name in `aria-label` or in the option's `title`).
  - Phone input: `flex-1 min-w-0 w-full`.
  - Row wrapper: `flex gap-2 w-full`.
  - Add `min-w-0` to the form card and to any flex/grid parent of the form in both heroes.
- Check: no horizontal scroll at 360px, 390px, 414px, 768px, 1024px and 1440px, on both pages.

### A2. Sticky mobile CTA bar covers the hero form
- On first load on mobile, the bottom bar ("Get free diet plan" / "Join from ₹999" + WhatsApp) sits on top of the form's Full name / phone fields.
- Fix in `components/StickyMobileCTA.tsx`: hide the bar while the hero form (`#diet` on YogHer, `#trial` on GlowHer) is on screen. Use an `IntersectionObserver` on the form and show the bar only after the form has scrolled out of view. Fade/slide it in, no layout jump. Keep `padding-bottom` on the footer so the bar never covers footer links.
- Also hide the bar while the mobile menu is open.

### A3. Mobile sliders are broken (Coaches and Testimonials)
- Testimonial cards stretch to fit the quote, so the quote shows on one line and gets cut off ("…78 kg to 68 kg with"). The first coach card and the first testimonial card also start at the screen edge with no left padding.
- Cause: slider items are `flex-shrink-0` with only `min-w-[280px]` and no width, so they size to their content.
- Fix (in `Coaches.tsx`, `Testimonials.tsx`, and any other horizontal slider):
  - Item: `w-[85%] max-w-[320px] shrink-0 snap-start whitespace-normal`.
  - Scroll container: `flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 scroll-px-4 no-scrollbar`. Remove the `-mx-4` trick if it causes the edge bug, or keep it but make sure the first card sits 16px from the screen edge.
  - Show a small hint that more cards exist: about 10–15% of the next card visible, plus dots or "Swipe" text under the slider.
- Desktop grid stays as it is.

### A4. Images: blank boxes instead of photos or fallbacks
- Coach photos and testimonial avatars render as empty boxes when an image does not load, and the logo shows a broken-image icon. `SafeImage`'s `onError` does not fire if the image fails before React hydrates, so the initials fallback never appears.
- Fix:
  1. Serve Cloudinary images straight from Cloudinary instead of through the Vercel image optimizer. Add a custom loader `lib/cloudinaryLoader.ts` that builds `https://res.cloudinary.com/dmtggqp0f/image/upload/f_auto,q_auto,w_{width},c_limit/{path}` and use it for every Cloudinary image (or set `unoptimized` on those images and pass a pre-sized `f_auto,q_auto,w_600` URL). This is faster and avoids Vercel image-optimization limits.
  2. In `SafeImage`, on mount check `img.complete && img.naturalWidth === 0` through a ref and switch to the fallback if true. Keep `onError` as well.
  3. Fallback = cotton-pink box with the person's initials, centered, same size as the photo.
  4. Logo: give the `<Image>` an explicit width/height that matches the real logo ratio, set `priority` only on the header logo, and add a text fallback (the word "YogHer" in bordeaux, weight 800) if the image fails.
  5. Footer logo currently shows as an empty white rounded box on the dark footer. Either show the logo inside a soft-pink pill with padding so it is clearly visible, or use the text wordmark "YogHer" / "GlowHer" in white.
- Open both pages with a normal internet connection and confirm all 8 coach photos, 3 testimonial photos and the logo load.

### A5. Anchor scroll offset
- `app/globals.css` sets `scroll-margin-top` on `section, [id]`. That hits every element with an id (inputs, labels too), and sections land about 230px below the top after a nav click.
- Fix: remove the `[id]` selector. Set `scroll-margin-top` equal to the real sticky header height (around 80px mobile, 88px desktop) only on the anchor sections: `#programs, #how, #coaches, #plans, #diet, #benefits, #session, #pricing, #trial`. After tapping a menu link the section's eyebrow label should sit just under the header.

---

## B. Mobile UX (390px)

### B1. GlowHer mobile hero order
Right now on mobile the two big buttons ("Join from ₹999 a month", "Chat on WhatsApp") come before the form, which pushes the form below the fold. Match YogHer: chip → H1 → sub-headline → **form** → the two buttons. Desktop stays two-column as it is.

### B2. Make long mobile sections compact
The pages are very long on mobile (YogHer about 11,400px, GlowHer about 9,100px). Cut height without removing content:
- **YogHer Programs:** each card is about 300px tall. On mobile use a compact row: small cotton icon circle on the left, title + one-line description on the right, the whole card is a tap target. Remove the separate "GET DIET CHART FOR THIS GOAL" line on mobile. Tapping a card scrolls to `#diet` and pre-selects that goal in the form's "Main goal" dropdown (pass the goal through a URL hash/query or a shared state). Keep the current card style on desktop.
- **YogHer How it works:** on mobile use a simple numbered list (number on the left, title + one line on the right), no big cards and no huge faded numbers.
- **GlowHer Benefits:** on mobile show the 4 benefits as compact cards (2x2 grid or tight list). Remove the repeated "100% NON-INVASIVE / PRODUCT-FREE" footer from every card (see C3).
- **GlowHer Coaches:** the photo is about 450px tall on mobile. Use a horizontal card on mobile: photo 110–120px wide on the left (square, rounded), text on the right.
- **YogHer Coaches on mobile:** use a shorter photo ratio (`aspect-[4/3]` or `aspect-square`) inside the slider.

### B3. Tap targets and inputs
- Every button and link in the menu, sliders and forms must be at least 44px tall.
- Inputs must use `font-size: 16px` on mobile so iOS does not zoom in on focus.
- Phone input: `inputMode="numeric"`, `autoComplete="tel-national"`, `maxLength` 10 for +91.

---

## C. Copy and content: go back to the brief

A lot of copy was rewritten or invented. This is a paid-ads landing page, so every claim must be one the client actually makes. Health and medical-sounding claims can also get Meta ads rejected. Replace the text below with the exact brief content (already in `lib/content.ts` structure; update the values).

### C1. Remove invented or risky claims
Remove or replace all of these:
- Plan features that are not in the brief: "Save 60% with locked-in quarterly rate", "Progressive habit & metabolic conditioning", "Monthly diet review & calibration", "Unlimited batch flexibility", "Complete hormonal & body transformation", "Comprehensive lifestyle & posture reset", "Priority batch reservation & recording archive", "Long-term sustainable weight & PCOS reversal", "Senior master trainer assigned", "Lifetime healthy habits", "Complete health & metabolic transformation", "Direct WhatsApp VIP support group", "Advanced facial sculpting techniques", "Personalized face assessment & tips", "Priority batch slot flexibility". **"PCOS reversal" must not appear anywhere.**
- Program descriptions with medical tone ("metabolic enhancement", "calorie-deficit", "cycle regulation practices"). Use the brief's one-liners.
- GlowHer benefit text: remove "smoothing smile lines", "oxygenation", "de-puff", "headaches", "stress lines". Use the brief's lines (lifted, toned look for cheeks, jawline and neck; natural glow from massage and movement, no creams or devices; release forehead, jaw and eye tension from screens and stress; a fixed batch and a coach who checks in).
- Testimonial badges "Verified Member" and "✓ Community Verified": remove. Show name + "90-day transformation" only.
- Coach card footers "GOOGLE MEET LIVE · PERSONAL FEEDBACK" and GlowHer "Available Mon–Fri live batches" with a green dot: remove.
- GlowHer batch dropdown: options must be only "Early morning", "Morning", "Afternoon", "Evening". Do not show made-up time ranges like "(5:30 AM - 7:00 AM)".
- FinalCTA sub-text "Join thousands of Indian women who have built sustainable energy, hormonal health…": use the brief: "Take the 2-minute quiz and join 5,000+ women on the mat as early as tomorrow morning."

### C2. Exact plan features to use

YogHer — Group:
- 1 Month Trial ₹1,199 (strike ₹2,000) / 30 days: Daily live sessions; Personalised diet chart; 10-min daily doubt session; Women-only community; WhatsApp support.
- 3 Months Progress ₹2,399 (strike ₹6,000) / 90 days, Most popular: Daily live and recorded sessions; Personalised diet chart; Cycle and wellness tracking; Weekly progress check-ins; Priority community support.
- 6 Months Transformation ₹3,599 (strike ₹12,000) / 180 days: Everything in 3 Months; 24x7 WhatsApp support; Dedicated coach check-ins; Hormonal balance protocols; Best value per month.

YogHer — 1-on-1 (same features for all four, list once under the intro, not per card): Certified instructor as your dedicated trainer; Your own timing, fixed for the month; Diet plan by a certified dietitian; Schedule by our head fitness advisor; Classes Monday to Friday; Private support group with your teacher plus daily reminders.
- 1 Month Assessment and Foundation ₹6,999; 3 Months Transformation Program ₹16,999 (Most popular); 6 Months Deep Transformation ₹27,999; 12 Months Lifestyle Coaching ₹47,999.
- On mobile, show these four as compact rows (name + price) under the shared feature list instead of four tall cards.

GlowHer (same features for all three, listed once): 30-minute live sessions; 6 batch options, 5:30 AM to 8:30 PM; Monday to Friday classes; Custom timing on request; WhatsApp support.
- 1 Month Trial ₹999 / 30 days; 3 Months Progress ₹1,999 / 90 days (Most popular, "About ₹666 a month"); 6 Months Transformation ₹2,999 / 180 days ("About ₹500 a month").

### C3. Small text fixes
- Price suffix: replace "/ plan" with the real duration: "/ 30 days", "/ 90 days", "/ 180 days", "/ 365 days".
- Eyebrow labels: use plain ones. YogHer: Programs, How it works, Every membership includes, Coaches, Success stories, Plans, FAQ. GlowHer: Why face yoga, Your 30-minute session, Your coaches, Pricing, Good to know. Remove "SUB-BRAND FEATURE", "SEAMLESS ONBOARDING", "ALL-INCLUSIVE EXPERIENCE", "OUR MENTORS", "MEMBER STORIES", "MEMBERSHIP PLANS", "CLEAR ANSWERS", "NATURAL ANATOMY", "EXPERT MENTORS", "SIMPLE PRICING", "RESERVE YOUR SPOT", "FACT 01–04".
- "Every membership includes" items, use exactly: All sessions live on Google Meet; Join any batch, 5 AM to 9 PM IST; Personalised diet chart around your ghar ka khana; 10-minute daily doubt session with your teacher; WhatsApp support from a fitness advisor.
- No exclamation marks in client-facing copy (for example, the form success message: "Thank you. Our team will message you on WhatsApp shortly.").
- No emojis anywhere.

---

## D. Desktop polish (1440px)
- GlowHer hero form: after the A1 fix, make sure the form card is not wider than its column and the phone row fits inside.
- YogHer "Every membership includes" block: the items sit in a 2-column grid that only fills the left 2/3 of the pink card. Either use 3 columns that fill the full width, or put the heading on the left and the list on the right (two-column layout), so there is no empty right side.
- Coach cards on desktop: once the real photos load (A4), check they crop on faces (`object-cover object-top`).

---

## E. Do not break what already works
These passed testing. Keep them working:
- Hamburger menu: opens, closes on X, Escape, backdrop and any link tap; body scroll locks and unlocks; brand switcher inside the menu works.
- Cross-links: YogHer ↔ GlowHer from the header switcher, nav item, the GlowHer card and the footer.
- Pricing toggle Group / 1-on-1, with Most popular shown first on mobile.
- Form submit to `/api/lead` with UTMs and the success state.
- `npm run build` passes with no type errors.

---

## F. Final checklist (run and report)
1. `npm run build` passes, no TypeScript or lint errors.
2. No horizontal scroll on either page at 360, 390, 414, 768, 1024 and 1440px. Check with `document.documentElement.scrollWidth === window.innerWidth`.
3. On a 390px screen the hero form is fully visible and not covered by the sticky bar; the sticky bar shows only after scrolling past the form.
4. Coaches and testimonials sliders: quotes wrap fully, first card has 16px left gap, next card peeks.
5. All 8 coach photos, 3 testimonial photos and the logo load; if one is blocked, initials/wordmark fallback shows (test by changing one URL to a bad path).
6. Every nav/menu anchor lands with the section label just below the header.
7. Search the codebase: none of the removed phrases from C1 remain (`grep -ri "reversal\|verified\|metabolic\|/ plan" app components lib`).
8. Lighthouse mobile on both pages: Performance 90+, Accessibility 95+. Report the scores.
9. Share before/after screenshots of both pages at 390px and 1440px.
