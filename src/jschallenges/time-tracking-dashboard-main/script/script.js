const dailyBtn = document.querySelector('#daily');
const weeklyBtn = document.querySelector('#weekly');
const monthlyBtn = document.querySelector('#monthly');

const hours = document.querySelectorAll('.hour');
const lastTime = document.querySelectorAll('.duration');

function dailyData() {
  fetch(
    'https://html-delta-gold.vercel.app/src/jschallenges/time-tracking-dashboard-main/data.json'
  )
    .then((response) => response.json())
    .then((data) => {
      hours.forEach((e, i) => {
        hours[i].innerHTML = data[i].timeframes.daily.current + 'hrs';
        lastTime[i].innerHTML =
          'Last Daily - ' + data[i].timeframes.daily.previous + 'hrs';
      });
    });
}

function weeklyData() {
  fetch(
    'https://html-delta-gold.vercel.app/src/jschallenges/time-tracking-dashboard-main/data.json'
  )
    .then((response) => response.json())
    .then((data) => {
      hours.forEach((e, i) => {
        hours[i].innerHTML = data[i].timeframes.weekly.current + 'hrs';
        lastTime[i].innerHTML =
          'Last Weekly - ' + data[i].timeframes.weekly.previous + 'hrs';
      });
    });
}

function monthlyData() {
  fetch(
    'https://html-delta-gold.vercel.app/src/jschallenges/time-tracking-dashboard-main/data.json'
  )
    .then((response) => response.json())
    .then((data) => {
      hours.forEach((e, i) => {
        hours[i].innerHTML = data[i].timeframes.monthly.current + 'hrs';
        lastTime[i].innerHTML =
          'Last Monthly - ' + data[i].timeframes.monthly.previous + 'hrs';
      });
    });
}

dailyBtn.addEventListener('click', () => {
  dailyData();
});

weeklyBtn.addEventListener('click', () => {
  weeklyData();
});

monthlyBtn.addEventListener('click', () => {
  monthlyData();
});
