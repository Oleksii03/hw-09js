import throttle from 'lodash.throttle';

import { FEEDBACK_KEY } from './common';

//-------/import----------------------------

const formEl = document.querySelector('.feedback-form');

fillFormFilds();

formEl.addEventListener('input', throttle(onChangeInput, 500));

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const { target } = e;

  target.reset();
  localStorage.removeItem(FEEDBACK_KEY);

  console.log(userFeedback);
});

const userFeedback = {};

function onChangeInput (e) {
  const { target } = e;

  userFeedback[target.name] = target.value;

  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(userFeedback));
}

function fillFormFilds () {
  const objUserFeedback = JSON.parse(localStorage.getItem(FEEDBACK_KEY));

  if (objUserFeedback === null) return;

  const keys = Object.keys(objUserFeedback);

  for (const key of keys) {
    console.dir(formEl.elements[key].value = objUserFeedback[key]);
  }
}


