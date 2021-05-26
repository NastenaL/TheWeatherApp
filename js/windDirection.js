class WindDirection{
    static getDirection(degrees)
    {
        degrees *= 10;
        let cardinals = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];
        return cardinals[Math.floor((degrees % 3600) / 225)];
    }
}