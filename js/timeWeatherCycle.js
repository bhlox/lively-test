const video = document.getElementById("myVideo");
let currentSrc = "cozy.webm";
let newSrc;

function setVideoSource(weather, hour) {
  if (hour >= 6 && hour < 18) {
    newSrc = weather.includes("Clear") ? "morning.webm" : "raining.webm";
  } else {
    newSrc = weather.includes("Clear") ? "cozy.webm" : "rainy night.webm";
  }
  // console.log({ currentSrc, newSrc });
  if (currentSrc !== newSrc) {
    video.src = `assets/${newSrc}`;
    currentSrc = newSrc;
  }
}

async function fetchWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${config.apiData.lat}&lon=${config.apiData.lon}&appid=${config.apiData.apiKey}`
    );
    const data = await response.json();
    const weather = data.weather[0].main;
    const now = new Date();
    const hour = now.getHours();
    setVideoSource(weather, hour);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
