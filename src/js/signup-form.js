'use strict';

// Element Ids
const registerBtn = document.querySelector('.btn-content__register-btn');

// Input Field Elements
const firstName = document.querySelector('.form__input-1');
const lastName = document.querySelector('.form__input-2');
const email = document.querySelector('.form__input-3');
const password = document.querySelector('.form__input-4');

// Error input Field icons
const firstNameErrorIcon = document.querySelector('.input__error-icon-1');
const lastNameErrorIcon = document.querySelector('.input__error-icon-2');
const emailErrorIcon = document.querySelector('.input__error-icon-3');
const passwordErrorIcon = document.querySelector('.input__error-icon-4');

// Error message elements
const firstNameError = document.querySelector('.form--input__error-1');
const lastNameError = document.querySelector('.form--input__error-2');
const emailError = document.querySelector('.form--input__error-3');
const passwordError = document.querySelector('.form--input__error-4');

// Methods
// Validates first Name and last name of the form
const validateName = (isFirstName = true) => {
  // Checks for empty first name and lastName
  if (isFirstName) {
    // firstNameError.textContent =
    //   firstName.value.length === 0 ? 'First Name cannot be empty' : '';
    if (firstName.value.length === 0) {
      firstNameError.textContent = 'First Name cannot be empty';
      firstName.classList.add('form__input--invalid');
      firstNameErrorIcon.classList.remove('visible');
    } else {
      firstNameError.textContent = '';
      firstName.classList.remove('form__input--invalid');
      firstNameErrorIcon.classList.add('visible');
    }
  } else {
    lastNameError.textContent =
      lastName.value.length === 0 ? 'Last Name cannot be empty' : '';
    lastName.value.length === 0
      ? lastName.classList.add('form__input--invalid')
      : lastName.classList.remove('form__input--invalid');
    lastName.value.length === 0
      ? lastNameErrorIcon.classList.remove('visible')
      : lastNameErrorIcon.classList.add('visible');
  }
};

//  Validates email using a regex
const validateEmail = () => {
  let emailMessage = '';
  if (email.value.length === 0) {
    emailMessage = 'Email cannot be empty';
    email.classList.add('form__input--invalid');
    emailErrorIcon.classList.remove('visible');
  } else {
    //   Validate with regex
    // source - https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    var emailFilter = /^\S+@\S+$/;
    emailMessage = emailFilter.test(email.value) ? '' : 'Invalid Email';
    emailFilter.test(email.value)
      ? email.classList.remove('form__input--invalid')
      : email.classList.add('form__input--invalid');
    emailFilter.test(email.value)
      ? emailErrorIcon.classList.add('visible')
      : emailErrorIcon.classList.remove('visible');
  }

  emailError.textContent = emailMessage;
};

// Validate password
const validatePassword = () => {
  let passwordMessage = '';
  if (password.value.length === 0) {
    passwordMessage = 'Password cannot be Empty';
    password.classList.add('form__input--invalid');
    passwordErrorIcon.classList.remove('visible');
  } else {
    //   Validation Criteria -
    //   1. Minimum of 6 character
    //   TODO: Make a stronger regex to validate password and email
    passwordMessage =
      password.value.length < 6 ? 'password must be at least 6 characters' : '';
    password.value.length < 6
      ? password.classList.add('form__input--invalid')
      : password.classList.remove('form__input--invalid');
    password.value.length < 6
      ? passwordErrorIcon.classList.remove('visible')
      : passwordErrorIcon.classList.add('visible');
  }

  passwordError.textContent = passwordMessage;
};

// Clear form only if valid else retain the previous values before register button is clicked

const resetForm = () => {
  // if any of the input field have an active error message retain the form state, else clear form
  if (
    passwordError.textContent.length !== 0 ||
    firstNameError.textContent.length !== 0 ||
    lastNameError.textContent.length !== 0 ||
    emailError.textContent.length !== 0
  ) {
    return;
  } else {
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    password.value = '';
  }
};

const handleFormSubmission = () => {
  console.log(firstName.value);
  console.log(lastName.value);
  //   1. Validate FirstName
  validateName();
  //   2. Validate LastName
  validateName(false);
  //   3. Validate Email
  validateEmail();
  //   4. Validate Password
  validatePassword();

  // 2. reset Form
  resetForm();
};

registerBtn.addEventListener('click', (event) => {
  event.preventDefault();
  handleFormSubmission();
});
