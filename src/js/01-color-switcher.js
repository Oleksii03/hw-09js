import { getRandomHexColor } from "./helpers/fn-random-color";

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

// -------Через-функції------------------------------

btnStart.addEventListener('click', onBtnStartChangeColor);
btnStop.addEventListener('click', onBtnStopChangeColor);


let intervalId = null;

function onBtnStartChangeColor (e) {
  const { target } = e;

  target.setAttribute('disabled', '');

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  btnStop.removeAttribute('disabled');
}

function onBtnStopChangeColor (e) {
  const { target, currentTarget } = e;

  clearInterval(intervalId);

  btnStart.removeAttribute('disabled');
  target.setAttribute('disabled', '');

  bodyEl.addEventListener('click', onActiveBtn);
}

function onActiveBtn (e) {
  if (e.target === e.currentTarget) {
    btnStop.removeAttribute('disabled');
    document.body.style.backgroundColor = '#fafafa';

    bodyEl.removeEventListener('click', onActiveBtn);
  }
}

// ------------/------------------------------------

// --------Через-обєкт-----------------------------

// const colorSwitcher = {
//   intervalId: null,

//   start () {
//     this.intervalId = setInterval(() => {
//       document.body.style.backgroundColor = getRandomHexColor();
//     }, 1000);

//     btnStart.setAttribute('disabled', '');
//     btnStop.removeAttribute('disabled');
//   },

//   stop () {
//     clearInterval(this.intervalId);

//     btnStart.removeAttribute('disabled');
//     btnStop.setAttribute('disabled', '');
//   }
// };

// btnStart.addEventListener('click', colorSwitcher.start.bind(colorSwitcher));
// btnStop.addEventListener('click', colorSwitcher.stop.bind(colorSwitcher));


// -----------/--------------------------------------------
