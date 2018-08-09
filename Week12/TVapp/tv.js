const request = require('request');
const fs = require('fs');
const file_name = 'log.txt'
const TV = function () {
    this.findShow = function (show) {
        request('http://api.tvmaze.com/singlesearch/shows?q=' + show, function (err, resp, body) {
            if (!err && resp.statusCode === 200){
                const data = JSON.parse(body);
                let ret = 'Show: ' + data.name + 
                '\nGenres: ' + data.genres.join(', ') + 
                '\nAverage Rating: ' + data.rating.average + 
                '\nNetwork: ' + data.network.name + 
                '\nSummary: ' + data.summary +
                '\n---------------------------------------------------------------\n';
                console.log(ret);
                fs.appendFile(file_name, ret, (err) => {
                    if (err) throw (err);
                })
            }
        });
    };
    this.findActor = function (show) {
        request('http://api.tvmaze.com/search/people?q=' + show, function (err, resp, body) {
            if (!err && resp.statusCode === 200){
                const data = JSON.parse(body)[0].person;
                let ret = 'Name: ' + data.name +
                '\nBirthday: ' + data.birthday + 
                '\nGender: ' + data.gender + 
                '\nCountry: ' + data.country.name + 
                '\nUrl: ' + data.url + 
                '\n---------------------------------------------------------------\n';
                console.log(ret);
                fs.appendFile(file_name, ret, (err) => {
                    if (err) console.log(err);
                })
            }
        });
    };
};

module.exports = TV;