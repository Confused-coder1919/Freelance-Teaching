import { $, $$ } from './dom.js';
import { translations } from './translations.js';

const STORAGE_KEY = 'site-lang';

const resolvePath = (source, path) =>
  path.reduce((acc, key) => {
    if (acc && typeof acc === 'object') return acc[key];
    return undefined;
  }, source);

export const initI18n = () => {
  const listeners = new Set();
  let currentLang = 'en';

  const notify = (lang) => listeners.forEach((fn) => fn(lang));

  const applyLang = (lang) => {
    const dict = translations[lang] || translations.en;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.setAttribute('lang', lang);

    $$('[data-i18n]').forEach((el) => {
      const path = el.getAttribute('data-i18n')?.split('.') ?? [];
      const value = resolvePath(dict, path);
      if (typeof value === 'string') el.textContent = value;
    });

    $$('[data-i18n-html]').forEach((el) => {
      const path = el.getAttribute('data-i18n-html')?.split('.') ?? [];
      const value = resolvePath(dict, path);
      if (typeof value === 'string') el.innerHTML = value;
    });

    const enBtn = $('#lang-en');
    const frBtn = $('#lang-fr');
    if (enBtn) enBtn.setAttribute('aria-pressed', String(lang === 'en'));
    if (frBtn) frBtn.setAttribute('aria-pressed', String(lang === 'fr'));

    notify(lang);
  };

  const setLang = (lang) => {
    const normalized = translations[lang] ? lang : 'en';
    if (normalized !== currentLang) {
      applyLang(normalized);
    } else {
      localStorage.setItem(STORAGE_KEY, normalized);
    }
    return normalized;
  };

  const saved = localStorage.getItem(STORAGE_KEY);
  const browserPref = (navigator.language || 'en').slice(0, 2).toLowerCase();
  const initial = translations[saved] ? saved : translations[browserPref] ? browserPref : 'en';
  applyLang(initial);

  $$('#lang-en, #lang-fr').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  return {
    getLang: () => currentLang,
    setLang,
    subscribe: (fn) => {
      if (typeof fn === 'function') listeners.add(fn);
      return () => listeners.delete(fn);
    }
  };
};
