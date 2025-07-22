document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenuBtn = document.querySelector('.close-menu-btn');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
  });

  closeMenuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });

  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      mobileMenu.style.display = 'none';
    }
  });
});
