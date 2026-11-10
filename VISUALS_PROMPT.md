# Visual upgrade: YogHer + GlowHer landing pages

The pages work, but they are almost all text and flat colour blocks. Customers coming from ads need to *see* real women, real coaches and real practice. Add real photos from yogher.in across both pages, fix the logo, and add a few simple visual elements. Keep the existing colours, fonts, copy, form placement and section order. Do not slow the pages down (rules in section F).

Every image below is a real photo already on yogher.in (Cloudinary). Do not use stock photos, AI-generated images or random Unsplash images. Do not invent new copy.

**Base URL for all paths below:** `https://res.cloudinary.com/dmtggqp0f/image/upload/` + path. Add all of them to `lib/content.ts` as named constants (for example `IMAGES.heroLiveClass`, `IMAGES.gallery[]`), and render every Cloudinary image through the existing `SafeImage` + `cloudinaryLoader`.

---

## A. Fix the logo (header and footer)

Problem: the logo file is a 1254x1254 square PNG (about 1 MB): a pink circle with a white yoga figure and the word "YOGHER" inside it. In the header it is squeezed into `width={130} height={38}` with `h-8`, so it renders as a tiny 32px circle where the text cannot be read, or it fails.

Fix:
1. Download `https://yogher.in/yogher_logo.png.png` once and save it in the project as `public/brand/yogher-logo.png`, resized to **256x256** (and a `yogher-logo.webp` version). Use the local file. Do not hotlink the 1 MB original.
2. Header (YogHer): show the round logo at **44x44px (mobile 40px)** with the wordmark text "YogHer" next to it (Inter 800, 24–26px, bordeaux). `width={44} height={44}`, `priority`.
3. Header (GlowHer): same round YogHer logo at 40px, then "GlowHer" (800) with "by YogHer" small underneath. This ties the sub-brand to the parent brand visually.
4. Footer (both pages): round logo 56px on the bordeaux background, with the wordmark in white next to it. Remove the empty white box.
5. Also use `public/brand/yogher-logo.png` for `app/icon` / favicon and as the Open Graph image fallback.

---

## B. YogHer page (`/`) — where to add visuals

### B1. Hero: add the live-class photo and social-proof faces
Photo: `v1779726637/Gemini_Generated_Image_f5wtff5wtff5wtff_lshpe6.png` (woman practising at home in front of a laptop showing a live class). This is the photo yogher.in uses on its own homepage.

- **Desktop (lg and up):** right column becomes a rounded photo panel (radius 32px, height about 600px, `object-cover`). The existing lead form card sits **on top of the photo**, anchored to the bottom-left of the panel and overlapping it slightly to the left (for example `-ml-16 mt-auto`), so the photo is visible above and to the right of the form. Add one small white floating chip on the photo, top-right: "Live on Google Meet" with a small pulsing dot. Form must stay fully readable and fully visible above the fold at 1440x900.
- **Mobile:** do not push the form down. Put the photo as a short rounded banner (height 180px, `object-cover object-center`) directly **above** the H1, with the same "Live on Google Meet" chip on it. Then H1 → sub-headline → form → buttons.
- This hero photo is the LCP image: `priority`, `fetchPriority="high"`, `sizes="(min-width:1024px) 560px, 100vw"`, Cloudinary width capped at 1100px desktop / 780px mobile.
- **Avatar stack under the CTA buttons** (left column, desktop and mobile): 3 overlapping round photos (40px, white 2px border) + text "5,000+ women have started their YogHer journey". Photos:
  - `v1778651263/yogher/testimonials/nb5g3vsdie75r5fwqik2.png` (Krati Sharma)
  - `v1778652067/yogher/testimonials/x19y44l21sipq4prg2ze.png` (Meenal Thokare)
  - `v1778652922/yogher/testimonials/s7hzbf9ostk6uf3mggo0.png` (Sneha Reddy)

### B2. Programs: one photo per program card
Each program card gets a photo on top (desktop: `aspect-[4/3]`, radius matches card, `object-cover`). Mobile compact row: 72x72 rounded thumbnail on the left, title + one line on the right.

