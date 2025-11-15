import { $, $$ } from './dom.js';

export const initNavigation = () => {
  const menuBtn = $('#menuBtn');
  const mobileMenu = $('#mobileMenu');
  if (!menuBtn || !mobileMenu) return;

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
  };

  menuBtn.addEventListener('click', toggleMenu);

  $$('.mobile-link', mobileMenu).forEach((link) => {
    link.addEventListener('click', () => {
      if (!mobileMenu.classList.contains('hidden')) toggleMenu();
    });
  });
};
