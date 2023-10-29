document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    video.play();
  } else {
    video.pause();
  }
});
