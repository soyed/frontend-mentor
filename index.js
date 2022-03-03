console.log('Hello');

// => Elements
const toggleBtn = document.getElementById('toggle--btn');
const toggleText = document.querySelector('.toggle--status');
const htmlElement = document.documentElement;

if (toggleBtn) {
  toggleBtn.addEventListener('change', () => {
    if (toggleBtn.checked) {
      htmlElement.setAttribute('data-theme', 'dark');
      toggleText.textContent = 'Light Mode';
    } else {
      htmlElement.setAttribute('data-theme', 'light');
      toggleText.textContent = 'Dark Mode';
    }

    // => Apply smooth transition
    smoothTransition();
  });
}

const smoothTransition = () => {
  htmlElement.classList.add('transition');

  window.setTimeout(() => {
    htmlElement.classList.remove('transition');
  }, 100);
};
