const STORAGE_KEY = "feedback-form-state";

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

  export default onFormInput;
