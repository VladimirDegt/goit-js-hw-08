export const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('[name="email"]'),
    textarea: document.querySelector('[name="message"]'),
    iframe: document.querySelector('iframe'),
  };

export const foundElementP = () => {
  const message = document.querySelector('form p');
  return message;
}