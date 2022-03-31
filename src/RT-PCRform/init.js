import { add } from './element.js';
import { savedata } from './handler.js';
import { myFunction } from './function.js';
import { searchDisplay, searchdata } from './radio.js';

{
  add.addEventListener('click', (e) => {
    display();
  });
  function display() {
    document.getElementById('display').style.display = 'block';
  }
  savedata();
  myFunction();
  searchDisplay();
  searchdata();
}
