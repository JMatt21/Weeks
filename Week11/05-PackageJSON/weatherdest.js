// Here we include the weather-js so we can use it in our Node application.
var weather = require("weather-js");
let geo = require("geocoder");
const userInput = process.argv[2].split().join(' ');
// Then we use the package to search for the weather at a location
weather.find({ search: userInput, degreeType: "F" }, function(err, result) {

  // If there is an error log it.
  if (err) {
    console.log(err);
  }

  // If there is no error... then print out the weather data.
  // We use JSON.stringify to print the data in string format.
  // We use the JSON.stringify argument of "2" to make the format pretty.
  // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
  let data = result[0];
  // console.log(JSON.stringify(result[0].location.name, null, 2));

  console.log(data.location.name);
  console.log(data.current.temperature+"F");

});

