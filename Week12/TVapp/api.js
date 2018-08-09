const request = require('request');

const searchActor = function (search) {

}
const searchShow = function (search) {
    request('http://api.tvmaze.com/search/shows?q=' + search, function (err, resp, body) {
        if (err) {
            console.log(err);
        }
        else {
            if (!err && resp.statusCode === 200) {
                const data = JSON.parse(body)[0].show;
                // console.log(JSON.parse(body)[0]);
                // console.log(JSON.parse(body)[0].show.name);
                console.log(data.name);
                console.log(data.genres.join(', '));
                console.log(data.rating.average);
                console.log(data.network.name);
                console.log(data.summary);
            }
        }
    });
}

module.exports = {
    searchActor,
    searchShow
}
