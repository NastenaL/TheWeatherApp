let searchResults = [];
const searchPage = new SearchPage();
const anchor = new Anchor();
const MAX_ITEM_COUNT = 15;
let cities = [];

searchPage.renderPage(searchResults);
anchor.addAnchor("search");

function loadCities(list) {
  cities = list;
}

const searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", (event) => {
  debounce()
    .init()
    .then(() => {
      onSearchByName();
    });
});

const searchAnchor = document.getElementById("searchAnchor");
const cityName = document.getElementById("cityName");
searchAnchor.addEventListener("click", () => {
  document.getElementById("container").innerHTML = "";
  searchPage.renderPage(searchResults);
});

function searchCitiesByName(letter) {
  var results = [];
  if (letter.length >= 1) {
    cities.forEach((city) => {
      if (city.name.indexOf(letter) == 0) results.push(city);
    });
  }
  return results;
}

function filterCities(searchedCities) {
  let filtered = searchedCities.sort((item1, item2) => {
    const {
      city: { name: cityName1 },
    } = item1;
    const {
      city: { name: cityName2 },
    } = item2;
    return cityName1 > cityName2 ? 1 : cityName1 == cityName2 ? 0 : -1;
  });
  return filtered;
}

let onSearchByName = () => {
  let searchedCities = searchCitiesByName(cityName.value);

  setResult(searchedCities);
  let partialSearchResults = filterCities(searchResults).slice(
    0,
    MAX_ITEM_COUNT
  );
  console.log(partialSearchResults);
  searchPage.renderTable(partialSearchResults);
};

let setResult = (data) => {
  searchResults = [];
  data.forEach((item) => {
    let searchResult = new SearchResultModel();
    searchResult.city = item;
    searchResults.push(searchResult);
  });
};
