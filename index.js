const hourHand = document.querySelector('.clock__hand--hour');
const minHand = document.querySelector('.clock__hand--min');
const secHand = document.querySelector('.clock__hand--sec');

// helper function to parse
function convertHour(hour) {
  if (hour == 0) {
    return 0;
  } else if (hour > 12 && hour <= 23) {
    return hour - 12;
  } else {
    return hour;
  }
}

function setDate() {
  const date = new Date();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  // => Calculate the degree for each seconds
  const secondDegree = (second / 60) * 360;
  const minuteDegree = (minute / 60) * 360;
  const hourDegree = (convertHour(hour) / 12) * 360;

  // => set the clock hand angles
  hourHand.style.transform = `rotate(${90 + hourDegree}deg)`;
  minHand.style.transform = `rotate(${90 + minuteDegree}deg)`;
  secHand.style.transform = `rotate(${90 + secondDegree}deg)`;
}

// 4. display the current time and update in real time with the clock
setInterval(setDate, 1000);
