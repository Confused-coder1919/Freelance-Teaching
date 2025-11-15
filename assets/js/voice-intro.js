import { $ } from './dom.js';

const formatTime = (value) => {
  const total = Math.max(0, Math.floor(value || 0));
  const minutes = Math.floor(total / 60);
  const seconds = String(total % 60).padStart(2, '0');
  return `${minutes}:${seconds}`;
};

export const initVoiceIntro = () => {
  const audio = $('#voiceAudio');
  const btn = $('#voicePlayBtn');
  const glow = $('#voiceGlow');
  const track = $('#voiceTrack');
  const bar = $('#voiceBar');
  const current = $('#voiceCurrent');
  const duration = $('#voiceDuration');

  if (!audio || !btn || !glow || !track || !bar || !current || !duration) return;

  audio.addEventListener('loadedmetadata', () => {
    duration.textContent = formatTime(audio.duration);
  });

  audio.addEventListener('timeupdate', () => {
    current.textContent = formatTime(audio.currentTime);
    const pct = (audio.currentTime / (audio.duration || 1)) * 100;
    bar.style.width = `${pct}%`;
  });

  audio.addEventListener('ended', () => {
    btn.textContent = '▶︎';
    glow.classList.remove('playing');
    bar.style.width = '0%';
    current.textContent = '0:00';
  });

  btn.addEventListener('click', () => {
    if (audio.paused) {
      audio
        .play()
        .then(() => {
          btn.textContent = '⏸';
          glow.classList.add('playing');
          if (audio.duration) duration.textContent = formatTime(audio.duration);
        })
        .catch(() => {});
    } else {
      audio.pause();
      btn.textContent = '▶︎';
      glow.classList.remove('playing');
    }
  });

  track.addEventListener('click', (event) => {
    const rect = track.getBoundingClientRect();
    const offset = event.clientX - rect.left;
    const pct = Math.min(1, Math.max(0, offset / rect.width));
    if (audio.duration) audio.currentTime = pct * audio.duration;
  });
};
