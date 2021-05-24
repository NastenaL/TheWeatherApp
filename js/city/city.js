class City{
localTime;
longitude; 
latitude;
timezone;
title;
subtitle;
feelsLike;
humidity;
uvIndex;
visibility;
pressure;
dewPoint;
id;
isFavorite;
iconCode;

    constructor() {
    }

    setItem(data){
        this.localTime = convertedTimeZone(data.timezone_offset);
        this.longitude = data.lon;
        this.latitude = data.lat;
        this.timezone = `GTM ${data.timezone_offset / 3600}`;
        this.title = data.current.weather[0].main + ", " + data.current.weather[0].description;
        this.subtitle = data.current.wind_deg;
        this.feelsLike = data.current.feels_like;
        this.humidity = data.current.humidity;
        this.uvIndex = data.current.uvi;
        this.visibility = data.current.visibility;
        this.pressure = data.current.pressure; 
        this.dewPoint = data.current.dew_point;
        this.iconCode = data.current.weather[0].icon;
        return this;
    }
}

let convertedTimeZone = (timezone_offset) => {
    let timestamp = Date.now();

    if (timezone_offset > 0) {
        timestamp += Math.abs(timezone_offset);
    } else {
        timestamp -= Math.abs(timezone_offset);
    }
    return timestampToDateFormat(timestamp);
}

function timestampToDateFormat(timestamp){
    let date = new Date(timestamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();

    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}