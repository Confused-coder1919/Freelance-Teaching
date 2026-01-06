# Project Context - BrightMinds Paris (Academic English Coaching)

## Purpose
Single-page, conversion-focused microsite for private academic English coaching in Paris. Target audience is international and bilingual families; sessions are in-home (Paris and Ile-de-France) or online. Bilingual EN/FR site with strong booking and WhatsApp conversion paths.

## Quick Start
- Static site, no build step.
- Local preview: `python3 -m http.server 5173` then visit `http://localhost:5173` (recommended for ES modules).
- Opening `index.html` directly can break ES modules in some browsers (file:// restrictions).

## Tech Stack
- HTML: `index.html` (single page).
- Styling: Tailwind CDN + custom CSS in `assets/css/main.css`.
- JS: vanilla ES modules in `assets/js/`, loaded by `assets/js/main.js`.
- Hosting: static (Vercel or any static host).

## Repo Layout (Key Files)
- `index.html`: all markup, content, SEO meta, schema, and module entrypoint.
- `assets/css/main.css`: theme tokens, layout utilities, and component styles.
- `assets/js/main.js`: bootstraps all feature modules on DOMContentLoaded.
- `assets/js/translations.js`: EN/FR content dictionary used by i18n.
- `assets/js/i18n.js`: language switcher, DOM text updates, localStorage.
- `assets/js/contact-config.js`: single source of truth for phone, WhatsApp, and booking URLs.
- `assets/js/contact-links.js`: WhatsApp deep links with language-specific prefill.
- `assets/js/lead-form.js`: lead form WhatsApp + mailto flow.
- `assets/js/exit-intent.js`: exit-intent modal logic.
- `assets/js/navigation.js`: mobile menu toggle.
- `assets/js/scroll-effects.js`: progress bar + reveal animations.
- `assets/js/voice-intro.js`: audio player for instructor intro.
- `assets/js/motion.js`: reduced-motion handling (pauses hero video if present).
- `assets/js/dom.js`: DOM helpers and current year injection.
- `assets/media/voice-intro.m4a`: audio used by the instructor player.
- `assets/syed-intro.m4a`: currently unused (safe to remove or wire up).
- `README.md`: product narrative, funnel mapping, and roadmap.
- `LICENSE`: MIT license.

## Page Structure (Section IDs, in order)
- `#home`: hero, CTA buttons, trust strip, hero stats.
- `#instructor`: profile + audio player.
- `#programs`: track overview (foundation, international academic, exam/pro).
- `#benefits`: parent-facing benefits.
- `#concierge`: private coaching experience cards.
- `#success`: before/after outcomes.
- `#projects`: example projects (as structured expression in English).
- `#testimonials`: parent quotes.
- `#pricing`: tiers and pricing notes.
- `#exam`: exam prep packs.
- `#process`: coaching timeline.
- `#faq`: FAQ accordion.
- `#lead`: lead form + payment options.
- Footer: legal links + year + contact.
- Sticky mobile CTA, exit-intent modal, and scroll progress bar live outside the main sections.

## Contact and CTA Architecture
Single source of truth lives in `assets/js/contact-config.js`:
- `PHONE_DISPLAY = '+33 6 67 13 58 50'`
- `PHONE_E164 = '+33667135850'`
- `TEL_URL = 'tel:+33667135850'`
- `WA_NUMBER = '33667135850'`
- `WA_BASE = 'https://wa.me/33667135850'`
- `BOOKING_URL = 'https://cal.com/tashfin-book/quick-chat'`

CTA labels are driven by i18n keys (see `cta.*` in translations):
- Primary: `cta.book` (booking URL)
- Secondary: `cta.whatsappSyed` (WhatsApp deep link)
- Tertiary: `cta.callSyed` (tel link)
- Reply-time line: `cta.replyTime`

WhatsApp prefill links:
- `assets/js/contact-links.js` updates all `data-whatsapp-link` anchors (and `#whatsapp-hero`, `#whatsapp-lead`, `#whatsapp-sticky`) with language-specific prefill text.
- Prefill selection is based on `localStorage['site-lang']` (via i18n).

## JS Modules and DOM Hooks
- `assets/js/main.js`
  - Initializes i18n, year, navigation, scroll effects, WhatsApp links, lead form, exit intent, voice intro, and motion preferences.

- `assets/js/dom.js`
  - Helpers: `$`, `$$`.
  - Year: updates `#year`.

- `assets/js/navigation.js`
  - Mobile menu: `#menuBtn`, `#mobileMenu`, `.mobile-link`.

- `assets/js/scroll-effects.js`
  - Scroll progress: `#progress`.
  - Reveal on view: `.fade-up` adds `is-inview`.

- `assets/js/i18n.js`
  - Text nodes: `[data-i18n]` (textContent), `[data-i18n-html]` (innerHTML).
  - Language buttons: `[data-lang]`, manages `aria-pressed`.
  - Storage key: `localStorage['site-lang']`.
  - Updates `<html lang>`.

- `assets/js/contact-links.js`
  - WhatsApp CTAs: `#whatsapp-hero`, `#whatsapp-lead`, `#whatsapp-sticky`, `[data-whatsapp-link]`.
  - Adds language-specific prefill text to `WA_BASE`.

- `assets/js/lead-form.js`
  - Form: `#leadForm`, `#leadMsg`, `#mailtoLink`.
  - Fields: `#pname`, `#email`, `#child`, `#slot`.
  - Flow: validate -> open WhatsApp with summary; mailto builds subject/body.

- `assets/js/exit-intent.js`
  - Modal: `#exitModal`, `#exitClose`, `#exitBooking`, `#exitWhatsapp`, `#exitCall`.
  - Desktop only (skips when `innerWidth <= 768`).
  - Session key: `sessionStorage['exitModalShown']`.
  - Assumes the overlay is the first child inside `#exitModal`.

- `assets/js/voice-intro.js`
  - Audio player: `#voiceAudio`, `#voicePlayBtn`, `#voiceGlow`, `#voiceTrack`, `#voiceBar`, `#voiceCurrent`, `#voiceDuration`.
  - Adds `playing` class to `#voiceGlow` for animation.

- `assets/js/motion.js`
  - Watches `prefers-reduced-motion` and pauses `section#home video` if present.

## i18n and Content
- Source: `assets/js/translations.js` exports `translations` with `en` and `fr`.
- Keys are nested objects (example: `hero.title`, `lead.cta.submit`).
- Use `data-i18n` for plain text, `data-i18n-html` when markup is required.
- When adding or renaming keys, update both languages to avoid fallback to English.

## Lead Funnel and Contact Flow
- Primary CTA: `#lead` section.
- WhatsApp:
  - Base number is in `contact-config.js`.
  - Prefill text is language-specific in `contact-links.js`.
- Booking:
  - `BOOKING_URL` from `contact-config.js` used for booking CTAs.
- Call:
  - `TEL_URL` from `contact-config.js` used for call CTAs.
- Email:
  - Mailto link built on click with subject/body in `lead-form.js`.
- Exit-intent modal:
  - Presents booking/WhatsApp/call options (no backend capture).

## Styling System
- Tailwind CDN with inline config in `index.html`:
  - `colors.brand.yellow`, `colors.brand.dark`, `boxShadow.luxe`, `backgroundImage.card-grad`.
- Custom CSS in `assets/css/main.css`:
  - Global tokens via CSS variables (`--brand`, `--brand-strong`, etc).
  - Components: `.glass`, `.card`, `.lead-panel`, `.nav-luxe`, `.hero-*`, `.pay-*`, `.fade-up`.
  - Motion: `prefers-reduced-motion` and `.fade-up` transitions.
- JS-driven classes:
  - `.is-inview` for reveal animation.
  - `.playing` for audio glow animation.

## External Assets and Dependencies
- Tailwind CDN: `https://cdn.tailwindcss.com`.
- Google Fonts: Space Grotesk + Playfair Display.
- Remote images (OG, hero, gallery): dribbble, unsplash, teacherizediaries, slideteam, googleusercontent.
- Links: WhatsApp, mailto, Revolut, PayPal, portfolio.
- Consider self-hosting brand assets to avoid hotlinking limits.

## SEO and Schema
- Meta tags: title, description, canonical, OG/Twitter cards.
- JSON-LD:
  - `EducationalOrganization` schema in `<head>`.
  - `FAQPage` schema near the bottom of `index.html`.
- Keep schema data aligned with visible content and contact details.

## Accessibility and Motion
- Focus-visible styles in CSS for keyboard users.
- Reduced-motion handling in CSS and `assets/js/motion.js`.
- Language toggle uses `aria-pressed`.
- Exit modal uses `aria-modal` and `aria-live` for status text.

## Editing Notes / Gotchas
- If you rename IDs/classes referenced by JS modules, update the corresponding module.
- Keep the exit modal overlay as the first child of `#exitModal` (or update `exit-intent.js`).
- Keep `data-whatsapp-link` on WhatsApp CTAs so prefill messages stay in sync with language.
- New translated content must be added to `assets/js/translations.js` and wired with `data-i18n` or `data-i18n-html`.
- No backend: all form interactions are client-side (WhatsApp/mailto). Add a serverless endpoint if lead capture must be stored.
