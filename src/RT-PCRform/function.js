import { row, data, table } from './element.js';
export function display() {
  document.getElementById('display').style.display = 'block';
}

function getRadioValue(theRadioGroup) {
  var elements = document.getElementsByName(theRadioGroup);
  for (var i = 0, l = elements.length; i < l; i++) {
    if (elements[i].checked) {
      return elements[i].value;
    }
  }
}

export function savedata() {
  data = {
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
  row = table.insertRow(-1);

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

export function myFunction() {
  var input, filter, table, tr, td1, i, txtValue1, txtValue3, td3;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  table = document.getElementById('myTable');
  tr = table.getElementsByTagName('tr');

  for (i = 0; i < tr.length; i++) {
    td1 = tr[i].getElementsByTagName('td')[0];
    if (td1) {
      txtValue1 = td1.textContent || td1.innerText;
      if (txtValue1.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
  for (j = 0; j < tr.length; j++) {
    td3 = tr[j].getElementsByTagName('td')[2];
    if (td3) {
      txtValue3 = td3.textContent || td3.innerText;
      if (txtValue3.toUpperCase().indexOf(filter) > -1) {
        tr[j].style.display = '';
      } else {
        tr[j].style.display = 'none';
      }
    }
  }
}
