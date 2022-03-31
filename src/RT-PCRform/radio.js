import { button } from './element.js';
import { add } from './element.js';
import { table } from './element.js';
import { myFunction } from './function.js';
add.addEventListener('click', (e) => {
  searchDisplay();
});
export function searchDisplay() {
  document.getElementById('button').style.display = 'block';
}

button.addEventListener('submit', (e) => {
  myFunction();
  searchdata();
});
export function searchdata() {
  var data = {
    name: document.getElementById('name').value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    aadhar: document.getElementById('aadhar').value,
    dob: document.getElementById('dob').value,
    city: document.getElementById('city').value,
    dot: document.getElementById('dot').value,
    tot: document.getElementById('tot').value,
    result: document.querySelector('input[name="result"]:checked').value,
    labName: document.getElementById('lab-name').value,
    reportNum: document.getElementById('report-num').value,
  };
  console.log(data);
  var row = table.insertRow(-1);

  var cell1 = row.insertCell(-1);
  var cell2 = row.insertCell(-1);
  var cell3 = row.insertCell(-1);
  var cell4 = row.insertCell(-1);
  var cell5 = row.insertCell(-1);
  var cell6 = row.insertCell(-1);
  var cell7 = row.insertCell(-1);
  var cell8 = row.insertCell(-1);
  var cell9 = row.insertCell(-1);
  var cell10 = row.insertCell(-1);

  cell1.innerHTML = data.name.txtValue3;
  cell2.innerHTML = data.gender.txtValue3;
  cell3.innerHTML = data.aadhar.txtValue3;
  cell4.innerHTML = data.dob.txtValue3;
  cell5.innerHTML = data.city.txtValue3;
  cell6.innerHTML = data.dot.txtValue3;
  cell7.innerHTML = data.tot.txtValue3;
  cell8.innerHTML = data.result.txtValue3;
  cell9.innerHTML = data.labName.txtValue3;
  cell10.innerHTML = data.reportNum.txtValue3;
  table.appendChild(row);
}
