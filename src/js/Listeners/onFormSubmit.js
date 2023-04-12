import inputMessageForm from '../modules/inputMessageForm';
import { removeItemLocalStorage } from "../modules/localStorage";

const onFormSubmit = (event) => {
  event.preventDefault();

  const target = event.target;
  const valueLocalStorage = {};
  const valueFieldsInput = target.elements;
  const formData = new FormData(target);

  if(inputMessageForm(valueFieldsInput)) {
    return;
  }
  
  formData.forEach ( (value, name) => {
    valueLocalStorage[name] = value.trim();
  });
  console.log(valueLocalStorage);
  target.reset();
  removeItemLocalStorage();
};

export default onFormSubmit;
  