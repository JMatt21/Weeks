const mysql = require("mysql");

let connection = mysql.createConnection({
	host: "localhost",

	port: 3306,

	user: "root",

	password: "Du@F!dgg",
	database: "records_db"
});
// Inside MySQL workbench running this line of code
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your actual password';
// Should work 99% of the time.

function sqlRead(data, table) {
	connection.query('SELECT ' + data + ' from ' + table,
		function (err, results, fields) {
			console.log(results);
			// console.log(fields);

			// connection.release();

			if (err) throw err;
		});
}

function sqlUpdate(data, condition, table) {
	connection.query('UPDATE' + table + 'SET ? WHERE ?', data, condition, function (err, results, fields) {
		if (err) throw err;
	});
}

function sqlDelete() {
	connection.query('DELETE FROM song WHERE title = "angriff"', function (err, results, fields) {
		if (err) throw err;
	});
}

function sqlCreate(data, table) {
	// The ID is auto generated
	connection.query("INSERT INTO " + table + " SET ?",
		data,
		function (err, results, fields) {
			if (err) throw err;
		});
}
connection.connect(function (err) {
	if (err) throw (err);
	// console.log("connected as id " + connection.threadId);

	// sqlCreate({
	// 	title: 'me',
	// 	artist: '_',
	// 	genre: 'irl'
	// }, 'song');

	sqlUpdate({ artist: 'WWE' }, { artist: 'WorldWide' }, 'song');

	// sqlDelete

	sqlRead('title, artist', 'song');
	connection.end();
});

