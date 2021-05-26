class WindDirection{
    static getDirection(degrees)
    {
        degrees *= 10;

        let caridnals = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];
        return caridnals[(degrees % 3600) / 225];
    }
}