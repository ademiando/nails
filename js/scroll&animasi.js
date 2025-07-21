document.addEventListener('DOMContentLoaded', function () {
  // Otomatis target: semua section, .pricing-card, .gallery-item, .about-content, .instagram-item
  // Kamu bisa tambah selector di bawah sesuai kebutuhan
  const selectors = [
    'section',
    '.pricing-card',
    '.gallery-item',
    '.about-content',
    '.instagram-item'
  ];
  const animatedItems = [];
  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(item => animatedItems.push(item));
  });

  // Set style awal via JS (tanpa CSS baru)
  animatedItems.forEach((item, idx) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(40px)';
    item.style.transition = 'opacity 0.7s cubic-bezier(.77,0,.175,1), transform 0.7s cubic-bezier(.77,0,.175,1)';
    item.style.willChange = 'opacity, transform';
  });

  // Fungsi cek viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight - 40 &&
      rect.bottom > 0
    );
  }

  // Animasi satu per satu dengan delay
  function showOnScroll() {
    let delay = 0;
    animatedItems.forEach((item, i) => {
      if (item.style.opacity === '0' && isInViewport(item)) {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, delay);
        delay += 150;
      }
    });
  }

  window.addEventListener('scroll', showOnScroll);
  showOnScroll();
});
