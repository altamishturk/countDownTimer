const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];


const giveawayEl = document.querySelector('.giveaway');
// future date 
const futureTime = new Date('2022-1-1 00:00:00');
const year = futureTime.getFullYear();
const month = months[futureTime.getMonth()];
const date = futureTime.getDate();
const day = weekdays[futureTime.getDay()];
const minutes = futureTime.getMinutes();
const seconds = futureTime.getSeconds();


giveawayEl.textContent = `giveaway ends on ${day}, ${date} ${month} ${year} ${minutes}:${seconds}am`;



function getRemainingTime() {
  const currentTime = new Date().getTime();
  const remaningTime = futureTime.getTime() - currentTime;

  // time is ms 
  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const minute = 60 * 1000;

  const remaningDays = Math.floor(remaningTime / day);
  const remaningHours = Math.floor((remaningTime % day) / hour);
  const remaningMinutes = Math.floor((remaningTime % hour) / minute);
  const remaningSeconds = Math.floor((remaningTime % minute) / 1000);

  const daysEl = document.querySelector('.days')
  const hoursEl = document.querySelector('.hours')
  const minutesEl = document.querySelector('.minutes')
  const secondsEl = document.querySelector('.seconds')

  daysEl.textContent = remaningDays;
  hoursEl.textContent = remaningHours;
  minutesEl.textContent = remaningMinutes;
  secondsEl.textContent = remaningSeconds;
}

setInterval(() => {
  getRemainingTime();
}, 1000)






// const giveaway = document.querySelector('.giveaway');
// const deadline = document.querySelector('.deadline');
// const items = document.querySelectorAll('.deadline-format h4');

// let tempDate = new Date();
// let tempYear = tempDate.getFullYear();
// let tempMonth = tempDate.getMonth();
// let tempDay = tempDate.getDate();
// // months are ZERO index based;
// const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// // let futureDate = new Date(2020, 3, 24, 11, 30, 0);

// const year = futureDate.getFullYear();
// const hours = futureDate.getHours();
// const minutes = futureDate.getMinutes();

// let month = futureDate.getMonth();
// month = months[month];
// const weekday = weekdays[futureDate.getDay()];
// const date = futureDate.getDate();
// giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// const futureTime = futureDate.getTime();
// function getRemaindingTime() {
//   const today = new Date().getTime();

//   const t = futureTime - today;
//   // 1s = 1000ms
//   // 1m = 60s
//   // 1hr = 60m
//   // 1d = 24hr
//   // values in miliseconds
//   const oneDay = 24 * 60 * 60 * 1000;
//   const oneHour = 60 * 60 * 1000;
//   const oneMinute = 60 * 1000;
//   // calculate all values
//   let days = t / oneDay;
//   days = Math.floor(days);
//   let hours = Math.floor((t % oneDay) / oneHour);
//   let minutes = Math.floor((t % oneHour) / oneMinute);
//   let seconds = Math.floor((t % oneMinute) / 1000);

//   // set values array
//   const values = [days, hours, minutes, seconds];
//   function format(item) {
//     if (item < 10) {
//       return (item = `0${item}`);
//     }
//     return item;
//   }

//   items.forEach(function (item, index) {
//     item.innerHTML = format(values[index]);
//   });

//   if (t < 0) {
//     clearInterval(countdown);
//     deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
//   }
// }
// // countdown;
// let countdown = setInterval(getRemaindingTime, 1000);
// //set initial values
// getRemaindingTime();
