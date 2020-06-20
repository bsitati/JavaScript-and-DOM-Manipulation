
  
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
  var searchField = d3.select("#datetime").property('value');

  console.log(searchField);

  function selectYear(year) {
  return datas.datetime === searchField;
}

  // if (searchYear !== "") {

    function update() {
      // filter() uses the custom function as its argument
      console.log("update call")
      var searchField = d3.select("#datetime").property('value');

    // Dropdown values
    d3.select("select").on("change",function(d){
      var selected = d3.select("#d3-dropdown").node().value;
      console.log(selected);
      console.log(searchField);

      d3.select("#selected-dropdown").text(selected);
      d3.select("#selected-dropdown1").text(searchField);

});
var selected = d3.select("#d3-dropdown").node().value;

    console.log(`selected = ${selected}`)
   console.log(`searchField = "${searchField}"`)
    
  
  


 if (selected === 'city'){
   var filteredData = datas.filter(d => d.city === searchField);
    // var filteredData = datas.filter(d => d.selected === searchField);
   }
else if (selected === 'datetime') {
  var filteredData = datas.filter(d => d.datetime === searchField);
  
} else if(selected === 'shape') {
  var filteredData = datas.filter(d => d.shape === searchField);
  
}else if(selected === 'country'){
  var filteredData = datas.filter(d => d.country === searchField);

}else if(selected === 'state'){
  var filteredData = datas.filter(d => d.state === searchField);

}else if (filteredData.length === 0){
  var result = "No Search Result";
  d3.select("#selected-tbody").text(searchField);

}
     
  

    // var filteredData = datas.filter(d => d.selected === 'light');

    console.log(`filteredData = ${filteredData}`)

    // Refresh table body
      // let table = document.querySelector("table");
      // let data = Object.keys(datas[0]);
      // generateTableHead(table, data);
      generateTable(table, filteredData);
      }

searchBtn.on("click", update);


