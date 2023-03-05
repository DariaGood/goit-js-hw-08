// // Імпорт відеоплеєра
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Колбєк-функція для зберігання поточного часу
const onPlay = function (e) {
  localStorage.setItem(
    'videoplayer-current-time', e.seconds)
};

// Прослуховуємо подію  timeupdate на об'єкті Player  (timeupdate - подія, яка виникає при зміні поточного часу відео)+ throttle раз в секунду
player.on('timeupdate', throttle(onPlay, 1000));

// Дістаємо зі сховища час 
player.setCurrentTime(localStorage.getItem(
  'videoplayer-current-time'));
