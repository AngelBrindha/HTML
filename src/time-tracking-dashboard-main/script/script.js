let links = document.querySelectorAll('.link');

let daily = document.getElementById('#daily');
let weekly = document.getElementById('#weekly');
let monthly = document.getElementById('#monthly');

let workTimeCurrent = document.getElementById('work-time-current');
let playTimeCurrent = document.getElementById('play-time-current');
let studyTimeCurrent = document.getElementById('study-time-current');
let exerciseTimeCurrent = document.getElementById('exercise-time-current');
let socialTimeCurrent = document.getElementById('social-time-current');
let selfCareTimeCurrent = document.getElementById('selfcare-time-current');

let timeCurrent = [
  workTimeCurrent,
  playTimeCurrent,
  studyTimeCurrent,
  exerciseTimeCurrent,
  socialTimeCurrent,
  selfCareTimeCurrent,
];
let workTimePrevious = document.getElementById('work-time-previous');
let playTimePrevious = document.getElementById('play-time-previous');
let studyTimePrevious = document.getElementById('study-time-previous');
let exerciseTimePrevious = document.getElementById('exercise-time-previous');
let socialTimePrevious = document.getElementById('social-time-previous');
let selfCareTimePrevious = document.getElementById('selfcare-time-previous');

let timePrevious = [
  workTimePrevious,
  playTimePrevious,
  studyTimePrevious,
  exerciseTimePrevious,
  socialTimePrevious,
  selfCareTimePrevious,
];

const data = fetch('../data.json', { mode: 'no-cors' })
  .then((res) => res.json())
  .then((data) => {
    function switchActive(links, active) {
      links.forEach(function (link) {
        link.classList.remove('active');
      });
      active.classList.add('active');
    }
    daily.addEventListener('click', function () {
      switchActive(links, this);

      for (i = 0; i < data.length; i++) {
        timeCurrent[i].textContent = data[i].timeframes.daily.current;
        timePrevious[i].textContent = data[i].timeframes.daily.previous;
      }
    });
    weekly.addEventListener('click', function () {
      switchActive(links, this);

      for (i = 0; i < data.length; i++) {
        timeCurrent[i].textContent = data[i].timeframes.weekly.current;
        timePrevious[i].textContent = data[i].timeframes.weekly.previous;
      }
    });
    monthly.addEventListener('click', function () {
      switchActive(links, this);

      for (i = 0; i < data.length; i++) {
        timeCurrent[i].textContent = data[i].timeframes.monthly.current;
        timePrevious[i].textContent = data[i].timeframes.monthly.previous;
      }
    });
  });
