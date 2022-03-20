const checkBoxes = document.querySelectorAll("input[type='checkbox']");

let lastChecked;

const toggleCheckBox = (event) => {
  const { shiftKey } = event;
  const { checked } = event.target;

  let inBetweenChecked = false;
  if (shiftKey && checked) {
    checkBoxes.forEach((checkBox) => {
      if (checkBox === event.target || checkBox === lastChecked) {
        inBetweenChecked = !inBetweenChecked;
      }
      if (inBetweenChecked) checkBox.checked = true;
    });
  } else {
    checkBoxes.forEach((checkBox) => {
      if (checkBox !== event.target) {
        checkBox.checked = false;
      }
    });
  }

  lastChecked = event.target;
};

checkBoxes.forEach((checkBox) =>
  checkBox.addEventListener('click', toggleCheckBox)
);
