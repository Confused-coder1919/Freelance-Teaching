# Project Context - BrightMinds Paris (Kids English + Coding)

## Purpose
Single-page, conversion-focused microsite for premium English + coding lessons for kids and teens in Paris. Bilingual EN/FR, designed to drive parent consult bookings via WhatsApp or email.

## Quick Start
- Static site, no build step.
- Local preview: `python3 -m http.server 5173` then visit `http://localhost:5173` (recommended for ES modules).
- You can also open `index.html` directly in a browser, but some browsers restrict module imports over file://.

## Tech Stack
- HTML: `index.html` (single page).
- Styling: Tailwind CDN + custom CSS in `assets/css/main.css`.
- JS: vanilla ES modules in `assets/js/`, loaded by `assets/js/main.js`.
- Hosting: static (Vercel or any static host).

## Repo Layout (Key Files)
- `index.html`: all markup, section content, SEO meta, schema, and module entrypoint.
- `assets/css/main.css`: design tokens and custom components (glass, hero, cards, lead panel, etc).
- `assets/js/main.js`: bootstraps all feature modules on DOMContentLoaded.
- `assets/js/translations.js`: EN/FR content dictionary.
- `assets/js/i18n.js`: language switcher and DOM text updates.
- `assets/js/navigation.js`: mobile menu toggle.
- `assets/js/scroll-effects.js`: scroll progress bar + reveal animations.
- `assets/js/contact-config.js`: single source of truth for phone, WhatsApp, and booking URLs.
- `assets/js/lead-form.js`: WhatsApp + mailto lead flow.
- `assets/js/contact-links.js`: WhatsApp deep links in hero/lead sections.
- `assets/js/exit-intent.js`: exit-intent modal logic.
- `assets/js/voice-intro.js`: instructor audio player.
- `assets/js/motion.js`: reduced-motion handling (only acts if a hero video exists).
- `assets/js/dom.js`: DOM helpers and current year injection.
- `assets/media/voice-intro.m4a`: audio used by the instructor player.
- `assets/syed-intro.m4a`: currently unused (safe to remove or wire up).
- `README.md`: product narrative, funnel mapping, and roadmap.
- `LICENSE`: MIT license.

## Page Structure (Section IDs, in order)
- `#home`: hero, CTA buttons, trust strip.
- `#instructor`: profile + audio player.
- `#programs`: age-based offerings.
- `#benefits`: parent-focused benefits.
- `#concierge`: concierge-level experience cards.
- `#success`: before/after outcomes.
- `#projects`: example projects.
- `#testimonials`: parent quotes.
- `#pricing`: tiers and pricing notes.
- `#exam`: exam prep packs.
- `#process`: sales funnel timeline.
- `#faq`: FAQ accordion.
- `#lead`: lead form + payment options.
- Footer: legal links + year.
- Sticky mobile CTA, exit-intent modal, and scroll progress bar live outside the main sections.

## JS Modules and DOM Hooks
- `assets/js/main.js`
  - Runs: i18n, year, navigation, scroll effects, WhatsApp links, lead form, exit intent, voice intro, motion prefs.
- `assets/js/dom.js`
  - Helpers: `$`, `$$`.
  - Year: updates `#year`.
- `assets/js/navigation.js`
  - Mobile menu: `#menuBtn`, `#mobileMenu`, `.mobile-link`.
- `assets/js/scroll-effects.js`
  - Scroll progress: `#progress`.
  - Reveal on view: `.fade-up` -> adds `is-inview`.
- `assets/js/i18n.js`
  - Text nodes: `[data-i18n]` (textContent), `[data-i18n-html]` (innerHTML).
  - Language buttons: `[data-lang]`, manages `aria-pressed`.
  - Storage key: `localStorage['site-lang']`.
  - Updates `<html lang>`.
- `assets/js/contact-links.js`
  - WhatsApp CTAs: `#whatsapp-hero`, `#whatsapp-lead`, `[data-whatsapp-link]`.
  - Adds language-specific prefill text to wa.me URL.
- `assets/js/lead-form.js`
  - Form: `#leadForm`, `#leadMsg`, `#mailtoLink`.
  - Fields: `#pname`, `#email`, `#child`, `#slot`.
  - Flow: validate -> open WhatsApp with summary; mailto uses subject/body.
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
- Keys are nested objects (ex: `hero.title`, `lead.cta.submit`).
- Use `data-i18n` for plain text, `data-i18n-html` when markup is required.
- When adding or renaming keys, update both languages to avoid fallback to English.

## Lead Funnel and Contact Flow
- Primary CTA: `#lead` section.
- WhatsApp:
  - Base number in `assets/js/contact-links.js` and `assets/js/lead-form.js`.
  - Prefill text varies by language.
- Booking:
  - `https://cal.com/tashfin-book/quick-chat` used for booking CTAs.
- Call:
  - `tel:+33667135850` used for call CTAs.
- Email:
  - Mailto link built on click with subject and body.
- Exit-intent modal:
  - Presents booking/WhatsApp/call options (no email capture).

## Styling System
- Tailwind CDN with inline config in `index.html`:
  - `colors.brand.yellow`, `colors.brand.dark`, `boxShadow.luxe`, `backgroundImage.card-grad`.
- Custom CSS in `assets/css/main.css`:
  - Global tokens via CSS variables (`--brand`, `--brand-strong`, etc).
  - Components: `.glass`, `.card`, `.lead-panel`, `.nav-luxe`, `.hero-*`, `.pay-*`, `.fade-up`.
  - Motion: `prefers-reduced-motion` and `.fade-up` transitions.
- JS-driven classes:
  - `.is-inview` for fade-in.
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
