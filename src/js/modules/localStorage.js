const STORAGE_KEY = "feedback-form-state";

const getItemLocalStorage = () => localStorage.getItem(STORAGE_KEY);

const setItemLocalStorage = (dataObject) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataObject));
};

const removeItemLocalStorage = () => localStorage.removeItem(STORAGE_KEY);

