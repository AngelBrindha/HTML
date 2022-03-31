import { savedata, myFunction } from './function.js';
import { add } from './element.js';

{
  add.addEventListener('click', (e) => {
    display();
  });
  function display() {
    document.getElementById('display').style.display = 'block';
  }
  savedata();
  myFunction();
}
