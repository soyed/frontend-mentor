const toggleBtn = document.querySelector('.toggle--btn');
const priceText = document.querySelector('.price');
const priceSlider = document.querySelector('.slider-container');
const priceFill = document.querySelector('.price__fill');
const priceTrack = document.querySelector('.price__track');

/*==========  Helper Methods  ======*/
let clicked = false,
  toggled = false;
const parseDefaultPrice = () => {
  return priceText.textContent.slice(1).split('.')[0];
};

const parsePrice = (price) => {
  if (priceText.dataset.month === 'month')
    return (price + (price * 0.25) / 0.75) / 12;
  else if (priceText.dataset.month === 'year') return price * 12 * 0.75;
};

const togglePrice = (price = parseDefaultPrice()) => {
  price = Number(price);
  priceText.textContent = `$${parsePrice(price)}.00`;
  smoothTransition(priceText);
};
const updatePrice = (price) => {
  if (priceText.dataset.month === 'year') {
    priceText.textContent = `$${parsePrice(price)}.00`;
  } else {
    priceText.textContent = `$${price}.00`;
  }
  smoothTransition(priceText);
};

const slidePrice = (event) => {
  const { offsetX } = event;
  const width = Math.round((offsetX / priceTrack.clientWidth) * 100);
  updatePrice(width);
  priceFill.style.width = `calc(${width}% - 1.75rem)`;
  smoothTransition(priceFill);
};

const handleTogglePrice = () => {
  toggleBtn.classList.toggle('toggle');
  if (priceText.dataset.month === 'month') {
    priceText.setAttribute('data-month', 'year');
  } else {
    priceText.setAttribute('data-month', 'month');
  }
  togglePrice();
};

const smoothTransition = (element) => {
  element.classList.add('transition-all');
  setTimeout(() => element.classList.remove('transition-all'), 500);
};

/*==========  Event Listeners  ======*/

// => List for price toggle => monthly / yearly
toggleBtn.addEventListener('click', handleTogglePrice);

// => track mousemove when the price slider is clicked
let mousedown = false;

priceSlider.addEventListener('mouseup', () => (mousedown = false));
priceSlider.addEventListener('mousedown', () => (mousedown = true));

priceTrack.addEventListener('mousemove', (event) => {});
priceTrack.addEventListener('click', slidePrice);
