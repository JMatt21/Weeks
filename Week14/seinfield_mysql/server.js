// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const mysql = require("mysql");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "Du@F!dgg",
    database: "seinfield_db"
});

connection.connect(function (err) {
    if (err) throw err;
})

app.get("/:route/", function (req, res) {

    switch (req.params.route) {
        case "cast": {
            let ret = "<h1>";
            connection.query("SELECT * FROM actors", function (err, results) {
                for (actor of results) {
                    ret += "<ul>";
                    ret += "<li>" + actor.id + "</li>";
                    ret += "<li>" + actor.name + "</li>";
                    ret += "<li>" + actor.coolness + "</li>";
                    ret += "<li>" + actor.attitude + "</li>";
                    ret += "</ul>";
                }
                res.send(ret);
            });
        }
            break;
        case "coolness-chart": {
            let ret = "<h1>";
            connection.query("SELECT * FROM actors ORDER BY coolness DESC", function (err, results) {
                for (actor of results) {
                    ret += "<ul>";
                    ret += "<li>" + actor.id + "</li>";
                    ret += "<li>" + actor.name + "</li>";
                    ret += "<li>" + actor.coolness + "</li>";
                    ret += "<li>" + actor.attitude + "</li>";
                    ret += "</ul>";
                }
                res.send(ret);
            });
        }
            break;
    }
});

app.get("/attitude/:option", function (req, res) {
    connection.query("SELECT * FROM actors WHERE attitude = ?", [req.params.option], function (req, results) {
        let ret = "<h1>";
        for (actor of results) {
            ret += "<ul>";
            ret += "<li>" + actor.id + "</li>";
            ret += "<li>" + actor.name + "</li>";
            ret += "<li>" + actor.coolness + "</li>";
            ret += "<li>" + actor.attitude + "</li>";
            ret += "</ul>";
        }
        res.send(ret);
    });
});

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});