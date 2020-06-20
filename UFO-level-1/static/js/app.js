
  
  function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  function generateTable(table, data) {
    d3.select(table).selectAll("tr").remove();
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
  let table = document.querySelector("tbody");
  let data = Object.keys(datas[0]);
  // generateTableHead(table, data);
  generateTable(table, datas);

  // Create a custom filtering function

  var searchBtn = d3.select("#filter-btn");
  console.log(searchBtn)
  var searchYear = d3.select("#datetime").property('value');

  console.log(searchYear);

  function selectYear(year) {
  return datas.datetime === searchYear;
}

  // if (searchYear !== "") {

    function update() {
      // filter() uses the custom function as its argument
      console.log("update call")
      var searchYear = d3.select("#datetime").property('value');

    var filteredData = datas.filter(d => d.datetime === searchYear);
    // Refresh table body
      // let table = document.querySelector("table");
      // let data = Object.keys(datas[0]);
      // generateTableHead(table, data);
      generateTable(table, filteredData);
      }

searchBtn.on("click", update);


