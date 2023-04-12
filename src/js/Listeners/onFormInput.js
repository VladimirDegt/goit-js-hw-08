import { getItemLocalStorage, setItemLocalStorage } from "../modules/localStorage";

const onFormInput = (event) => {
    const target = event.target;
  
    if(getItemLocalStorage()) {
      const valueLocalStorage = JSON.parse(getItemLocalStorage());
      valueLocalStorage[target.name] = target.value.trim();
      setItemLocalStorage(valueLocalStorage);
    } else {
      const valueLocalStorage = {};
      valueLocalStorage[target.name] = target.value.trim();
      console.log(valueLocalStorage);
      setItemLocalStorage(valueLocalStorage);
    }
  };

  export default onFormInput;
