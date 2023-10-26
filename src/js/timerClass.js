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
