
# 🌟 BrightMinds — Kids English + Coding (Paris)

**English · Technology · Confidence**
*Turn screen time into skill time — project-based English + technology lessons taught by a native English teacher & cybersecurity engineer in Paris.*

<p align="center">
  <a href="https://brightmindsparis.vercel.app/"><img src="https://img.shields.io/badge/Live-Demo-FFD24A?style=for-the-badge&labelColor=0b1220"></a>
  <img src="https://img.shields.io/badge/Stack-HTML%20|%20Tailwind%20CDN%20|%20Vanilla%20JS-0b1220?style=for-the-badge&logoColor=white&color=FFD24A">
  <img src="https://img.shields.io/badge/Hosting-Vercel-0b1220?style=for-the-badge&logo=vercel&color=FFD24A">
  <img src="https://img.shields.io/badge/Locale-EN%20%2F%20FR-0b1220?style=for-the-badge&color=FFD24A">
</p>

> **What this is:** A conversion-focused microsite that turns parent interest into booked consults for kids’ **English + Technology** lessons (ages 8–18) in Paris.
> **Why recruiters should care:** Clear market positioning, measurable learning outcomes, accessibility-first implementation, bilingual UX, and a clean, scalable funnel.

---

## 🔗 Live Demo

* **Site:** [https://brightmindsparis.vercel.app/](https://brightmindsparis.vercel.app/)
* **Primary CTA:** “Book a Free Parent Consult (15m)” → opens structured **WhatsApp** prefill or **mailto**
* **Status:** Production-ready (single file), GDPR/legal page placeholders included

---

## 🧭 Table of Contents

1. [What makes this different](#-what-makes-this-different)
2. [Sales funnel (AIDA) & UX mapping](#-sales-funnel-aida--ux-mapping)
3. [Feature tour](#-feature-tour)
4. [Tech stack & architecture](#-tech-stack--architecture)
5. [Accessibility & i18n](#-accessibility--i18n)
6. [SEO, Schema & Social](#-seo-schema--social)
7. [Analytics & KPIs](#-analytics--kpis)
8. [Screenshots](#-screenshots)
9. [Run locally / Deploy](#-run-locally--deploy)
10. [For recruiters / HR](#-for-recruiters--hr)
11. [Roadmap](#-roadmap)
12. [License & Contact](#-license--contact)

---

## 🚀 What makes this different

* **Dual-competency offering:** Native English instruction + practical tech (web, coding, AI literacy).
* **Visible learning outcomes:** Mini websites, digital posters, short presentations; exam mock scores.
* **Bilingual UX (EN/FR):** Language toggle with inline i18n dictionary for inclusivity.
* **Conversion-first design:** Clear CTA hierarchy, WhatsApp prefill, exit-intent email capture.
* **Operational clarity:** Transparent pricing, micro-entrepreneur status, invoicing, and payment options.

---

## 🎯 Sales funnel (AIDA) & UX mapping

```text
Awareness → Interest → Desire → Action → Retention
```

| Stage     | Section(s)                                 | Purpose                        | Mechanisms                                           |
| --------- | ------------------------------------------ | ------------------------------ | ---------------------------------------------------- |
| Awareness | Hero (video bg, tagline)                   | Emotional hook & clarity       | Promise + social proof line (institutions)           |
| Interest  | Programs by Age, Benefits                  | Structure, pedagogy, relevance | Age-tiered outcomes, parent-centric benefits         |
| Desire    | Projects, Outcomes, Testimonials           | Proof & differentiation        | Portfolio samples, Before/After frames, local quotes |
| Action    | Pricing, Sticky CTA, Lead Form (#lead)     | Convert to booked consult      | WhatsApp prefill, mailto, exit-intent mini-lesson    |
| Retention | Weekly notes, demo links, sibling priority | Ongoing engagement & referrals | Progress reports, milestone tracking                 |

**Primary path:** Hero CTA → `#lead` → WhatsApp/mailto → scheduled consult.
**Urgency cues:** “Limited private slots this month,” featured pricing tier, sticky mobile CTA.

---

## 🧩 Feature tour

* **Hero** with motion-safe video, gradient overlay, strong value proposition.
* **Trust strip** (Paris 16e · Neuilly · Levallois; Qualiopi context).
* **Instructor section** w/ custom **audio intro player** (play/pause, progress bar, timestamps).
* **Programs by Age** (8–10, 11–14, 15–18) with **measurable outcomes**.
* **Benefits grid** (6 cards) tailored to parent concerns: progress, exam prep, balanced tech.
* **Outcomes (Before/After)**: confidence, structure, exam clarity.
* **Projects gallery**: outcome-first artifacts (no student photos needed).
* **Pricing**: three transparent tiers; featured sibling plan; launch rate chip.
* **Exam Packs**: IGCSE / O-Level / A-Level, IELTS, TOEIC; mocks, micro-goals, reports, **Project Boost**.
* **How it works** timeline (responsive: vertical mobile, horizontal desktop).
* **Lead section**: form → **WhatsApp prefill** or **Email**; payment options (Revolut, PayPal).
* **Exit-intent modal**: capture email for a sample 4-session plan.
* **Top scroll progress bar**: subtle progress feedback.

---

## 🛠 Tech stack & architecture

* **Frontend:** Static `index.html` entrypoint powered by **Tailwind CDN** + lightweight ES modules (no bundler required).
* **Styling:** Tailwind utility classes plus handcrafted tokens now living in `assets/css/main.css`.
* **State & i18n:** `assets/js/translations.js` dictionary consumed by `assets/js/i18n.js`, wiring `[data-i18n]` / `[data-i18n-html]` nodes + lang storage.
* **Interactive flows:** Feature-scoped modules for scroll effects, lead form, WhatsApp/Email CTAs, exit intent, and the voice intro player, orchestrated via `assets/js/main.js`.
* **Deploy:** **Vercel** static hosting (zero-config); ES modules run natively in modern browsers.
* **Assets:** Local audio stored under `assets/media/` + remote imagery; hero video guarded by reduced-motion preference listener.

**Architecture (high level)**

```
index.html
assets/
 ├─ css/main.css                  # brand tokens, glass styles, focus states
 ├─ js/
 │   ├─ main.js                   # orchestrates all feature modules
 │   ├─ dom.js                    # query helpers + year setter
 │   ├─ scroll-effects.js         # progress bar + fade-ins
 │   ├─ navigation.js             # sticky header + mobile drawer
 │   ├─ translations.js + i18n.js # EN/FR dictionary + renderer
 │   ├─ lead-form.js              # WhatsApp/email prefill + validation
 │   ├─ contact-links.js          # hero/footer WhatsApp deep links
 │   ├─ exit-intent.js            # email capture modal logic
 │   └─ voice-intro.js, motion.js # audio player + reduced-motion hook
 └─ media/voice-intro.m4a         # instructor audio intro
```

*Why this approach?*

* Maintains zero-build DX while giving senior-level separation of concerns.
* Easier for future contributors to extend/replace modules without touching the HTML skeleton.
* No framework lock-in; instant load; suitable for Vercel/Hostinger static hosting.

---

## ♿ Accessibility & i18n

* **Focus-visible** outlines for links/buttons; keyboard-friendly controls.
* **Reduced motion support:** respects `prefers-reduced-motion` (pauses hero video).
* **Color contrast:** dark theme with high-visibility brand accents.
* **ARIA & semantics:** labeled controls, `aria-pressed` recommended on play/pause (implemented in player logic).
* **Bilingual:** EN/FR toggle persists; all primary content localized.

---

## 🔍 SEO, Schema & Social

* **Meta & OG/Twitter**: title, description, large image cards configured.
* **Canonical** URL set.
* **Schema.org**: `FAQPage` + `LocalBusiness`.

**Known fix (already applied in this README):**
The `LocalBusiness` JSON-LD `url` key must not be duplicated. Use:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Kids English + Coding Paris",
  "description": "Premium English, coding, and exam prep for kids and teens in Paris.",
  "areaServed": "Paris, Île-de-France",
  "telephone": "+33667135850",
  "url": "https://brightmindsparis.vercel.app/",
  "sameAs": [
    "https://www.linkedin.com/in/syed-mostafa/",
    "https://syedtashfin.vercel.app/"
  ]
}
</script>
```

> **Tip:** Self-host the OG image to avoid hotlink/rate-limit issues and ensure 1200×630.

---

## 📈 Analytics & KPIs

**Recommended:** Plausible or Umami (EU-friendly). GA4 possible with Consent Mode (FR).

**KPIs to track**

* Hero → Lead CTA click-through
* Lead form submissions (WA/mailto opens)
* Exit-intent submits
* Scroll depth (Programs/Benefits/Pricing)
* Language toggle usage (EN vs FR)

**Experiments**

* A/B test hero subtitle & trust line.
* Show **next available consult time** inline (urgency).
* Add light **logo strip** (ABS, IPI Paris, Ingetis Institute of Technology) if rights permit.

---


## 🧪 Run locally / Deploy

**Local (no build step)**

```bash
git clone <your-repo>
cd <your-repo>
# open index.html in your browser
# or serve statically:
python3 -m http.server 5173
# then visit http://localhost:5173
```

**Deploy (Vercel)**

```bash
npm i -g vercel
vercel --prod
```

**Optional snippets**

```html
<!-- Robots -->
<meta name="robots" content="index,follow" />

<!-- Plausible -->
<script defer data-domain="brightmindsparis.vercel.app" src="https://plausible.io/js/script.js"></script>

<!-- Minimal CSP (tune as needed) -->
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  img-src 'self' https: data:;
  media-src 'self' https:;
  script-src 'self' https://cdn.tailwindcss.com https://plausible.io 'unsafe-inline';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src https://fonts.gstatic.com;
  connect-src 'self';
  frame-ancestors 'none';
">
```


## 🗺 Roadmap

* [ ] Self-host OG image; add `/favicon.ico`
* [ ] Add **Mentions légales** / **RGPD** pages & links
* [ ] Serverless endpoint (Vercel Functions) for **lead logging + auto-reply**
* [ ] Calendar preview of **next available consult slots**
* [ ] Lighthouse ≥ 95 (Perf/SEO/A11y/Best Practices)
* [ ] Replace Tailwind CDN with compiled build (purge, minify)
* [ ] Unit tests for i18n mapping and lead URL builders

---

## 📜 License & Contact

**License:** Code is provided for educational sales funnels; reuse with attribution. Testimonials and brand content © Kids English + Coding Paris.

**Contact:**

* **WhatsApp:** [https://wa.me/33667135850](https://wa.me/33667135850)
* **Email:** [syed-mohammad.shah_mostafa@edu.devinci.fr](mailto:syed-mohammad.shah_mostafa@edu.devinci.fr)
* **Portfolio:** [https://syedtashfin.vercel.app/](https://syedtashfin.vercel.app/)
* **LinkedIn:** [https://www.linkedin.com/in/syed-mostafa/](https://www.linkedin.com/in/syed-mostafa/)

---

### Appendix — Quick Fixes Recap

* ✅ `LocalBusiness` schema `url` key fixed
* ✅ Add real links for **Mentions légales** / **RGPD** before indexing
* ✅ Consider `aria-pressed` toggle on audio play button for extra clarity
* ✅ Self-host all brand assets (favicon, OG image, hero video if used)

---

> **BrightMinds** — not just tutoring. A compact, conversion-first learning product where kids build **English fluency**, **digital skills**, and **confidence**.
