var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Du@F!dgg",
    database: "movieplanner_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});


app.get("/", function (req, res) {
    connection.query("SELECT * FROM movies;", function (err, data) {
        if (err) throw err;
        res.render("index", { movies: data });
    });
});

app.post("/movies", function (req, res){
    connection.query("INSERT INTO movies (movie) VALUES (?)", [req.body.movie], function(err){
        if (err) throw err;
        res.redirect("/");
    });
});

app.put("/movies", function (req, res){
    connection.query("UPDATE movies SET movie = ? WHERE id = ?", [req.body.plan, req.params.id], function (err, result){
        if (err) {
            // If an error occurred, send a generic server failure
            return res.status(500).end();
          }
          else if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
    });
});

app.delete("/movies", function (req, res){

});
