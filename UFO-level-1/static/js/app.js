// from data.js
var tableData = data;

// YOUR CODE HERE!
// Creating Variable for tbody and selecting it


var tbody = d3.select("tbody");

tableData.forEach(element => {
     var row = tbody.append("tr");

    
     Object.values(element).forEach(value => {
        row.append("td").text(value);

    });
});

var button = d3.select("#filter-btn");


button.on("click",function() {

var inpfield = d3.select("#datetime");
var inpvalue = inpfield.property("value");



var filteredData = tableData.filter(data => data.datetime === inpvalue);




var summary = d3.select("tbody")

summary.html("");

filteredData.forEach(element => {
    var row = summary.append("tr");

    Object.values(element).forEach(value => {
        row.append("td").text(value);
    });

});
});








      
