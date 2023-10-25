import Notiflix from 'notiflix';

const formEl = document.querySelector('.form-js');

function createPromise (position, delay) {
  const shouldResolve = Math.random() > 0.3;

  if (shouldResolve) {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }

};


formEl.addEventListener('submit', onCreatePromise);

function onCreatePromise (e) {
  e.preventDefault();
  const { target } = e;

  const delay = Number(target.elements.delay.value);
  const step = Number(target.elements.step.value);
  const amount = Number(target.elements.amount.value);


  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay);
  }

  target.reset();
}
