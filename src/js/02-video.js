import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

const refs = {
  iframe: document.querySelector('iframe'),
  btn: document.querySelector('.btn-clearlocalStorage'),
}

const player = new Player(refs.iframe);

const startSecondsVideo = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(startSecondsVideo).then(function(seconds) {
}).catch(function(error) {
  switch (error.name) {
      case 'RangeError':
          break;

      default:
          break;
  }
});

const onPlay = () => {
  player.on('timeupdate', (data) => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
    });
};

const throttled = throttle(onPlay, 1000);
player.on('play', throttled);


const onBtnClick = () => {
  localStorage.removeItem('videoplayer-current-time');
};
refs.btn.addEventListener('click', onBtnClick);