import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

import { refs } from './modules/refsElements';

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
