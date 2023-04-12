import { refs, foundElementP } from "./refsElements";

const inputMessageForm = (valueFieldsInput) => {
  if (!valueFieldsInput.email.value.trim() || !valueFieldsInput.message.value.trim()) {
    if (foundElementP()) {
      foundElementP().remove();
    }
    refs.form.insertAdjacentHTML('afterbegin', '<p style="color: red">Будь ласка заповніть усі поля!</p>');
    
    return true;

  } else {
    if (foundElementP()) {
      foundElementP().remove();
    }
    refs.form.insertAdjacentHTML('afterbegin', '<p style="color: blue">Повідомлення відправлено</p>');
}};

export default inputMessageForm;
