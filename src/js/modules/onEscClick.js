const onEscClick = (event) => {
  if (event.code === 'Escape') {
    document.querySelector('.feedback-form [name="email"]').value = "";
    document.querySelector('.feedback-form [name="message"]').value = "";
  }
};

export default onEscClick;
