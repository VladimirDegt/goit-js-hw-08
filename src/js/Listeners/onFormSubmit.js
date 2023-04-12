import sendMessageForm from '../modules/sendMessageForm';
const STORAGE_KEY = "feedback-form-state";

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

  export default onFormSubmit;
  