import { $$ } from './dom.js';

const WHATSAPP_BASE = 'https://wa.me/33667135850';
const WHATSAPP_MESSAGES = {
  en: 'Hello! I saw your Kids English + Coding program. I’d like a 15-min parent consult. Our availability…',
  fr: 'Bonjour ! Je viens de voir le programme Anglais + Codage. Je souhaite un appel parent (15 min). Nos dispos…'
};

export const initWhatsAppLinks = (i18n) => {
  const updateLinks = (lang) => {
    const text = WHATSAPP_MESSAGES[lang] || WHATSAPP_MESSAGES.en;
    $$('#whatsapp-hero, #whatsapp-lead').forEach((anchor) => {
      try {
        const url = new URL(WHATSAPP_BASE);
        url.searchParams.set('text', text);
        anchor.href = url.toString();
      } catch {
        anchor.href = WHATSAPP_BASE;
      }
    });
  };

  const currentLang = i18n?.getLang?.() ?? 'en';
  updateLinks(currentLang);
  i18n?.subscribe?.(updateLinks);
};
