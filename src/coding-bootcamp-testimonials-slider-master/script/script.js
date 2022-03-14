const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const image = document.querySelector('.photo');
const feedback = document.querySelector('.para');

const users = [
  {
    name: 'Tanya Sinclair',
    role: 'UX Engineer',
    feedback: `“ I’ve been interested in coding for a while but never taken the jump, until now.
    I couldn't recommend this course enough. I'm now in the job of my dreams and so
    excited about the future. ”`,
    image: './images/image-tanya.jpg',
  },
  {
    name: 'John Tarkpor',
    role: 'Junior Front-end Developer',
    feedback: `“ If you want to lay the best foundation possible I’d recommend taking this course.
    The depth the instructors go into is incredible. I now feel so confident about
    starting up as a professional developer. ”`,
    image: './images/image-john.jpg',
  },
];
let slide = 0;
const btn = () => {
  if (slide > users.length - 1) {
    slide = 0;
  }
  image.innerHTML = `<img src="${users[slide].image}" alt="">`;
  feedback.innerHTML = `
  <p>${users[slide].feedback}</p>
  <h4 class="name">${users[slide].name}</h4>
  <span class="role">${users[slide].role}</span>
  `;
  slide++;
};
btn();

prevBtn.addEventListener('click', btn);
nextBtn.addEventListener('click', btn);
