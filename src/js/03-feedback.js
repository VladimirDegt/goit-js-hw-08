import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name="email"]'),
  textarea: document.querySelector('[name="message"]'),
};

const STORAGE_KEY = "feedback-form-state";
const dataObject = {};

// --------------------- функція виводу повідомлень ---------------------------
const sendMessageForm = (element) => {
  if (!element.email.value.trim() || !element.message.value.trim()) {
    if (document.querySelector('form p')) {
      document.querySelector('form p').remove();
    }
    document.querySelector('form').insertAdjacentHTML('afterbegin', '<p style="color: red">Будь ласка заповніть усі поля!</p>');
  } else {
    if (document.querySelector('form p')) {
      document.querySelector('form p').remove();
    }
    document.querySelector('form').insertAdjacentHTML('afterbegin', '<p style="color: blue">Повідомлення відправлено</p>');
}};

// ---------------------слухач сабміту форми ---------------------------
const onFormSubmit = (event) => {
  const element = event.target.elements;
  const formData = new FormData(event.target);

  sendMessageForm(element);
  event.preventDefault();

  formData.forEach ( (value, name) => {
    dataObject[name] = value.trim();
  });
  console.log(dataObject);
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
};

// ---------------------слухач інпуту форми ---------------------------
const onFormInput = (e) => {
  dataObject[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataObject));
};

// ---------------------слухач ESC форми -----------------------------
const onEscClick = (event) => {
  if (event.code === 'Escape') {
    document.querySelector('.feedback-form [name="email"]').value = "";
    document.querySelector('.feedback-form [name="message"]').value = "";
  }
};

// --------------------- функція заповнення полей форми ----------------
const currentObjStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
if(currentObjStorage) {
  refs.email.value = currentObjStorage.email;
  refs.textarea.value = currentObjStorage.message;
}


refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
window.addEventListener('keyup', onEscClick);



