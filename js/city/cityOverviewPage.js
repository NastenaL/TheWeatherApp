const ft = new OpenWeatherApp();
const tileFactory = new TileFactory();
const container = document.getElementById("container");

class CityOverviewPage {

    static async render(id){
        container.innerHTML = "";
        let city = searchResults.find(item => item.city.id === id);

        let data = await ft.getCurrent(city);
        console.log(data);
        const currentCity = new City(data, id);
        
        console.log(currentCity);

        [createTop, createCenter, createFooter].forEach(fn =>{
            const sectionContainer = fn(currentCity);
            container.appendChild(sectionContainer);
        });
    }
}

let createTop = (currentCity) => {
    let top = document.createElement('div');
    top.id = "top";
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

    top.appendChild(localTime);
    top.appendChild(coordinates);
    top.appendChild(timezone);
    top.appendChild(addToFavorites);
    return top;
}

let createCenter = (currentCity) => {

    let center = document.createElement('div');
    center.id = "center";

    let weatherIcon = document.createElement('img');
    weatherIcon.style.width = '30px';
    weatherIcon.style.height = '30px';
    weatherIcon.src = `http://openweathermap.org/img/wn/${currentCity.iconCode}@2x.png`;

    let title = document.createElement('h3');
    title.innerText = `Description
    Title: ${currentCity.title},`;

    let subTitle = document.createElement('h3');
    subTitle.innerText += `Subtitle: Low 10, Wind ${currentCity.windDegree} at ${currentCity.windSpeed} kph`;

    title.appendChild(weatherIcon);
    center.appendChild(title);
    center.appendChild(subTitle);

    return center;
}


let createFooter = (currentCity) => {
 
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