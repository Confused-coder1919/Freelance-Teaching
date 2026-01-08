export const initMotionPreferences = () => {
  const mediaQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  if (!mediaQuery) return;

  const heroVideo = document.querySelector('section#home video');
  if (!heroVideo) return;

  const handleChange = () => {
    if (mediaQuery.matches) {
      heroVideo.pause();
      heroVideo.removeAttribute('autoplay');
    }
  };

  handleChange();
  if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', handleChange);
  } else if (typeof mediaQuery.addListener === 'function') {
    mediaQuery.addListener(handleChange);
  }
};
