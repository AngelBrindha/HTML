const daily = document.querySelector('#daily');
const weekly = document.querySelector('#weekly');
const monthly = document.querySelector('#monthly');

const workTimeCurrent = document.querySelector('#work-time-current');
const workTimePrevious = document.querySelector('#work-time-previous');
const playTimeCurrent = document.querySelector('#play-time-current');
const playTimePrevious = document.querySelector('#play-time-previous');
const studyTimeCurrent = document.querySelector('#study-time-current');
const studyTimePrevious = document.querySelector('#study-time-previous');
const exerciseTimeCurrent = document.querySelector('#exercise-time-current');
const exerciseTimePrevious = document.querySelector('#exercise-time-previous');
const socialTimeCurrent = document.querySelector('#social-time-current');
const socialTimePrevious = document.querySelector('#social-time-previous');
const selfCareTimeCurrent = document.querySelector('#selfcare-time-current');
const selfCareTimePrevious = document.querySelector('#selfcare-time-previous');

daily.addEventListener('click', dailyFunc);

function dailyFunc() {
  workTimeCurrent.textContent = '5hrs';
  workTimePrevious.textContent = 'Last Day - 7hrs';

  playTimeCurrent.textContent = '1hrs';
  playTimePrevious.textContent = 'Last Day - 2hrs';

  studyTimeCurrent.textContent = '0hrs';
  studyTimePrevious.textContent = 'Last Day - 1hrs';

  exerciseTimeCurrent.textContent = '1hrs';
  exerciseTimePrevious.textContent = 'Last Day - 1hrs';

  socialTimeCurrent.textContent = '1hrs';
  socialTimePrevious.textContent = 'Last Day - 3hrs';

  selfCareTimeCurrent.textContent = '0hrs';
  selfCareTimePrevious.textContent = 'Last Day - 1hrs';
}

weekly.addEventListener('click', weeklyFunc);

function weeklyFunc() {
  workTimeCurrent.textContent = '32hrs';
  workTimePrevious.textContent = 'Last Week - 36hrs';

  playTimeCurrent.textContent = '10hrs';
  playTimePrevious.textContent = 'Last Week - 8hrs';

  studyTimeCurrent.textContent = '4hrs';
  studyTimePrevious.textContent = 'Last Week - 7hrs';

  exerciseTimeCurrent.textContent = '4hrs';
  exerciseTimePrevious.textContent = 'Last Week - 5hrs';

  socialTimeCurrent.textContent = '5hrs';
  socialTimePrevious.textContent = 'Last Week - 10hrs';

  selfCareTimeCurrent.textContent = '2hrs';
  selfCareTimePrevious.textContent = 'Last Week - 2hrs';
}

monthly.addEventListener('click', monthlyFunc);

function monthlyFunc() {
  workTimeCurrent.textContent = '103hrs';
  workTimePrevious.textContent = 'Last Month - 128hrs';

  playTimeCurrent.textContent = '23hrs';
  playTimePrevious.textContent = 'Last Month - 29hrs';

  studyTimeCurrent.textContent = '13hrs';
  studyTimePrevious.textContent = 'Last Month - 19hrs';

  exerciseTimeCurrent.textContent = '11hrs';
  exerciseTimePrevious.textContent = 'Last Month - 18hrs';

  socialTimeCurrent.textContent = '21hrs';
  socialTimePrevious.textContent = 'Last Month - 23hrs';

  selfCareTimeCurrent.textContent = '7hrs';
  selfCareTimePrevious.textContent = 'Last Month - 11hrs';
}
