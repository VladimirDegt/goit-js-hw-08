import { refs } from "../modules/refsElements";
import { getItemLocalStorage, removeItemLocalStorage } from "../modules/localStorage";

const onEscClick = (event) => {
  if (event.code === 'Escape') {
    refs.email.value = "";
    refs.textarea.value = "";
    if(getItemLocalStorage()){
      removeItemLocalStorage();
    }
  }
};

export default onEscClick;
