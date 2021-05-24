let createFooterDiv = (currentCity) => {
 
    let footer = document.createElement('div');
    footer.id = "footer";
    footer.style.display = 'table';
    footer.style.margin = '5px';

    let feelsLike = createTile("img/thermometer.png", "Feels like", currentCity.feelsLike);
    footer.appendChild(feelsLike);

    let humidity = createTile("img/humidity.png", "Humidity", currentCity.humidity);
    footer.appendChild(humidity);

    let uvIndex = createTile("img/sun.png", "UV index", currentCity.uvIndex);
    footer.appendChild(uvIndex);

    let visibility = createTile("img/visibility.png", "Visibility", currentCity.visibility);
    footer.appendChild(visibility);

    let dewPoint = createTile("img/dew-point.png", "Dew Point", currentCity.dewPoint);
    footer.appendChild(dewPoint);

    let pressure = createTile("img/pressure.png", "Dew Point", currentCity.pressure);
    footer.appendChild(pressure);

    let moreButton = document.createElement('button');
    moreButton.id = currentCity.id;
    moreButton.textContent = "More";
    footer.appendChild(moreButton);

    return footer;
}

let createTile = (image, title, value) => {
    let feelsLike = createTileContainer();

    let img = createIcon(image); 
    feelsLike.appendChild(img);

    let textH6 = document.createElement('h6');
    textH6.innerText = title;
    feelsLike.appendChild(textH6);

    let textH4 = document.createElement('h4');
    textH4.innerText = value;
    feelsLike.appendChild(textH4);
    return feelsLike;
}

let createIcon = (src) => {
    let img = document.createElement('img');
    img.src = src;
    img.style.align = 'center'; 
    img.style.margin = '5px';
    return img;
}

let createTileContainer = () => {
    let tile = document.createElement('div');
    tile.style.height = '150px';
    tile.style.width = '150px';
    tile.style.background = '#04AA6D';
    tile.style.textAlign = 'center';
    tile.style.float = 'left';
    tile.style.marginRight = '10px';
    tile.style.marginBottom = '10px';
    return tile;
}