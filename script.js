document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  revealEls.forEach(el => observer.observe(el));

  // reveal hero immediately on load (in case IO fires late)
  setTimeout(() => {
    document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('in'));
  }, 100);
});
