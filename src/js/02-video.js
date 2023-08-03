// Import necessary libraries
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Select the Vimeo video's iframe
const iframe = document.querySelector('iframe');

// Create a new Vimeo Player instance with the selected iframe
const player = new Player(iframe);

// Define the key to use for storing the current time in localStorage
const STORAGE_KEY = 'videoplayer-current-time';

// Listen for 'timeupdate' events on the player and throttle the function call to every 1000ms (1 second)
player.on('timeupdate', throttle(onPlay, 1000));

// Set the current time of the player to the saved time (if available) on page load
setCurrentTime();

// Function to handle the 'timeupdate' event of the player
function onPlay(time) {
  // Save the current time (in seconds) to localStorage using the specified key
  localStorage.setItem(STORAGE_KEY, time.seconds.toString());
}

// Function to set the player's current time based on the value saved in localStorage
function setCurrentTime() {
  // Retrieve the saved time from localStorage using the specified key
  const savedTime = localStorage.getItem(STORAGE_KEY);

  // Check if there is a saved time in localStorage
  if (savedTime) {
    // If a saved time is available, set the player's current time to the saved time
    // The 'parseFloat' function is used to convert the string representation of seconds back to a floating-point number
    player.setCurrentTime(parseFloat(savedTime));
  }
}
