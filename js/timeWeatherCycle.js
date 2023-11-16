const loadingVideo = document.getElementById("loading");
const video = document.getElementById("mainVideo");
let currentSrc = "cozy.webm";
let newSrc;

function setVideoSource(weather, hour, initial) {
  if (initial) {
    loadingVideo.classList.add("fade-out");
  }
  if (hour >= 6 && hour < 18) {
    newSrc =
      weather.includes("Clear") || weather.includes("Cloud")
        ? "morning.webm"
        : "raining.webm";
  } else {
    newSrc =
      weather.includes("Clear") || weather.includes("Cloud")
        ? "cozy.webm"
        : "rainy night.webm";
  }
  // console.log({ currentSrc, newSrc });
  if (currentSrc !== newSrc) {
    video.src = `assets/${newSrc}`;
    video.classList.add("fade-in");
    currentSrc = newSrc;
  }
}

async function fetchWeather(initial) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${config.apiData.lat}&lon=${config.apiData.lon}&appid=${config.apiData.apiKey}`
    );
    const data = await response.json();
    const weather = data.weather[0].main;
    const now = new Date();
    const hour = now.getHours();
    // console.log({ weather });
    setVideoSource(weather, hour, initial);
  } catch (error) {
    console.error(`Error fetching weather data. Error says: ${error}`);
  }
}
