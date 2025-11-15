import { $ } from './dom.js';

const WHATSAPP_URL = 'https://wa.me/33667135850';
const MAILTO = 'mailto:syed-mohammad.shah_mostafa@edu.devinci.fr';

const buildMessage = (lang = 'en') => {
  const name = $('#pname')?.value.trim() ?? '';
  const email = $('#email')?.value.trim() ?? '';
  const child = $('#child')?.value.trim() ?? '';
  const slot = $('#slot')?.value ?? '';

  const lines =
    lang === 'fr'
      ? [`Parent: ${name}`, `Email: ${email}`, `Âge & objectifs: ${child}`, `Créneau: ${slot}`]
      : [`Parent: ${name}`, `Email: ${email}`, `Child & goals: ${child}`, `Preferred time: ${slot}`];

  return lines.join(' | ');
};

const buildMailtoUrl = (lang, body) => {
  const subject = lang === 'fr' ? 'Demande : appel parent (15 min)' : 'Request: Parent consult (15 min)';
  const encodedBody = encodeURIComponent(body);
  return `${MAILTO}?subject=${encodeURIComponent(subject)}&body=${encodedBody}`;
};

export const initLeadForm = (i18n) => {
  const form = $('#leadForm');
  const mailtoLink = $('#mailtoLink');
  const status = $('#leadMsg');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      try {
        const lang = i18n?.getLang?.() ?? 'en';
        const wa = new URL(WHATSAPP_URL);
        wa.searchParams.set('text', buildMessage(lang));
        status?.classList.remove('hidden');
        window.open(wa.toString(), '_blank', 'noopener');
      } catch {
        window.location.href = WHATSAPP_URL;
      }
    });
  }

  if (mailtoLink) {
    mailtoLink.addEventListener('click', (event) => {
      event.preventDefault();
      const lang = i18n?.getLang?.() ?? 'en';
      window.location.href = buildMailtoUrl(lang, buildMessage(lang));
    });
  }
};
