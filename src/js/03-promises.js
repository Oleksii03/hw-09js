import Notiflix from 'notiflix';

const formEl = document.querySelector('.form-js');

formEl.addEventListener('submit', onCreatePromise);

function onCreatePromise (e) {
  e.preventDefault();
  const { target } = e;

  let delay = Number(target.elements.delay.value);
  let step = Number(target.elements.step.value);
  let amount = Number(target.elements.amount.value);

  for (let i = 1; i <= amount; i += 1) {

    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delay += step;
  }

  target.reset();
}


function createPromise (position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }

    }, delay);
  });
}
