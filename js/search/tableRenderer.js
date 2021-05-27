const headers = ["City", "Country", "State", ""];

class TableRenderer {
  createTable = (searchResults) => {
    let table = document.createElement("table");
    let headerRow = this.createHeader();

    table.appendChild(headerRow);
    searchResults.forEach((item) => {
      let row = this.createRow(item);
      table.appendChild(row);
    });
    return table;
  };

  createHeader = () => {
    let headerRow = document.createElement("tr");

    headers.forEach((headerText) => {
      let header = document.createElement("th");
      let textNode = document.createTextNode(headerText);
      header.appendChild(textNode);
      headerRow.appendChild(header);
    });
    return headerRow;
  };

  createRow = (item) => {
    let row = document.createElement("tr");

    row.addEventListener("click", function () {
      CityOverviewPage.render(item.city.id);
    });

    row.className = "table-row";

    ["name", "country", "state"].forEach((prop) => {
      let cell = document.createElement("td");
      let textNode = document.createTextNode(item.city[prop] || "-");

      cell.appendChild(textNode);
      row.appendChild(cell);
    });

    let addToFavorites = this.createFavoriteButton(item);

    row.appendChild(addToFavorites);
    return row;
  };

  createFavoriteButton = (item) => {
    let addToFavorites = document.createElement("button");
    addToFavorites.id = item.city.id;
    addToFavorites.className = "favorite";
    addToFavorites.textContent = "Add to favorites";

    if (item["isFavorite"]) {
      addToFavorites.style.display = "none";
    }
    return addToFavorites;
  };
}
