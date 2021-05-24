let searchResults = [];
const searchRenderer = new RenderSearchPage();
searchRenderer.renderForm();
searchRenderer.renderTable(searchResults);

let cities = [];

function loadCities(list) {
    cities = list;
}

const showNumberItems = 15;
let cityName = document.getElementById("cityName");

let debounce = (callback, wait) => {
    let timeout;
    return (...args) => {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => callback.apply(context, args), wait);
    };
}

cityName.addEventListener('input', debounce(() => {
    onSearchByName();
}, 500)
);

let onSearchByName = () => {
   searchResults = [];
   if(cityName.value.length >= 1){
    let searchedCities = cities.filter(city => city.name.includes(cityName.value));
    setResult(searchedCities);
    let partialSearchResults = searchResults
    .sort((item1, item2) => item1.city.name > item2.city.name ? 1 : (item1.city.name == item2.city.name ? 0 : -1))
    .filter((item, idx) => idx <= showNumberItems);
 
     partialSearchResults.forEach(item => item.city.name = item.city.name.toLowerCase());
 
     searchRenderer.renderTable(partialSearchResults);
 
     let searchForm = document.getElementById('searchForm');
     searchForm.addEventListener('submit', function() {
         onSearchByName();
     });
   }
}

let setResult = (data) => {
    data.forEach((item) => {
        let searchResult = new SearchResult();
        searchResult.city = item;
        searchResult.isFavorite = false;
        searchResults.push(searchResult);
    });
}