let result = document.getElementById('screen');

let calculate = (number) => {
  result.value += number;
};

let Result = () => {
  try {
    result.value = eval(result.value);
  } catch (err) {
    alert('Enter the valid Input');
  }
};
function reset() {
  result.value = ' ';
}
function del() {
  result.value = result.value.slice(0, -1);
}
