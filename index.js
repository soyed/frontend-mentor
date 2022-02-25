const faqRows = document.querySelectorAll('.faq__content--card');

/**
 * This method loops through FAQ row and closes any active row
 */
const closeActiveRow = (activeIndex) => {
  faqRows.forEach((row, index) => {
    // => Edge case => When the active row is the only active row and is toggled => return
    if (index == activeIndex) return;
    if (row.classList.contains('faq__content--card__active')) {
      // => remove active row
      row.classList.remove('faq__content--card__active');
    }
  });
};

// => Edge Case => Ensure FAQ rows exist
if (faqRows) {
  // => Add event listener to each row and toggle "faq__content--card__active"
  faqRows.forEach((row, index) => {
    row.addEventListener('click', () => {
      // => Check if there is any active row
      // => if true => close the row and update state
      closeActiveRow(index);
      // => Toggle the clicked row
      row.classList.toggle('faq__content--card__active');
    });
  });
}
