const refs = {
  button: document.querySelector('button'),
};

const onButtonClick = () => {
  console.log('ok')
}
refs.button.addEventListener('submit', onButtonClick);



