import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

const refs = {
  iframe: document.querySelector('iframe'),
  btn: document.querySelector('.btn-clearlocalStorage'),
}

const player = new Player(refs.iframe);

const startSecondsVideo = localStorage.getItem('videoplayer-current-time');
if (startSecondsVideo) {
  player.setCurrentTime(startSecondsVideo);
};

const onPlay = () => {
  player.on('timeupdate', throttle((data) => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
    }, 1000));
};

player.on('play', onPlay);

const onBtnClick = () => {
  localStorage.removeItem('videoplayer-current-time');
};
refs.btn.addEventListener('click', onBtnClick);