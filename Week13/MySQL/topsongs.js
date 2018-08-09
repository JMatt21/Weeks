const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "Du@F!dgg",
    database: "songlist_db"
});

function searchArtist(artist) {
    connection.query('SELECT * FROM top5000 WHERE artist = ?', [artist], (err, results) => {
        //artist = ?', [arist]                            
        if (err) throw (err);
        console.log(results);
    });
}

function popularArtists() {
    connection.query('SELECT artist, COUNT(*) FROM top5000 GROUP BY artist HAVING COUNT(*) > 1', (err, results) => {
        console.log(results);

    })
}

function searchRange(low, high) {
    connection.query('SELECT * FROM top5000 WHERE id >= ' + low + ' && id <= ' + high, (err, results) => {
                                                //id BETWEEN ? and ?, [low, high]
        if (err) throw (err);

        console.log(results);

    });
}

function searchSong(songname) {
    connection.query('SELECT * FROM top5000 WHERE name LIKE "%' + songname + '%"', (err, results) => {
        if (err) throw (err);

        console.log(results);

    });
}




connection.connect(function (err) {
    if (err) throw err;
    // searchArtist('The Beatles');
    // popularArtists();
    // searchRange(1, 4);
    searchSong('White');
    connection.end();
});