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

function filter(letter) {
  var results = [];
  if (letter.length >= 1) {
    cities.forEach((city) => {
      if (city.name.indexOf(letter) == 0) results.push(city);
    });
  }
  return results;
}

let onSearchByName = () => {
  const searchedCities = filter(cityName.value);

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
};

let setResult = (data) => {
  data.forEach((item) => {
    let searchResult = new SearchResultModel();
    searchResult.city = item;
    searchResults.push(searchResult);
  });
};
