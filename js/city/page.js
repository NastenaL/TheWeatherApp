const ft = new Fetch();
const container = document.getElementById("container");

class RenderCityPage {

    constructor(){
    }

    static async render(id){
        container.innerHTML = "";
        let city = searchResults.find(item => item.city.id === id);
        const currentCity = new City();

        let data = await ft.getCurrent(city);

        currentCity.setItem(data);
        currentCity.id = id;
        currentCity.isFavorite = city.isFavorite;
        
        let topDiv = createTop(currentCity);
        container.appendChild(topDiv);

        let centerDiv = createCenter(currentCity);
        container.appendChild(centerDiv);

        let footer = createFooterDiv(currentCity);
        container.appendChild(footer);
    }
}


let createTop = (currentCity) => {
    let topDiv = document.createElement('div');
    topDiv.id = "top";
    let localTime = document.createElement('h3');
    localTime.innerText = currentCity.localTime;
    topDiv.appendChild(localTime);

    let coordinates = document.createElement('h4');
    coordinates.innerText = `Coordinates:
    lon: ${currentCity.longitude}, lat: ${currentCity.latitude};`;
    topDiv.appendChild(coordinates);

    let timezone = document.createElement('h4');
    timezone.innerText =`Timezone Offset: ${currentCity.timezone}`;
    topDiv.appendChild(timezone);

    let addToFavorites = document.createElement('button');
    addToFavorites.id = currentCity.id;
    addToFavorites.className = "favorite";
    addToFavorites.textContent = "Add to favorites";
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
