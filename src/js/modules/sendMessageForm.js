import refs from "./refsElements";

const sendMessageForm = (field) => {
  if (!field.email.value.trim() || !field.message.value.trim()) {
    if (document.querySelector('form p')) {
      document.querySelector('form p').remove();
    }
    refs.form.insertAdjacentHTML('afterbegin', '<p style="color: red">Будь ласка заповніть усі поля!</p>');
  } else {
    if (document.querySelector('form p')) {
      document.querySelector('form p').remove();
    }
    refs.form.insertAdjacentHTML('afterbegin', '<p style="color: blue">Повідомлення відправлено</p>');
}};

export default sendMessageForm;
