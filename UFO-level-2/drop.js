// d3.select("#selected-dropdown").text("first");
// console.log( first );

d3.select("select")
  .on("change",function(d){
    var selected = d3.select("#d3-dropdown").node().value;
    console.log( selected );
    d3.select("#selected-dropdown").text(selected);
})