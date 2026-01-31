// Simple IntersectionObserver-powered reveals.
// Respects prefers-reduced-motion.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduce) {
  // Optional stagger: add data-stagger on a parent and all .reveal children
  // will receive an increasing transition delay via CSS var --d.
  document.querySelectorAll('[data-stagger]').forEach((parent) => {
    const step = Number(parent.getAttribute('data-stagger-step') || 80);
    const start = Number(parent.getAttribute('data-stagger-start') || 0);
    const kids = Array.from(parent.querySelectorAll('.reveal'));
    kids.forEach((el, idx) => {
      // Don't overwrite a manually set delay.
      if (!el.style.getPropertyValue('--d')) {
        el.style.setProperty('--d', `${start + idx * step}ms`);
      }
    });
  });

  const els = Array.from(document.querySelectorAll('.reveal'));
  const obs = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          obs.unobserve(e.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
  );
  els.forEach((el) => obs.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
}
