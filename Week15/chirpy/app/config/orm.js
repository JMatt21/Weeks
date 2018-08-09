var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    get: function (tableInput, cb) {
        var queryString = "SELECT * FROM ?? ";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    postChirp: function (table, chirp, cb) {
        var queryString = "INSERT INTO chirps (author, chirp, time_created) VALUES ??";
        console.log(queryString);
        connection.query(queryString, [chirp], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;