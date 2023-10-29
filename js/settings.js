function livelyPropertyListener(name, val) {
  switch (name) {
    case "weatherApiKey":
      config.apiData.apiKey = val;
      break;
    case "latLocation":
      config.apiData.lat = val;
      break;
    case "lonLocation":
      config.apiData.lon = val;
      break;
  }
}
