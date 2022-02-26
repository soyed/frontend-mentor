// Elements
const menuButton = document.querySelector('.hero__header--hamburger');
const menuImage = document.getElementById('header__hamburger--icon');
const menu = document.querySelector('.hero__header--nav');

// => toggle hamburger button
if (menuButton) {
  menuButton.addEventListener('click', () => {
    // => Check grab the existing src
    const iconStatus = menuImage.src.includes('icon-hamburger');
    // => toggle the image src based on its src
    if (iconStatus) {
      menuImage.src = './images/icon-close.svg';
    } else {
      menuImage.src = './images/icon-hamburger.svg';
    }

    menu.classList.toggle('hero__header--nav__active');
  });
}
