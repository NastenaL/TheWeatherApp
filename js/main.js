let searchResults = [];
const searchRenderer = new SearchPage();
const MAX_ITEM_COUNT = 15;
let cities = [];

searchRenderer.renderPage(searchResults);

function loadCities(list) {
  cities = list;
}

let searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", (event) => {
  debounce()
    .init()
    .then(() => {
      onSearchByName();
    });
});

let onSearchByName = () => {
  searchResults = [];
  if (cityName.value.length >= 1) {
    let searchedCities = cities.filter((city) =>
      city.name.includes(cityName.value)
    );
    console.log(searchedCities);
    setResult(searchedCities);
    let partialSearchResults = searchResults
      .sort((item1, item2) => {
        const {
          city: { name: cityName1 },
        } = item1;
        const {
          city: { name: cityName2 },
        } = item2;
        return cityName1 > cityName2 ? 1 : cityName1 == cityName2 ? 0 : -1;
      })
      .slice(0, MAX_ITEM_COUNT);

    searchRenderer.renderTable(partialSearchResults);
  }
};

let setResult = (data) => {
  data.forEach((item) => {
    let searchResult = new SearchResult();
    searchResult.city = item;
    searchResult.isFavorite = false;
    searchResults.push(searchResult);
  });
};
