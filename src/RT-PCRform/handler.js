import { form } from './element.js';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  savedata();
});

function getRadioValue(theRadioGroup) {
  var elements = document.getElementsByName(theRadioGroup);
  for (var i = 0, l = elements.length; i < l; i++) {
    if (elements[i].checked) {
      return elements[i].value;
    }
  }
}

export function savedata() {
  var data = {
    name: document.getElementById('name').value,
    gender: getRadioValue('gender'),
    aadhar: document.getElementById('aadhar').value,
    dob: document.getElementById('dob').value,
    city: document.getElementById('city').value,
    dot: document.getElementById('dot').value,
    tot: document.getElementById('tot').value,
    result: getRadioValue('result'),
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

  cell1.innerHTML = data.name;
  cell2.innerHTML = data.gender;
  cell3.innerHTML = data.aadhar;
  cell4.innerHTML = data.dob;
  cell5.innerHTML = data.city;
  cell6.innerHTML = data.dot;
  cell7.innerHTML = data.tot;
  cell8.innerHTML = data.result;
  cell9.innerHTML = data.labName;
  cell10.innerHTML = data.reportNum;
  table.appendChild(row);
}
