document.getElementById('year').textContent = new Date().getFullYear();

const io = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  }
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

for (const el of document.querySelectorAll('.reveal')) io.observe(el);
