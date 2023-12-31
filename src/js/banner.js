const bannerEl = document.querySelector('.js-banner');
const timerEl = document.querySelector('.js-timer');


setTimeout(() => {
  let counter = 10;

  bannerEl.classList.add('is-visible');

  const intervalId = setInterval(() => {

    timerEl.textContent = counter;
    counter -= 1;

    if (counter < 0) {
      clearInterval(intervalId);
      bannerEl.classList.remove('is-visible');
    }

  }, 1000);

}, 3000);