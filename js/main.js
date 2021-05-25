let searchResults = [];
const searchRenderer = new SearchPage();
const MAX_ITEM_COUNT = 15;

searchRenderer.renderForm();
searchRenderer.renderTable(searchResults);

let cities = [];

function loadCities(list) {
    cities = list;
}

let cityName = document.getElementById("cityName");

cityName.addEventListener('input', (event) => {
    debounce().init().then(() => {
        onSearchByName()
    })
});

let onSearchByName = () => {
   searchResults = [];
   if(cityName.value.length >= 1){
        let searchedCities = cities.filter(city => city.name.includes(cityName.value));
        setResult(searchedCities);
        let partialSearchResults = searchResults
            .sort((item1, item2) => item1.city.name > item2.city.name ? 1 : (item1.city.name == item2.city.name ? 0 : -1))
            .slice(0, MAX_ITEM_COUNT);

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