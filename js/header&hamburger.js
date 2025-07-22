document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenuBtn = document.querySelector('.close-menu-btn');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
    mobileMenu.classList.add('slide-down'); // asumsi class ini udah di CSS
  });

  closeMenuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    mobileMenu.classList.remove('slide-down');
  });

  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      mobileMenu.style.display = 'none';
      mobileMenu.classList.remove('slide-down');
    }
  });

  // Toggle submenu Kontak
  const submenuToggle = document.querySelector('.has-submenu > a');
  if (submenuToggle) {
    submenuToggle.addEventListener('click', function (e) {
      e.preventDefault();
      const submenu = this.nextElementSibling;
      if (submenu) {
        // Toggle langsung via style jika gak mau nambah CSS
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      }
    });
  }
});