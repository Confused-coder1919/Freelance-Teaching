import { setCurrentYear } from './dom.js';
import { initNavigation } from './navigation.js';
import { initScrollEffects } from './scroll-effects.js';
import { initI18n } from './i18n.js';
import { initWhatsAppLinks } from './contact-links.js';
import { initLeadForm } from './lead-form.js';
import { initExitIntent } from './exit-intent.js';
import { initVoiceIntro } from './voice-intro.js';
import { initMotionPreferences } from './motion.js';

const init = () => {
  const i18n = initI18n();
  setCurrentYear();
  initNavigation();
  initScrollEffects();
  initWhatsAppLinks(i18n);
  initLeadForm(i18n);
  initExitIntent();
  initVoiceIntro();
  initMotionPreferences();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  init();
}
