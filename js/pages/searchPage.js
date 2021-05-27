const tableRenderer = new TableRenderer();

class SearchPage {
  container = document.getElementById("container");

  renderForm() {
    let title = document.createElement("h3");
    title.innerText = "Search";

    container.appendChild(title);

    let form = document.createElement("form");
    form.id = "searchForm";

    let input = this.createSearchInput();

    setTimeout(function () {
      input.focus();
    }, 5000);

    form.appendChild(input);

    let button = document.createElement("button");
    button.type = "submit";
    button.id = "search";
    button.textContent = "Submit";
    form.appendChild(button);

    let message = document.createElement("h3");

    container.appendChild(form);
    container.appendChild(message);
  }

  createSearchInput = () => {
    const input = document.createElement("input");
    input.type = "text";
    input.id = "cityName";
    input.minlength = 1;
    input.maxlength = 20;
    return input;
  };

  renderTable(results) {
    const table = container.getElementsByTagName("table")[0];
    if (table) {
      table.remove();
    }

    if (results.length > 0) {
      let table = tableRenderer.createTable(results);
      container.appendChild(table);
    }
  }

  renderPage(searchResults) {
    this.renderForm();
    this.renderTable(searchResults);
  }
}
