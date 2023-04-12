import refs from "../modules/refsElements";

const STORAGE_KEY = "feedback-form-state";

const onEscClick = (event) => {
  if (event.code === 'Escape') {
    refs.email.value = "";
    refs.textarea.value = "";
    if(localStorage.getItem(STORAGE_KEY)){
      localStorage.removeItem(STORAGE_KEY);
    }
  }
};

export default onEscClick;
