'use strict';

const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

function changeName() {
  input.addEventListener('input', () => {
    const value = input.value.trim();
    span.textContent = value || 'Anonymous';
  });
}

changeName();
