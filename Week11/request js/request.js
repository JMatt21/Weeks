// const MOVIE_INPUT = process.argv[2];
let MOVIE_INPUT = '';
for (let i = 2; process.argv[i]; i++) { MOVIE_INPUT += process.argv[i] + '+'; }
console.log(MOVIE_INPUT);
let request = require('request');

request('http://www.omdbapi.com/?t=' + MOVIE_INPUT + '&apikey=trilogy', function (err, response, body) {
    if (!err && response.statusCode === 200) {
        // console.log(JSON.parse(body));
        console.log(JSON.parse(body).Title, JSON.parse(body).Year);
    }
});
