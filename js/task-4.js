'use strict';

const form = document.querySelector('.login-form');

function formSubmit() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const res = {
      email: form.elements.email.value.trim(),
      password: form.elements.password.value.trim()
    };

    for (let key of Object.values(res)) {
      if (!key) {
        return alert('All form fields must be filled in');
      }
    }

    console.log(res);
    form.reset();
  });
}

formSubmit();
