import { $, $$ } from './dom.js';

export const initScrollEffects = () => {
  const progressBar = $('#progress');

  const onScroll = () => {
    const scrollable = Math.max(1, document.body.scrollHeight - window.innerHeight);
    const pct = Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100));
    if (progressBar) progressBar.style.width = `${pct}%`;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-inview');
        });
      },
      { threshold: 0.15 }
    );
    $$('.fade-up').forEach((el) => observer.observe(el));
  } else {
    $$('.fade-up').forEach((el) => el.classList.add('is-inview'));
  }
};
