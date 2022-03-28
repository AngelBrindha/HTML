export function displayConversion() {
  const givenCurrency = document.getElementById('given-amount');
  const result = Math.ceil(Math.random(givenCurrency) * 10000);
  document.getElementById('convert-amount').innerHTML = result;
  console.log(result);
}

document.getElementById('given-amount').addEventListener('change', () => {
  displayConversion();
});
