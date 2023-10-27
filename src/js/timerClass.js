const listEl = document.querySelector('.js-timer-list');
const inputEl = document.querySelector('.text-in');
const btnStart = document.querySelector('[data-start]');

listEl.innerHTML = `Днів: 00 | Годин: 00 | Хвилин: 00 | Секунд: 00`;

class Timer {
  intervalId = null;

  constructor(rootSelector, targetDate) {
    this.rootSelector = rootSelector;
    this.targetDate = targetDate;
  }


  start () {
    this.intervalId = setInterval(() => {
      const diff = this.targetDate - Date.now();
      const { days, hours, minutes, seconds } = this.convertMs(diff);

      listEl.innerHTML = `Днів: ${days} |
                          Годин: ${hours} |
                          Хвилин: ${minutes} |
                          Секунд: ${seconds}`;
    }, 1000);
  }

  stop () {
    clearInterval(this.intervalId);
  }

  convertMs (ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }

}


btnStart.addEventListener('click', onStartTimer);

function onStartTimer (e) {
  const time = inputEl.value;
  e.target.disabled = true;

  const timer = new Timer('.timer-list', new Date(time));
  timer.start();

  inputEl.value = '';
}


// ---------Promise-methods--------------------------------------

// import { randomValue } from "./helpers/fn-random-value";

// const frameworks = ['React', 'Vue', 'Angular'];


// function createPromise (framework) {
//   return new Promise((resolve, reject) => {
//     const DELAY = randomValue();

//     setTimeout(() => {
//       if (DELAY < 500) {
//         resolve({ framework, delay: DELAY });
//       } else {
//         reject({ framework, delay: DELAY, error: 'Promis error' });
//       }
//     }, DELAY);

//   });
// };


// const promises = frameworks.map(framework => createPromise(framework));

// function onSuccess ({ framework, delay }) {
//   console.log(`Framework: ${framework} delay: ${delay}`);
// }
// function onError ({ framework, delay, error }) {
//   console.log(`Framework: ${framework} delay: ${delay} error: ${error}`);
// }

// Promise.allSettled(promises).then(respons => respons.forEach(({ status, value, reason }) => {

//   if (status === 'fulfilled') {
//     onSuccess(value);
//   } else {
//     onError(reason);
//   }

// }));

// // Promise.race(promises).then(onSuccess).catch(onError);

// // Promise.all(promises)
// //   .then(res => res.forEach(item => onSuccess(item)))
// //   .catch(onError);