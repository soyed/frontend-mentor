// Elements
const menuButton = document.querySelector('.hero__header--hamburger');
const menuImage = document.getElementById('header__hamburger--icon');
const menu = document.querySelector('.hero__header--nav');
const heroHeader = document.querySelector('.hero__header');

// => toggle hamburger button
if (menuButton) {
  menuButton.addEventListener('click', () => {
    heroHeader.classList.toggle('open');
    menu.classList.toggle('open');
    menuButton.classList.toggle('open');

    // => Check grab the existing src
    const iconStatus = menuImage.src.includes('icon-hamburger');
    // => toggle the image src based on its src
    if (iconStatus) {
      menuImage.src = './images/icon-close.svg';
    } else {
      menuImage.src = './images/icon-hamburger.svg';
    }
  });
}
