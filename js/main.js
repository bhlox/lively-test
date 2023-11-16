const config = {
  apiData: {
    lon: "",
    lat: "",
    apiKey: "",
  },
};

fetchWeather();
setInterval(fetchWeather, 60000);
