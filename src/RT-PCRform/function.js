import { search } from './element.js';
// import { searchdata } from './search.js';

search.addEventListener('click', (e) => {
  myFunction();
  // searchdata();
});

export function myFunction() {
  var input, filter, table, tr, td3, j;
  var txtValue3;
  input = document.getElementById('search');
  filter = input.value;
  table = document.getElementById('myTable');
  tr = table.getElementsByTagName('tr');

  for (j = 0; j < tr.length; j++) {
    td3 = tr[j].getElementsByTagName('td')[2];
    if (td3) {
      txtValue3 = td3.textContent || td3.innerText;
      console.log(txtValue3);

      if (txtValue3.indexOf(filter) > -1) {
        tr[j].style.display = '';
      } else {
        tr[j].style.display = 'none';
      }
    }
  }
}
