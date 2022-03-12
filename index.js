'use strict';
const image = document.querySelector('.main--image');
const headerSpan = document.querySelector('h1 span');
const inputFields = document.querySelectorAll('input');

// Update Image
const updateImage = (field) => {
  const name = field.target.name;
  const value = field.target.value;
  if (name === 'range--spacing') {
    const padding = `${value}px`;
    document.documentElement.style.setProperty(`--${name}`, padding);
  }

  if (name === 'range--blur') {
    const opacity = `${value}px`;
    document.documentElement.style.setProperty(`--${name}`, opacity);
  }

  if (name === 'base--color') {
    document.documentElement.style.setProperty(`--${name}`, value);
  }
};

// => Add event listener to the input field checking for changes
inputFields.forEach((field) => {
  field.addEventListener('change', updateImage);
  field.addEventListener('mousemove', updateImage);
});
