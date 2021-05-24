const ft = new Fetch();
const currentCity = new City();
const container = document.getElementById("container");

class RenderCityPage {

    constructor(){
    }

    static render(id){
        container.innerHTML = "";
        let city = searchResults.find(item => item.city.id === id);
        
        ft.getCurrent(city).then((data) => {
            console.log(data);
            currentCity.setItem(data);
            currentCity.id = id;
            currentCity.isFavorite = city.isFavorite;
        }); 
        console.log(currentCity);
        let topDiv = createTop(currentCity);
        container.appendChild(topDiv);

        let centerDiv = createCenter(currentCity);
        container.appendChild(centerDiv);

        let footer = createFooter(currentCity);
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

let createFooter = (currentCity) => {
 
    let footer = document.createElement('div');
    footer.id = "footer";

    let feelsLike = document.createElement('div');
    feelsLike.id = "feelsLike";
    feelsLike.style.height = '150px';
    feelsLike.style.width = '150px';
    feelsLike.style.background = '#04AA6D';
    feelsLike.style.textAlign = 'center';

    let img = document.createElement('img');
    img.src = "img/thermometer.png";
    img.style.align = 'center'; 
    feelsLike.appendChild(img);
    let title = document.createElement('h6');
    title.innerText = "Feels like";
    feelsLike.appendChild(title);
    let temperature = document.createElement('h4');
    temperature.innerText = currentCity.feelsLike;

    footer.appendChild(feelsLike);
    return footer;
}