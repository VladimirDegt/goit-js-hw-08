const fillFieldsForm = (STORAGE_KEY, refs) => {
  const currentObjStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
if(currentObjStorage?.email) {
  refs.email.value = currentObjStorage.email;
}
if(currentObjStorage?.message) {
  refs.textarea.value = currentObjStorage.message;
}
};

export default fillFieldsForm;
