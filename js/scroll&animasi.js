  // Header sticky + blur saat scroll
  window.addEventListener('scroll', function () {
    document.body.classList.toggle('scrolled', window.scrollY > 10);
  });

  // Scroll animation saat element masuk viewport
  document.addEventListener('DOMContentLoaded', function () {
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

    animatedItems.forEach((item, idx) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(40px)';
      item.style.transition = 'opacity 0.7s cubic-bezier(.77,0,.175,1), transform 0.7s cubic-bezier(.77,0,.175,1)';
      item.style.willChange = 'opacity, transform';
    });

    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top < window.innerHeight - 40 &&
        rect.bottom > 0
      );
    }

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


  // Scroll to Top button show/hide and scroll up on click
  const scrollTopBtn = document.querySelector('.scroll-top');

  // Show/hide button on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      scrollTopBtn.style.display = 'flex';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });

  // Scroll to top when button clicked
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

