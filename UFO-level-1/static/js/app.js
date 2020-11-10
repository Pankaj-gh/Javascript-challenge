// from data.js
var tableData = data;

// YOUR CODE HERE!


// Creating Variable for tbody and selecting it

var tbody = d3.select("tbody");




// Capturing each value from the object and appending it to each row of the selected table

tableData.forEach(element => {
     var row = tbody.append("tr");

    
     Object.values(element).forEach(value => {
        row.append("td").text(value);

    });
});


// Creating variable to select button

var button = d3.select("#filter-btn");


// Writing function that captures user input & filters object to display the results

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

// End of Part 1






      