| Program | Photo path | What it shows |
|---|---|---|
| Weight Loss | `v1785862764/yogher/instructorsgallery/fxpzrudcpe3xfvr9tuhx.png` | Warrior II on a lawn |
| Fat Loss | `v1780150084/yogher/instructorsgallery/pqemeacqpen7zbtc061x.png` | Dynamic lunge stretch in a forest |
| PCOS and Irregular Periods | `v1785862770/yogher/instructorsgallery/dtuj5lsvcjfvwbsrgavc.png` | Gentle reclined twist on a purple mat, pink wall |
| Pregnancy Yoga | `v1780150961/yogher/instructorsgallery/mca07a6qrtx28iteqrsz.png` | Calm seated pose outdoors, smiling |
| Body Toning | `v1779257187/yogher/instructorsgallery/dpygk3mdwo2rthia4avv.jpg` | Crescent lunge on a blue mat |
| Stress Relief and Fitness | `v1779258686/yogher/instructorsgallery/xdgxxcdiexzuvitse5aa.jpg` | Child's pose by a misty river |

GlowHer cross-link card: add Manisha Chandani's portrait (`v1785862762/yogher/instructors/albytawz1le5e1u6f68k.png`) as a round 96px image on the left of the card (desktop) / top (mobile).

### B3. New section: "On the mat with our coaches" (photo strip)
Add between "How it works" and "Every membership includes". Heading (eyebrow "Our coaches", H2 "Real coaches. Real practice."). A single row of photos that **slowly auto-scrolls** (CSS-only marquee, `animation: scroll 60s linear infinite`, duplicated list for a seamless loop). Pauses on hover. Stops completely when `prefers-reduced-motion: reduce` (then it becomes a normal swipeable row). Each photo: 220x280 desktop / 160x210 mobile, radius 20px, small caption chip with the coach's first name.

Photos (coach name → path):
- Amisha → `v1779173122/yogher/instructorsgallery/ow9g7ubpwqpklhsx4adi.jpg`
- Diksha → `v1780151754/yogher/instructorsgallery/uvvcdnycqssdkp3mxiis.png`
- Hejeebu → `v1780151251/yogher/instructorsgallery/swhz8oo5cnjjv22gndbz.png`
- Ithieeka → `v1780150085/yogher/instructorsgallery/psqm3mray7drt14e0zrv.png`
- Kashish → `v1780152356/yogher/instructorsgallery/gvnqngvosokr4jsctvyw.png`
- Lipakshi → `v1779189045/yogher/instructorsgallery/qb3yxknuqzwwk2nphelw.jpg`
- Neha → `v1779168146/yogher/instructorsgallery/wdr4kk6jlclmhiawx353.png`
- Pooja → `v1780149719/yogher/instructorsgallery/iunmzef0emt0ikdluhgm.png`
- Samruddhi → `v1779185210/yogher/instructorsgallery/fy0v9dcbv0ncf05vk9ns.png`
- Shivangi → `v1780150970/yogher/instructorsgallery/epsrwspvk16ks6hqlgxa.png`
- Shubhashini → `v1779258699/yogher/instructorsgallery/oqz7jobkbhnxpn7300gh.jpg`
- Neha (2) → `v1779168385/yogher/instructorsgallery/zxvz6srin2fjdeir5ph5.png`

All lazy-loaded (`loading="lazy"`), width capped at 440px.

### B4. "Every membership includes": add a photo
Make it two columns on desktop: photo on the left (rounded 28px, `aspect-[4/5]`), list on the right. Photo: `v1779168385/yogher/instructorsgallery/zxvz6srin2fjdeir5ph5.png`. On mobile: photo as a 200px banner above the list. Add a small line icon (see section D) before each list item instead of a plain tick.

### B5. How it works: icons
Add one simple line icon per step (quiz/clipboard, plate/food, clock, video camera), 28px, bordeaux, inside a 52px cotton circle. Keep the step numbers small.

