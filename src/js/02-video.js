//02 video
// Initializing throttle library
import throttle from 'lodash.throttle';

// Alocating iframe with vimeo player in variable
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// Setting current video playtime from local storage
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

// initalizing listener for video playtime saving
player.on(
  'timeupdate',
  throttle(saveCurrentPlayTimeThrottled => {
    player
      .getCurrentTime()
      .then(function (seconds) {
        localStorage.setItem('videoplayer-current-time', seconds); //Saving current playback time in local storage
      })
      .catch(function (error) {
// an error occurred
      });
  }, 1000),
);