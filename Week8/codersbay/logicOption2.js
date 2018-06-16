// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

// Assign the reference to the database to a variable named 'database'
// var database = ...

var config = {
    apiKey: "AIzaSyBOiHjYKn_QoqL5RLl219teUF9-DaB49gc",
    authDomain: "hethere-51bee.firebaseapp.com",
    databaseURL: "https://hethere-51bee.firebaseio.com",
    projectId: "hethere-51bee",
    storageBucket: "hethere-51bee.appspot.com",
    messagingSenderId: "427607132711"
};

firebase.initializeApp(config);
var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

//  At the page load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function (snapshot) {
    if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {
        highBidder = snapshot.val().highBidder;
        highPrice = snapshot.val().highPrice;
        $("#highest-bidder").text(highBidder);
        $("#highest-price").text(highPrice);
        console.log(highBidder + ':' + highPrice);
    }
    else {
        $("#highest-bidder").text(initialBidder);
        $("#highest-price").text(initialBid);
        highBidder = initialBidder;
        highPrice = initialBid;

        console.log(initialBidder + ':' + initialBid);
    }

}, function (err) {
    console.log(err.code);
});

// If Firebase has a highPrice and highBidder stored (first case)
// Set the variables for highBidder/highPrice equal to the stored values in firebase.
// highPrice = ...
// highBidder = ...



// Change the HTML to reflect the stored values


// Print the data to the console.


// Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.


// Change the HTML to reflect the initial values


// Print the data to the console.




// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function (event) {
    // prevent form from submitting with event.preventDefault() or returning false
    event.preventDefault();
    // Get the input values
    var newBid = $("#bidder-price").val().trim();
    var newBidder = $("#bidder-name").val().trim();

    // Log the Bidder and Price (Even if not the highest)
    console.log(newBidder + ':' + newBid);

    // If Then statements to compare against previous high bidder
    console.log(newBid + '|' + highPrice);
    if (parseInt(newBid) > parseInt(highPrice)) {

        // Alert that they are High Bidder
        alert("You have the highest bid!");

        // Save the new price in Firebase
        database.ref().set({
            highPrice: newBid,
            highBidder: newBidder
        })

        // Log the new High Price
        console.log("new highest: " + newBid);

        // Store the new high price and bidder name as a local variable (could have also used the firebase variable)


        // Change the HTML to reflect the new high price and bidder

    }
    // Else tell user their bid was too low via alert
    else {
        alert("Sorry! You have been outbid!");
    }
});