### B6. Coaches: show them in action on hover
Coach cards keep the portrait. On desktop hover, cross-fade to one of that coach's practice photos (opacity transition, 300ms). On mobile no hover; keep the portrait. Map:
- Vishakha → `v1780150216/yogher/instructorsgallery/wykni5lyqllujuyj7ehp.png`
- Neha Bisht → `v1779168146/yogher/instructorsgallery/wdr4kk6jlclmhiawx353.png`
- Shivangi → `v1780150970/yogher/instructorsgallery/epsrwspvk16ks6hqlgxa.png`
- Amrita Singh Gautam → `v1779257210/yogher/instructorsgallery/weovpbirmfbqu1rlwpsm.jpg`
- Hema Chauhan, Anisha Inroda → open their pages (https://yogher.in/teachers/hema-chauhan, /anisha-inroda) and use the first "Glimpses from the mat" photo.

### B7. Testimonials: bigger real photos
Testimonial photos are currently tiny circles. Make each card show the member photo larger (80px round on mobile; on desktop a 96px round photo or a top photo strip `aspect-[4/3]`). Use the existing three photos.

### B8. New section: "From our journal" (before FAQ)
4 cards linking to the real blog posts on yogher.in (open in the same tab), each with its cover image (`aspect-[4/3]`, radius 20px), title and one-line excerpt. Desktop 4 columns, mobile swipe row.
- The 10-Minute Hormone Reset (That Actually Works) → `https://yogher.in/blog/the-10-minute-hormone-reset-that-actually-works` → `v1781618271/yogher/blogs/tkq7kwaqvydgllhxosm4.png`
- Yoga For Irregular Periods: What Actually Works → `https://yogher.in/blog/yoga-for-irregular-periods-what-actually-works` → `v1781616511/yogher/blogs/bnh25qnglw2h5o0hq6qh.png`
- Prenatal Yoga: A Trimester-by-Trimester Guide → `https://yogher.in/blog/prenatal-yoga-a-trimester-by-trimester-guide` → `v1781617196/yogher/blogs/qn0gor1wawpdorye3jc0.png`
- Fat Loss Myths Most Women Still Believe → `https://yogher.in/blog/fat-loss-myths-most-women-still-believe` → `v1781617566/yogher/blogs/pjcjyuwkxtcconly33th.png`

### B9. Final CTA: background photo
Use `v1780149719/yogher/instructorsgallery/iunmzef0emt0ikdluhgm.png` (practice by the river with mountains) as a full-width background (`object-cover`), with a bordeaux overlay at about 82% opacity so the white headline keeps AA contrast. Lazy-load it.

---

## C. GlowHer page (`/glowher`) — where to add visuals

Important: yogher.in has **no face yoga photos yet**. Do not use AI images or stock. Use the two face yoga coaches' real photos, plus the illustration in C3, and leave clearly marked slots for real face yoga photos (C6).

### C1. Hero: coach faces
Inside the pink hero card, under the two CTA buttons (desktop) / under the form (mobile), add a row: two overlapping round portraits (52px, white border) + text "Live with certified face yoga coaches Manisha and Ithieeka".
- Manisha Chandani → `v1785862762/yogher/instructors/albytawz1le5e1u6f68k.png`
- Ithieeka → `v1780150081/yogher/instructors/zrsn3rkt41xfu72ysjwd.png`

### C2. Benefits: icons + one photo
- Give each of the 4 benefit cards one simple line icon (lift/arrow-up, sparkle, relaxed/wave, calendar-check), 28px bordeaux in a 52px cotton circle.
- Desktop: add a tall photo to the left of the 2x2 benefits grid, `aspect-[3/4]`, radius 28px: `v1780150970/yogher/instructorsgallery/epsrwspvk16ks6hqlgxa.png` (calm face lifted towards the sky). Mobile: same photo as a 200px banner above the cards.

### C3. "Your 30-minute session": face-zone illustration
Build a simple, elegant **inline SVG line drawing of a woman's face** (front view, single bordeaux stroke, no fill, minimal, not cartoonish) with 4 small numbered pink markers on: forehead, eyes, cheeks, jawline/neck. Place it next to the 3 session steps on desktop (illustration left, steps right) and above the steps on mobile (max 220px tall). In the "Face workout" step, list the same zones so the markers make sense. This is code, not an image file, so it costs nothing in load time.

### C4. Coaches: add their practice photos
Under each face yoga coach card add a row of 3 small photos (`aspect-square`, radius 14px) from their gallery:
- Manisha: `v1785862770/yogher/instructorsgallery/dtuj5lsvcjfvwbsrgavc.png`, `v1785862764/yogher/instructorsgallery/fxpzrudcpe3xfvr9tuhx.png`, `v1785862766/yogher/instructorsgallery/ljfmkj6kfbearmsjixrj.png`
- Ithieeka: `v1780150084/yogher/instructorsgallery/pqemeacqpen7zbtc061x.png`, `v1780150085/yogher/instructorsgallery/psqm3mray7drt14e0zrv.png`, `v1780150090/yogher/instructorsgallery/cpdcmt8xesoqojp2stoi.png`

### C5. Final section / footer band: background photo
Before the footer add a short CTA band ("Your natural glow, 30 minutes a day." + "Join from ₹999") with the background photo `v1780150961/yogher/instructorsgallery/mca07a6qrtx28iteqrsz.png` and a bordeaux 82% overlay. Lazy-load.

### C6. Slots for real face yoga photos (empty for now)
Add `glowherContent.faceYogaPhotos: { src: string; alt: string }[] = []` in `lib/content.ts`. When it has items, render a "Inside a GlowHer class" photo row (same style as B3, no auto-scroll) after the session section. When empty, render nothing. Add a comment in `content.ts`: "Add real face yoga class photos here (client to supply)". Do the same for an optional `glowherContent.heroPhoto`: when set, show it in the hero card like the YogHer hero (B1); when empty, keep the current hero.

---

## D. Icons
- Use `lucide-react` (tree-shaken, import only the icons used) for all line icons: steps, benefits, membership list, quick facts on GlowHer. Stroke width 2, bordeaux, inside cotton circles. No emoji anywhere.
- Keep icon usage consistent: same size and circle style everywhere.

---

## E. Small visual polish
- Section backgrounds: alternate softpink and white sections so the page does not look like one flat pink sheet (stats band stays bordeaux).
- Cards: keep the existing radius; add a soft shadow on hover on desktop only (`hover:shadow-lg hover:-translate-y-0.5`, 200ms).
- Images: every image gets a cotton background while loading (no grey boxes, no layout shift). Always set width/height or `fill` with a fixed-ratio parent.
- All photos `object-cover` with `object-position` set so faces are not cut (portraits `object-top`).

---

## F. Performance rules (must still pass)
- Only the hero photo (YogHer) and the header logo get `priority`. Everything else `loading="lazy"`.
- Every `SafeImage` gets a correct `sizes` attribute. Never request images wider than 2x the displayed size (Cloudinary `w_` via the loader).
- Marquee: CSS only, no JS library. Pause off-screen is not needed, but respect `prefers-reduced-motion`.
- No new heavy dependencies except `lucide-react`.
- Lighthouse mobile after the change: Performance 90+, LCP under 2.5s, CLS under 0.05, Accessibility 95+. Report the scores.
- Every image has meaningful `alt` text (e.g. "YogHer coach Shivangi in a seated pose outdoors"). Decorative SVG gets `aria-hidden="true"`.

---

## G. Checklist
1. Logo visible and sharp in the header and footer of both pages (round logo + wordmark).
2. YogHer hero: photo + overlapping form on desktop, photo banner on mobile, avatar stack visible, form still fully above the fold at 1440x900 and visible on first scroll at 390x844.
3. All 6 program cards show their photos; mobile rows show thumbnails.
4. Photo strip auto-scrolls, pauses on hover, stops with reduced motion.
5. Coach hover swap works on desktop; nothing breaks on mobile.
6. Journal cards open the correct yogher.in blog posts.
7. GlowHer: coach faces in hero, benefits photo + icons, face-zone SVG next to the session, coach gallery rows, CTA band with photo.
8. No broken images anywhere (check the browser console and Network tab for 4xx on images).
9. No horizontal scroll at 360, 390, 768, 1024, 1440px.
10. `npm run build` passes. Share before/after screenshots of both pages at 390px and 1440px.
