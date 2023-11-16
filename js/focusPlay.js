function livelyWallpaperPlaybackChanged(data) {
  var obj = JSON.parse(data);
  // console.log(`video isPaused: ${obj.IsPaused}`);
  if (obj.IsPaused) {
    // video.pause();
    video.playbackRate = 0.1;
  } else {
    // video.play();
    // if (video.paused) {
    //   console.log("video is still paused.");
    // }
    let increaseSpeed = setInterval(function () {
      if (video.playbackRate < 1) {
        video.playbackRate += 0.1;
      } else {
        clearInterval(increaseSpeed);
      }
    }, 100);
  }
}

// video.onpause = () => {
//   console.log("video is currently paused");
// };
// video.onplay = () => {
//   console.log("video started to play");
// };
// video.onplaying = () => {
//   console.log("video is now playing");
// };
