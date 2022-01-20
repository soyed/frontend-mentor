const shareBtn = document.querySelector('.article__share-btn');
const shareButtonContent = document.querySelector('.share-btn__tooltip');

shareBtn.addEventListener('click', (event) => {
  // prevent default
  event.preventDefault();

  // on Click Show the Info tooltip
  shareButtonContent.classList.toggle('hidden');
});
