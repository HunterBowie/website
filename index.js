const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/' || request.url === '/home') {
        response.write("hello you are home");
        response.end()
    }
    else if (request.url === '/admin') {
        response.write("welcome to admin");
        response.end()
    }
});

server.listen(3000);
console.log('listening on port 3000');
