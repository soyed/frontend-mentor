const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    panel.classList.toggle('open');
  });
});

panels.forEach((panel) =>
  panel.addEventListener('transitionend', (event) => {
    const { propertyName } = event;
    if (propertyName.includes('flex')) {
      panel.classList.toggle('open-active');
    }
  })
);
