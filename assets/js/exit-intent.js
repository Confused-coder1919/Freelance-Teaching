import { $ } from './dom.js';

const STORAGE_KEY = 'exitModalShown';

export const initExitIntent = () => {
  const modal = $('#exitModal');
  if (!modal) return;

  const closeBtn = $('#exitClose');
  const form = $('#exitForm');
  const thanks = $('#exitThanks');
  const overlay = modal.firstElementChild;
  let hasShown = sessionStorage.getItem(STORAGE_KEY) === '1';

  const lockBody = (lock) => {
    document.body.style.overflow = lock ? 'hidden' : '';
  };

  const hide = () => {
    modal.classList.add('hidden');
    lockBody(false);
  };

  const show = () => {
    if (hasShown || window.innerWidth <= 768) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    hasShown = true;
    sessionStorage.setItem(STORAGE_KEY, '1');
    lockBody(true);
  };

  document.addEventListener('mouseleave', (event) => {
    if (event.clientY <= 0 && !hasShown) show();
  });

  closeBtn?.addEventListener('click', hide);

  modal.addEventListener('click', (event) => {
    if (overlay && event.target === overlay) hide();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) hide();
  });

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    thanks?.classList.remove('hidden');
    setTimeout(() => hide(), 1200);
  });
};
