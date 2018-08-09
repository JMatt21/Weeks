//EZ server EZ life
const http = require('http');
const PORT = 3000;
const handleRequest = (request, response) => {
                    //You can put in html/in-line css here it's pretty cool
    response.end('<h1 style="color:red"> why yes hello there </h1>' + request.url);
}
const server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log('Server: Hello there, ' + PORT);
})