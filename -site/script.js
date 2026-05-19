// Scroll-triggered fade-in
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Add fade-in to cards, steps, quotes dynamically
  document.querySelectorAll('.card, .step, .quote-item, .stat-item').forEach((el, i) => {
    el.classList.add('fade-in');
    if (i % 3 === 1) el.classList.add('fade-in-delay-1');
    if (i % 3 === 2) el.classList.add('fade-in-delay-2');
    observer.observe(el);
  });

  // Nav active link highlight
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current
        ? 'var(--text)' : '';
    });
  }, { passive: true });