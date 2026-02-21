document.addEventListener('DOMContentLoaded', () => {

  /* ── Active nav link ─────────────────────────── */
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPage) link.classList.add('active');
  });

  /* ── Intersection Observer: fade-in on scroll ── */
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.12 }
  );

  document.querySelectorAll(
    '.game-card, .content-section, .char-card, .feature-item, .img-slot'
  ).forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  /* ── Typing cursor effect on .type-cursor ─────── */
  document.querySelectorAll('.type-cursor').forEach(el => {
    el.insertAdjacentHTML('beforeend', '<span class="cursor-blink">_</span>');
  });

});
