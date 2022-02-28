// => Elements
const toggleBtn = document.querySelector('.header__content--btn');
const priceCards = document.querySelectorAll('.pricing__card--header__active');

/**
 * adjustPrice is an helper that toggles the cost each card monthly or annually.
 *
 * @param {*} price
 * @param {*} index => the index is the number of 9 to add or remove from a price
 * @param {*} monthly : boolean
 * @returns String
 */
const adjustPrice = (price, index, monthly) => {
  const prices = price.split('.');
  let newPrice;
  if (monthly) {
    newPrice =
      prices[0].substring(0, prices[0].length - index) + '.' + prices[1];
  } else {
    newPrice = prices[0] + '9'.repeat(index) + '.' + prices[1];
  }
  return newPrice;
};

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    // => Toggle the price for all price cards
    priceCards.forEach((card) => {
      // => Get the current price
      const currentPrice = card.textContent.substring(
        1,
        card.textContent.length
      );
      // => Check the if it is a monthly plan
      if (currentPrice < 50) {
        card.textContent = `$${adjustPrice(currentPrice, 1, false)}`;
      } else {
        card.textContent = `$${adjustPrice(currentPrice, 1, true)}`;
      }
    });
  });
}
