const menuBtn = document.querySelector('.hero__header--hamburger__icon');
const menu = document.querySelector('.hero__header--nav__list');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    // 1. Check the display status of the menu bar
    const menuStatus = menu.style.opacity == 0;
    if (menuStatus) {
      menu.style.opacity = 1;
    } else {
      menu.style.opacity = 0;
    }
  });
}
