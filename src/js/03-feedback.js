import throttle from 'lodash.throttle';

import sendMessageForm from './modules/sendMessageForm';
import onEscClick from './modules/onEscClick';
import fillFieldsForm from './modules/fillFieldsForm';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name="email"]'),
  textarea: document.querySelector('[name="message"]'),
};
const STORAGE_KEY = "feedback-form-state";

fillFieldsForm(STORAGE_KEY, refs);

// ---------------------слухач сабміту форми ---------------------------
const onFormSubmit = (e) => {
  const target = e.target;
  const dataObjectConsole = {};
  const fields = target.elements;
  const formData = new FormData(target);

  sendMessageForm(fields);
  e.preventDefault();

  formData.forEach ( (value, name) => {
    dataObjectConsole[name] = value.trim();
  });
  console.log(dataObjectConsole);
  target.reset();
  localStorage.removeItem(STORAGE_KEY);
};

// ---------------------слухач інпуту форми ---------------------------
const onFormInput = (e) => {
  const target = e.target;

  if(localStorage.getItem(STORAGE_KEY)) {
    const obj = JSON.parse(localStorage.getItem(STORAGE_KEY));
    obj[target.name] = target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
  } else {
    const dataObject = {};
    dataObject[target.name] = target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataObject));
  }
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
window.addEventListener('keyup', onEscClick);



