class Fetch {
    async getCurrent(item) {
      const myKey = "c53d07090596c4b22fd92015cd6a8ced";
      let coord = item.city.coord;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=hourly,minutely,alerts,daily&appid=${myKey}&units=metric`
      );

      const data = await response.json();
      return data;
    }
  }