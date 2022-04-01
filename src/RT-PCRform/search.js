import { search, table1 } from './element.js';
search.addEventListener('click', (e) => {
  e.preventDefault();
  searchdata();
});

export function searchdata() {
  var td3;
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

  var row = table1.insertRow(-1);

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

  cell1.innerHTML = data.name.td3;
  cell2.innerHTML = data.gender.td3;
  cell3.innerHTML = data.aadhar.td3;
  cell4.innerHTML = data.dob.td3;
  cell5.innerHTML = data.city.td3;
  cell6.innerHTML = data.dot.td3;
  cell7.innerHTML = data.tot.td3;
  cell8.innerHTML = data.result.td3;
  cell9.innerHTML = data.labName.td3;
  cell10.innerHTML = data.reportNum.td3;
  table1.appendChild(row);
}
