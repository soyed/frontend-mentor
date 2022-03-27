const rangeSlider = document.querySelector("input[type='range'");
const priceText = document.querySelector('.price');
const toggleBtn = document.querySelector('.toggle--btn');

/*============= Functions   ===============*/
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

const handleTogglePrice = () => {
  toggleBtn.classList.toggle('toggle');
  if (priceText.dataset.month === 'month') {
    priceText.setAttribute('data-month', 'year');
  } else {
    priceText.setAttribute('data-month', 'month');
  }
  togglePrice();
};

const updatePrice = (price) => {
  if (priceText.dataset.month === 'year') {
    priceText.textContent = `$${parsePrice(price)}.00`;
  } else {
    priceText.textContent = `$${price}.00`;
  }
  smoothTransition(priceText);
};

const smoothTransition = (element) => {
  element.classList.add('transition-all');
  setTimeout(() => element.classList.remove('transition-all'), 1000);
};

/*============= Event Listeners   ===============*/
rangeSlider.addEventListener('change', (event) => {
  updatePrice(event.target.value);
});
toggleBtn.addEventListener('click', handleTogglePrice);
