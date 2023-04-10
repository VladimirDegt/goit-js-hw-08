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

export default sendMessageForm;
