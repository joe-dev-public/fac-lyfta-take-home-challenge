'use strict';

// Using this as a reference/starting point:
// https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/cross_browser_video_player

// Assume that the browser supports the <video> element

const videoEl = document.getElementById('video');
const videoControlsEl = document.getElementById('video-controls');
const playPauseEl = document.getElementById('playpause');

// Browser's default controls are displayed by default, and only hidden if JS is on:
videoEl.controls = false;

// Our custom controls are hidden by default, and only displayed if JS is on:
videoControlsEl.style.display = 'block';

playPauseEl.addEventListener('click', (event) => {
    if (videoEl.paused || videoEl.ended) {
        videoEl.play();
    } else {
        videoEl.pause();
    }
});
