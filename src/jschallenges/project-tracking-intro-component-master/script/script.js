const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.link');
const hamburger = document.querySelector('.hamburger');
navToggle.addEventListener('click', (e) => {
  navToggle.classList.toggle('open');
  navList.classList.toggle('nav__list--active');
});

// .hamburger:nth-child(1),
// .hamburger:nth-child(2),
// .hamburger:nth-child(3) {
//   display: block;
//   background: var(--very-dark-desaturated-blue);
//   position: relative;
//   width: 1.5rem;
//   height: 0.125rem;
//   transition: all 0.3s linear;
// }

// .hamburger:nth-child(1) {
//   transform: rotate(0);
//   top: 0px;
// }

// .hamburger:nth-child(2) {
//   opacity: 1;
//   transform: translateX(0);
//   top: 5px;
// }

// .hamburger:nth-child(3) {
//   transform: rotate(0);
//   top: 10px;
// }

// .nav__toggle.open .hamburger:nth-child(1) {
//   transform: rotate(45deg);
//   top: 9px;
// }

// .nav__toggle.open .hamburger:nth-child(2) {
//   opacity: 0;
//   transform: translateX(20px);
// }

// .nav__toggle.open .hamburger:nth-child(3) {
//   transform: rotate(-45deg);
//   top: 5px;
// }

// .nav__list {
//   display: none;
// }

// .nav__list--active {
//   max-width: 19.4375rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   top: 80%;
//   right: 5%;
//   background-color: var(--white);
//   text-align: center;
//   padding: 1.5rem;
//   border-radius: 3px;
//   box-shadow: 0 5px 10px hsla(0, 0%, 10%, 0.15);
// }

// .nav__item + .nav__item {
//   margin-top: 1.5rem;
// }

// .nav__item:nth-child(3)::after {
//   content: '';
//   background-color: var(--very-dark-desaturated-blue);
//   position: relative;
//   display: block;
//   border: none;
//   width: 16.4375rem;
//   height: 1px;
//   opacity: 0.15;
//   margin-top: 1.5rem;
// }
