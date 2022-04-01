import { search } from './element.js';
import { searchdata } from './search.js';

search.addEventListener('click', (e) => {
  myFunction();
  searchdata();
});

export function myFunction() {
  var input, filter, table1, tr, txtValue3, td3, j;
  var td1, i, txtValue1;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  table1 = document.getElementById('searchTable');
  tr = table1.getElementsByTagName('tr');

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
console.log(txtValue3);
