// // Імпорт відеоплеєра
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Колбєк-функція для отримання і зберігання поточного часу                                  
const onPlay = function() {
    try {
        player.getCurrentTime().then(function(seconds) {
            const currentTime = Math.floor(seconds);
            localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime));
          });
    } catch (error) {
    console.error("Произошла ошибка: " + error);
  };  
  
};
                                           
// Прослуховуємо подію  timeupdate на об'єкті Player  (timeupdate - подія, яка виникає при зміні поточного часу відео)
player.on('timeupdate', onPlay);


//Рвспарсити значення часу 
const onPlayAgain = function () {
    try{
        const savedTime = localStorage.getItem("videoplayer-current-time");
        const timeParsed = JSON.parse(savedTime);
        player.setCurrentTime(timeParsed).then(function() {

        })} catch(error) {
        switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;                                     

    }
};
}            
player.on('play', onPlayAgain);                                              
