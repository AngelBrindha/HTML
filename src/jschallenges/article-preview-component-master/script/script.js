const box = document.querySelector('.box');
document.querySelector('.icon').addEventListener('click', function () {
  this.classList.toggle('active');
  box.classList.toggle('active');
});
