import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const refs = {
  iframe: document.querySelector('iframe'),
  btn: document.querySelector('.btn-clearlocalStorage'),
};

const options = {
  autoplay: true,
};

const player = new Player(refs.iframe, options);

const startSecondsVideo = localStorage.getItem('videoplayer-current-time');
if (startSecondsVideo) {
  player.setCurrentTime(startSecondsVideo);
}

player.on('timeupdate', throttle((data) => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000));

const onBtnClick = () => {
  localStorage.removeItem('videoplayer-current-time');
};
refs.btn.addEventListener('click', onBtnClick);