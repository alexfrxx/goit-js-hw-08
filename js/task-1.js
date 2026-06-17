'use strict';

const categories = document.querySelectorAll('.item');

function getInfo() {
  console.log(`Numbers of categories: ${categories.length}`);
  categories.forEach((category) => {
    const title = category.querySelector('h2');
    const item = category.querySelectorAll('li');

    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${item.length}`);
  });
}

getInfo();
