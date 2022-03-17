const button = document.getElementById('selector-bar');
const ball = document.getElementById('selector-ball');

function toggle() {
  let monthPayment = document.getElementsByClassName('monthly');
  let annualPayment = document.getElementsByClassName('annually');
  let i;
  let n;

  for (i = 0; i < monthPayment.length; i++) {
    for (n = 0; n < annualPayment.length; n++) {
      if (monthPayment[i].style.display === 'none') {
        monthPayment[i].style.display = 'block';
        annualPayment[i].style.display = 'none';
        ball.style.justifyContent = 'flex-end';
      } else {
        monthPayment[i].style.display = 'none';
        annualPayment[i].style.display = 'block';
        ball.style.justifyContent = 'flex-start';
      }
    }
  }
}
button.addEventListener('click', toggle);
