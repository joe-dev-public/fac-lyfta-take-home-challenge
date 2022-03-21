'use strict';

// Using this as a reference/starting point:
// https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/cross_browser_video_player

// Assume that the browser supports the <video> element

const videoEl = document.getElementById('video');
const initialPlayButtonEl = document.getElementById('initial-play-button');
const videoControlsEl = document.getElementById('video-controls-toolbar');
const playPauseEl = document.getElementById('playpause');

// On load, set this flag to true:
let initialPlay = true;

// Browser's default controls are displayed by default, and only hidden if JS is on:
videoEl.controls = false;

// Our custom controls are hidden by default, and only displayed if JS is on:
// videoControlsEl.style.display = 'block';
initialPlayButtonEl.style.display = 'block';

function togglePlayPause() {
    if (videoEl.paused || videoEl.ended) {
        videoEl.play();
        playPauseEl.querySelector('.control-icon').innerText = 'pause';
    } else {
        videoEl.pause();
        playPauseEl.querySelector('.control-icon').innerText = 'play_arrow';
    }
}

// When the "initial play button" is clicked, do a few things:
initialPlayButtonEl.addEventListener('click', () => {
    // Start playing (we can use our general toggle function):
    togglePlayPause();
    // We're going to hide the initial play button, but remove the event listener anyway:
    initialPlayButtonEl.removeEventListener('click', () => {});
    // Hide it, and show the toolbar controls:
    initialPlayButtonEl.style.display = 'none';
    videoControlsEl.style.display = 'block';
    // Set the flag, so other parts of the program know the initial play has already happened:
    initialPlay = false;
});

playPauseEl.addEventListener('click', () => {
    togglePlayPause();
});

videoEl.addEventListener('click', () => {
    // This shouldn't be necessary, because the initial play button covers the whole video area.
    // However, this code works either way, and would be required if the button *didn't*
    // cover the whole video area.
    if (initialPlay === true) {
        console.log('hello');
        const input = new InputEvent('click');
        initialPlayButtonEl.dispatchEvent(input);
    } else if (initialPlay === false) {
        togglePlayPause();
    }
});
