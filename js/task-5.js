'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color'),
  body = document.querySelector('body'),
  color = document.querySelector('.color');

function changeColor() {
  btn.addEventListener('click', () => {
    body.style.backgroundColor = getRandomHexColor();
    color.textContent = getRandomHexColor();
  });
}

changeColor();
