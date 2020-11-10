// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

tableData.forEach(element => {
     var row = tbody.append("tr");

    
     Object.values(element).forEach(value => {
        row.append("td").text(value);

    });
});

var button = d3.select("#filter-btn");



var inpfield = d3.select("#datetime");
var inpvalue = inpfield.property("value");
      
