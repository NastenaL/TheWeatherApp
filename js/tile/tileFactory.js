class TileFactory {

    create(currentCity) {
        let feelsLike = new Tile("img/thermometer.png", "Feels like", currentCity.feelsLike);
        let humidity = new Tile("img/humidity.png", "Humidity", currentCity.humidity);
        let uvIndex = new Tile("img/sun.png", "UV index", currentCity.uvIndex);
        let visibility = new Tile("img/visibility.png", "Visibility", currentCity.visibility);
        let dewPoint = new Tile("img/dew-point.png", "Dew Point", currentCity.dewPoint);
        let pressure = new Tile("img/pressure.png", "Pressure", currentCity.pressure);
    
        let tiles = [];
        tiles.push(feelsLike, humidity, uvIndex, visibility, dewPoint, pressure);
        return tiles;
    }

    render(items) {
        let tiles = [];

        items.forEach(item => {
            let feelsLike = this.createTileContainer();

            let icon = this.createIcon(item.icon); 
        
            let title = document.createElement('h6');
            title.innerText = item.title;
        
            let value = document.createElement('h4');
            value.innerText = item.value;
    
            feelsLike.appendChild(icon);
            feelsLike.appendChild(title);
            feelsLike.appendChild(value);
            tiles.push(feelsLike);
        });

        return tiles;
    }

    createIcon (src) {
        let img = document.createElement('img');
        img.src = src;
        img.style.align = 'center'; 
        img.style.margin = '5px';
        return img;
    }
 
    createTileContainer() {
        let container = document.createElement('div');
        container.style.height = '150px';
        container.style.width = '150px';
        container.style.background = '#04AA6D';
        container.style.textAlign = 'center';
        container.style.float = 'left';
        container.style.marginRight = '10px';
        container.style.marginBottom = '10px';
        return container;
    }
}