import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

const onPlay = data => {
  localStorage.setItem(LOCAL_STORAGE_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);

if (savedData) {
  player.setCurrentTime(localStorage.getItem(LOCAL_STORAGE_KEY));
}