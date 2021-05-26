const ft = new OpenWeatherApp();
const tileFactory = new TileFactory();
const container = document.getElementById("container");

class CityOverviewPage {

    static async render(id){
        container.innerHTML = "";
        let city = searchResults.find(item => item.city.id === id);

        let data = await ft.getCurrent(city);
        const currentCity = new City(data, id);
        
        [createTop, createCenter, createFooterDiv].forEach(fn =>{
            const sectionContainer = fn(currentCity);
            container.appendChild(sectionContainer);
        });
    }
}

let createTop = (currentCity) => {
    let topDiv = document.createElement('div');
    topDiv.id = "top";
    let localTime = document.createElement('p');
    localTime.innerText = currentCity.localTime;

    let coordinates = document.createElement('h4');
    coordinates.innerText = `Coordinates:
    lon: ${currentCity.longitude}, lat: ${currentCity.latitude};`;
    
    let timezone = document.createElement('h4');
    timezone.innerText =`Timezone Offset: ${currentCity.timezone}`;

    let addToFavorites = document.createElement('button');
    addToFavorites.id = currentCity.id;
    addToFavorites.className = "favorite";
    addToFavorites.textContent = "Add to favorites";

    topDiv.appendChild(localTime);
    topDiv.appendChild(coordinates);
    topDiv.appendChild(timezone);
    topDiv.appendChild(addToFavorites);
    return topDiv;
}

let createCenter = (currentCity) => {

    let centerDiv = document.createElement('div');
    centerDiv.id = "center";

    let weatherIcon = document.createElement('img');
    weatherIcon.src = `http://openweathermap.org/img/wn/${currentCity.iconCode}@2x.png`;
    let description = document.createElement('h3');
    description.innerText = `Description
    Title: ${currentCity.title}
    Subtitle: `;
    centerDiv.appendChild(description);
    centerDiv.appendChild(weatherIcon);
    return centerDiv;
}


let createFooterDiv = (currentCity) => {
 
    let footer = document.createElement('div');
    footer.id = "footer";
    footer.style.display = 'table';
    footer.style.margin = '5px';

    let tiles = tileFactory.create(currentCity);
    let tilesUI = tileFactory.render(tiles);

    tilesUI.forEach(tile => {
        footer.appendChild(tile);
    });

    let moreButton = document.createElement('button');
    moreButton.id = currentCity.id;
    moreButton.textContent = "More";
    footer.appendChild(moreButton);

    return footer;
}