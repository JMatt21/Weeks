// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)

let geocoder = require('geocoder');
let input = [];
// Take in the command line arguments
for (let i = 2; process.argv[i]; i++){input.push(process.argv[i])}

geocoder.geocode(input.join('+'), function(e, data){
    if(e) console.log(e);
    else console.log(data);
});
