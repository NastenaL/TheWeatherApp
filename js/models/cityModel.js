class CityModel {
  longitude;
  latitude;
  title;
  subtitle;
  feelsLike;
  humidity;
  uvIndex;
  _visibility;
  pressure;
  dewPoint;
  id;
  iconCode;
  timezone_offset;
  windDeg;
  windSpeed;

  constructor(data, id) {
    this.id = id;
    this.timezone_offset = data.timezone_offset;
    this.longitude = data.lon;
    this.latitude = data.lat;
    this.title =
      data.current.weather[0].main + ", " + data.current.weather[0].description;
    this.subtitle = data.current.wind_deg;
    this.feelsLike = `${data.current.feels_like} ℃`;
    this.humidity = `${data.current.humidity} %`;
    this.uvIndex = data.current.uvi;
    this._visibility = data.current.visibility;
    this.pressure = `${data.current.pressure} mb`;
    this.dewPoint = `${data.current.dew_point} ℃`;
    this.iconCode = data.current.weather[0].icon;
    this.windDeg = data.current.wind_deg;
    this.windSpeed = data.current.wind_speed;
  }

  get localTime() {
    let timestamp = Date.now();
    const abs = Math.abs(this.timezone_offset);

    timestamp = this.timezone_offset > 0 ? timestamp + abs : timestamp - abs;
    return timestampToDateFormat(timestamp);
  }

  get timezone() {
    let gtm = this.timezone_offset / 3600;
    if (gtm > 0) gtm = "+" + gtm;
    return `GTM ${gtm}`;
  }

  get windDegree() {
    return WindDirection.getDirection(this.windDeg);
  }

  get visibility() {
    return `${this._visibility / 1000} km`;
  }
}

function timestampToDateFormat(timestamp) {
  let date = new Date(timestamp * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();

  return hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
}
