const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",

	port: 3306,

	user: "root",

	password: "Du@F!dgg",
	database: "garden"
});

connection.connect(function(err){
    if (err) throw err;

    connection.query('SELECT * FROM apples WHERE quality > 2', function(err, results){
        if (err) throw err;
        console.log(results);
    });
    connection.end();
});