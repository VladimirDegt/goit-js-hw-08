import inputMessageForm from '../modules/inputMessageForm';
import { removeItemLocalStorage } from "../modules/localStorage";

const onFormSubmit = (event) => {
    const target = event.target;
    const valueLocalStorage = {};
    const valueFieldsInput = target.elements;
    const formData = new FormData(target);
  
    inputMessageForm(valueFieldsInput);
    event.preventDefault();
  
    formData.forEach ( (value, name) => {
      valueLocalStorage[name] = value.trim();
    });
    console.log(valueLocalStorage);
    target.reset();
    removeItemLocalStorage();
  };

  export default onFormSubmit;
  