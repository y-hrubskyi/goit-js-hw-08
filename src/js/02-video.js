// libraries
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEOPLAYER_DATA_KEY = 'videoplayer-current-time';
const iframeRef = document.querySelector('#vimeo-player');
const player = new Player(iframeRef);

const seconds = localStorage.getItem(VIDEOPLAYER_DATA_KEY) ?? 0;
player.setCurrentTime(seconds);
player.on('timeupdate', throttle(onPlayerTimeUpdate, 1000));

function onPlayerTimeUpdate(data) {
  localStorage.setItem(VIDEOPLAYER_DATA_KEY, data.seconds);
}
