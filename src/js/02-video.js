// // Імпорт відеоплеєра
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Колбєк-функція для отримання і зберігання поточного часу
const onPlay = function (e) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(Math.floor(e.seconds))
  );
};

// Прослуховуємо подію  timeupdate на об'єкті Player  (timeupdate - подія, яка виникає при зміні поточного часу відео)+ throttle раз в секунду
player.on('timeupdate', throttle(onPlay, 1000));

//Распарсити значення часу
const onPlayAgain = function () {
  try {
    const timeParsed = JSON.parse(
      localStorage.getItem('videoplayer-current-time')
    );
    player.setCurrentTime(timeParsed);
  } catch (error) {
    console.log(' Виникла помилка' + error);
  }
};

// Прослуховуємо подію play на об'єкті Player
player.on('play', onPlayAgain);
