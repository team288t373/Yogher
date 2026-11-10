# YogHer & GlowHer Landing Pages

High-converting, mobile-first, and ultra-fast landing pages for **YogHer** (`/`) and **GlowHer** (`/glowher`), built with Next.js 14+ (App Router), TypeScript, and Tailwind CSS.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view YogHer, or [http://localhost:3000/glowher](http://localhost:3000/glowher) to view GlowHer.

### 3. Production Build & Test
```bash
npm run build
npm run start
```

---

## ✏️ Editing Copy & Prices

All content, pricing tiers, coach bios, and FAQ items are centralized in **[`lib/content.ts`](./lib/content.ts)**.

- **YogHer Copy & Plans:** Edit `yogherContent` (includes hero copy, program cards, coaches, testimonials, and group vs 1-on-1 plans).
- **GlowHer Copy & Plans:** Edit `glowherContent` (includes hero, quick facts, 30-min breakdown, face yoga instructors, pricing, and FAQs).
- **WhatsApp & Contact Details:** Edit `siteConfig` (phone number and direct message URLs).

> **Note:** GlowHer testimonials default to an empty array (`testimonials: []`). The component automatically hides the section when empty and reveals it once member reviews are added to `content.ts`.

---

## 🔑 Environment Variables

Create a `.env.local` file in the project root with the following optional variables:

```env
# Webhook to forward captured lead data (TeleCRM / Google Sheets / Make / Zapier)
LEAD_WEBHOOK_URL="https://your-webhook-endpoint.com/api/leads"

# Analytics & Conversion Tracking
NEXT_PUBLIC_META_PIXEL_ID="your_meta_pixel_id"
NEXT_PUBLIC_GTAG_ID="G-XXXXXXXXXX"
```

*Note: In development, if `LEAD_WEBHOOK_URL` is omitted, the form gracefully logs submissions to the console and returns success so UX testing is unobstructed.*

---

## 🎨 Design System Tokens

Built using exact Tailwind tokens:

| Token | Hex | Usage |
|---|---|---|
| `softpink` | `#FEF1F7` | Primary page background |
| `cotton` | `#FFC9E2` | Cards, chips, highlight blocks |
| `pink` | `#EA8EAB` | Accent cards (e.g. GlowHer cross-link) |
| `bordeaux` | `#5A0016` | Headings, body text, primary buttons, dark sections |
| `muted` | `#6B2A43` | Secondary text |
| `bordeaux-light`| `#7A1A36` | Card borders / surfaces inside dark sections |
| `input-border` | `#C98AA1` | Form inputs |

- **Font:** Inter via `next/font/google` (weights 400, 500, 600, 700, 800).
- **Icons & Images:** Next.js Image with Cloudinary optimization and automatic initials fallback.

---

## 🚢 Deploying to Vercel

1. Push this repository to GitHub / GitLab / Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Keep the default Next.js framework preset:
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`
4. Add environment variables in the Vercel dashboard under **Settings > Environment Variables**:
   - `LEAD_WEBHOOK_URL`
   - `NEXT_PUBLIC_META_PIXEL_ID` (optional)
   - `NEXT_PUBLIC_GTAG_ID` (optional)
5. Click **Deploy**. Your pages will be live globally on Vercel's Edge Network!
