import { getItemLocalStorage } from "../modules/localStorage";

const fillFieldsForm = (refs) => {
  const valueLocalStorage = JSON.parse(getItemLocalStorage());
if(valueLocalStorage?.email) {
  refs.email.value = valueLocalStorage.email;
}
if(valueLocalStorage?.message) {
  refs.textarea.value = valueLocalStorage.message;
}
};

export default fillFieldsForm;
