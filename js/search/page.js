class RenderSearchPage {
    container = document.getElementById("container");

    constructor() {
    }

    renderForm(){
        let title = document.createElement('h3');
        title.innerText = "Search";
        
        container.appendChild(title);

        let form = document.createElement('form');
        form.id = "searchForm"; 

        let input = createSearchInput();
        form.appendChild(input);

        let button = document.createElement('button');
        button.type = "submit";
        button.id = "search";
        button.textContent = "Submit";
        form.appendChild(button);

        container.appendChild(form);
    }
    
    renderTable(results){
        if (container.getElementsByTagName('table')[0]) {
            container.getElementsByTagName('table')[0].remove();
        }

        if(results.length > 0){
            let table = createTable(results);
            container.appendChild(table);
        }

    }

    renderCityPage(cityId){
        alert(cityId);
    }

}