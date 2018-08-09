const http = require('http');
const fs = require('fs');
const PORT = 3000;
const handleRequest = (req, res) => {
    let path = req.url;
    switch (path) {
        case "/":
            return displayHome(path, req, res);

        case "/food":
            return displayFood(path, req, res);

        case "/movies":
            return displayMovies(path, req, res);

        case "/cssframeworks":
            return displayCSSFrames(path, req, res);
            
        default:
            return uhoh(path, req, res);
    }
}
const server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log('Server: Hello there, ' + PORT);
})

function uhoh(url, req, res) {
    var myHTML = "<html>" +
        "<body><h1>404 Not Found </h1>" +
        "<p>The page you were looking for: " + url + " can not be found</p>" +
        "</body></html>";

    // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
    res.writeHead(404, { "Content-Type": "text/html" });

    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
}
function displayHome(path, req, res) {
    fs.readFile(__dirname + "/index.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayFood(path, req, res) {
    fs.readFile(__dirname + "/food.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayMovies(path, req, res) {
    fs.readFile(__dirname + "/movies.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayCSSFrames(path, req, res) {
    fs.readFile(__dirname + "/cssframes.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}