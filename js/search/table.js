let headers = ['City', 'Country','State', ''];

let createSearchInput = () => {
    let input = document.createElement('input');
    input.type = "text";
    input.id = "cityName";
    input.minlength = 1;
    input.maxlength = 20;
    return input;
}

let createTable = (searchResults) => {
    let table = document.createElement('table');
    let headerRow = createHeader();

    table.appendChild(headerRow);

    searchResults.forEach(item => {
        let row = createRow(item);
        table.appendChild(row);
    });
    return table;
}

let createHeader = () => {
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    return headerRow;
}

let createRow = (item) => {
    let row = document.createElement('tr');
    
    row.addEventListener('click', function() {
        CityOverviewPage.render(item.city.id);
    });

    row.className = 'table-row';

    ['name', 'country', 'state'].forEach(prop => {
        let cell = document.createElement('td');
        let textNode = document.createTextNode(item.city[prop] || '-');
        
        cell.appendChild(textNode);
        row.appendChild(cell);
    });

    let addToFavorites = createFavoriteButton(item);
    
    row.appendChild(addToFavorites);
    return row;
}

let createFavoriteButton = (item) => {
    let addToFavorites = document.createElement('button');
    addToFavorites.id = item.city.id;
    addToFavorites.className = "favorite";
    addToFavorites.textContent = "Add to favorites";
    
    if(item['isFavorite'])
    {
        addToFavorites.style.display = 'none';
    }
    return addToFavorites; 
}
