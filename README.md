# Lyfta take-home challenge

I chose to implement the user story ["show different button for initial play"](https://github.com/joe-dev-public/fac-lyfta-take-home-challenge/issues/29).

View the deployed challenge on GitHub Pages here: https://joe-dev-public.github.io/fac-lyfta-take-home-challenge/

## How to use

- [Open the challenge](https://joe-dev-public.github.io/fac-lyfta-take-home-challenge/) on desktop or mobile.
- Click or touch the video area to start playing the video. (There's sound, but it's not too loud!)
- (Note that the "initial play" button now disappears.)
- Click or touch the video area to pause/play the video.
- Click or touch the play/pause icon to do the same.
- (Note that in both cases, the play/pause icon changes appropriately.)

**Note**: if the video playback doesn't work properly (see below), try cloning this repo to your local machine and run it there.

## Known issues/possible fixes?

This currently seems to work fine on mobile. It *was* working fine on desktop, but on the last few tries, there seems to be an intermittent problem with fetching/playing back the video. Some thoughts:

- Is the fetching problem to do with using GitHub Pages to host the video? (The file isn't that big, and surely this would also affect mobile? Maybe it's a caching thing.)
- Is the problem to do with how the browser is trying to buffer the video? (Chrome and Firefox seem to differ slightly here.)
- **Is** the browser doing the buffering, or should my page/app be doing this? (A quick search suggests it's the former?)
- (Real video players include some feedback about buffering, but maybe it's just to let the user know what the browser is doing behind the scenes.)
- The .play method returns a promise. Would this be part of a solution to the fetching/playing problem? (My code doesn't attempt to catch any errors. I wouldn't yet know what do with them!)

## Next steps?

Implement more of the video player! This was a fun challenge and it feels like I've only scratched the surface.

## Notes

I also implemented the following user stories: [#1](https://github.com/joe-dev-public/fac-lyfta-take-home-challenge/issues/1), [#14](https://github.com/joe-dev-public/fac-lyfta-take-home-challenge/issues/14), [#30](https://github.com/joe-dev-public/fac-lyfta-take-home-challenge/issues/30).

The reasons being:

- I felt the main story I focused on needed to be placed in the context of a user journey. Even though the full set of interactions to demonstrate [#29](https://github.com/joe-dev-public/fac-lyfta-take-home-challenge/issues/29) is relatively small, I think it makes a lot more sense when put together with the other user stories.
- Having never worked with ``<video>`` at all before, it was helpful to write a very small amount of relevant code to get used to the challenge and "build up" to the story of focus.
- I took a relatively granular approach to my user stories (arguably some of them could have been merged).
