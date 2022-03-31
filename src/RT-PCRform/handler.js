import { add, form, search } from './element.js';

add.addEventListener('click', (e) => {
  display();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  savedata();
});

search.addEventListener('click', (e) => {
  e.preventDefault();
  myFunction();
});
