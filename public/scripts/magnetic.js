// Updates CSS variables for subtle gold radial response and provides a tiny magnetic hover.
const root = document.documentElement;
window.addEventListener(
  'pointermove',
  (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    root.style.setProperty('--x', `${x}%`);
    root.style.setProperty('--y', `${y}%`);
  },
  { passive: true }
);

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduce) {
  document.querySelectorAll('[data-magnetic="true"]').forEach((el) => {
    el.addEventListener('mousemove', (ev) => {
      const rect = el.getBoundingClientRect();
      const dx = (ev.clientX - rect.left - rect.width / 2) / rect.width;
      const dy = (ev.clientY - rect.top - rect.height / 2) / rect.height;
      el.style.transform = `translate3d(${dx * 8}px, ${dy * 8}px, 0)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate3d(0,0,0)';
    });
  });
}
