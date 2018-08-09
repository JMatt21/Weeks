const http = require('http');

const PORT = 7000;
const PORT2 = 7500;

const happyThings = ['Nice job.', 'You rock!', 'Excellent!'];
const notniceThings = ['Boooo!', 'You suck!', 'Dissapointed!', 'I cannot believe you did this!', "Get a haircut, hippee!"];


const handleRequest = (request, response) => {
    //the response.end is run everytime a client enters the server
    response.end(happyThings[Math.floor(Math.random() * happyThings.length)]);
    // console.log(response);
}

const handleRequest2 = (request, response) => {
    response.end(notniceThings[Math.floor(Math.random() * notniceThings.length)]);
}

const server = http.createServer(handleRequest);
const server2 = http.createServer(handleRequest2);

server.listen(PORT, function() {
    console.log('Server: Hello there, ' + PORT);
})

server2.listen(PORT2, function() {
    console.log('Server: Hello there, ' + PORT2);
})