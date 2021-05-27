const myKey = "c53d07090596c4b22fd92015cd6a8ced";

class OpenWeatherApp {
  async getCurrent(item) {
    let coord = item.city.coord;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=hourly,minutely&appid=${myKey}&units=metric`
    );

    return await response.json();
  }
}
