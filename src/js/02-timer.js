import flatpickr from "flatpickr";
import Notiflix from 'notiflix';

import "flatpickr/dist/flatpickr.min.css";

const timetBody = document.querySelector('.timer-js');
const btnStart = document.querySelector('[data-start]');
const dayeEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

btnStart.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose (selectedDates) {

    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future !',
        { timeout: 3000 },
      );
      return;
    }

    btnStart.removeAttribute('disabled');

    btnStart.addEventListener('click', onClickBtnStart);
    function onClickBtnStart (e) {
      e.target.disabled = 'true';
      timetBody.style.backgroundColor = 'rgba(106, 255, 0, 0.797)';

      const intervalId = setInterval(() => {

        const deff = selectedDates[0] - Date.now();
        const { days, hours, minutes, seconds } = convertMs(deff);

        if (deff <= 0) {
          clearInterval(intervalId);
          return;
        }

        secondsEl.textContent = addLeadingZero(seconds);
        minutesEl.textContent = addLeadingZero(minutes);
        hoursEl.textContent = addLeadingZero(hours);
        dayeEl.textContent = addLeadingZero(days);

      }, 1000);
    }

    function convertMs (ms) {
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

    function addLeadingZero (value) {
      return value.toString().padStart(2, 0);
    }
  },

};

const fp = flatpickr("#datetime-picker", options);