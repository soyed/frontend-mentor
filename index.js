const drumCards = document.querySelectorAll(`.drum__card`);

document.addEventListener('keypress', (event) => {
  const { code } = event;

  const audio = document.querySelector(`.drum__audio[data-key="${code}"]`);
  const drum = document.querySelector(`.drum__card[data-key="${code}"]`);

  // => edge case
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  drum.classList.add('playing');
});

drumCards.forEach((drum) => {
  const keyCode = drum.getAttribute('data-key');
  const audio = document.querySelector(`.drum__audio[data-key="${keyCode}"]`);
  audio.currentTime = 0;
  drum.addEventListener('click', () => {
    audio.play();
    drum.classList.add('playing');
  });
});

// => Transitionend event
const smoothTrans = (event) => {
  // => target is the current element pointed at
  const { propertyName, target } = event;
  if (propertyName !== 'transform') return;
  target.classList.remove('playing');
};

drumCards.forEach((drum) => {
  drum.addEventListener('transitionend', smoothTrans);
});
