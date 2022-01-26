// Elements
const notifyBtn = document.querySelector('.ping__notify-btn');
const emailInput = document.querySelector('.ping__email-input');
const emailError = document.querySelector('.ping--email__error-msg');

notifyBtn.addEventListener('click', (event) => {
  // prevent default
  event.preventDefault();

  const emailRegex = /^\S+@\S+$/;

  // 1. if the input field is empty show error message
  if (!emailInput.value.length) {
    emailError.textContent = 'Email cannot be Empty';
    emailInput.classList.add('email-input__error');
    emailError.classList.remove('hidden');
  }
  // 2. if invalid email show the appropriate email
  else if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Please provide a valid email address';
    emailInput.classList.add('email-input__error');
    emailError.classList.remove('hidden');
  }
  // 3. if valid, accept the input and clear the form
  else {
    emailInput.value = null;
    emailInput.classList.remove('email-input__error');
    emailError.classList.add('hidden');
  }
});
