// Hamburger menu overlay logic

document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenuBtn = document.querySelector('.close-menu-btn');

  // Show mobile menu
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
  });

  // Hide mobile menu
  closeMenuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });

  // Hide menu jika klik di luar menu konten
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      mobileMenu.style.display = 'none';
    }
  });

  // Smooth scrolling untuk anchor links (optional, jika mau dipisahkan dari script utama)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        // Tutup mobile menu jika terbuka
        if (mobileMenu.style.display === 'flex') {
          mobileMenu.style.display = 'none';
        }
      }
    });
  });
});
