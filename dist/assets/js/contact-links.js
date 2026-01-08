import { $$ } from './dom.js';
import { WA_BASE } from './contact-config.js';

const WHATSAPP_MESSAGES = {
  en: 'Hi Syed, I’m interested in English + coding lessons in Paris. Child age: __. Goal: __. Can we book a quick call?',
  fr: 'Bonjour Syed, je suis intéressé(e) par des cours d’anglais + coding à Paris. Âge: __. Objectif: __. Peut-on réserver un appel rapide ?'
};

export const initWhatsAppLinks = (i18n) => {
  const updateLinks = (lang) => {
    const text = WHATSAPP_MESSAGES[lang] || WHATSAPP_MESSAGES.en;
    $$('#whatsapp-hero, #whatsapp-lead, [data-whatsapp-link]').forEach((anchor) => {
      try {
        const url = new URL(WA_BASE);
        url.searchParams.set('text', text);
        anchor.href = url.toString();
      } catch {
        anchor.href = WA_BASE;
      }
    });
  };

  const storedLang = localStorage.getItem('site-lang');
  const currentLang = i18n?.getLang?.() ?? storedLang ?? 'en';
  updateLinks(currentLang);
  i18n?.subscribe?.(updateLinks);
};
