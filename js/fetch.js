class Fetch {
    async getCurrent(item) {
      const myKey = "c53d07090596c4b22fd92015cd6a8ced";
      
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${item.city.coord.lat}&lon=${item.city.coord.lon}&exclude=hourly,minutely,alerts,daily&appid=${myKey}&units=metric`
      );
      const data = await response.json();
      return data;
    }
  }