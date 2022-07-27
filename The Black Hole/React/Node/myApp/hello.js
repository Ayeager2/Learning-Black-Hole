// Import the top-level function of express
const express = require('express');
// Creates an Express application using the top-level function
const app = express();
// Define port number as 3000
const port = 3000;
// Routes HTTP GET requests to the specified path "/" with the specified callback function
app.get('/', function(request, response) {
 response.send('Hello, World!');
});
// Make the app listen on port 3000
app.listen(port, function() {
 console.log('Server listening on http://localhost:' + port);
});

var routes = {
 '/': function index (request, response) {
 response.writeHead(200);
 response.end('Hello, World!');
 },
 '/foo': function foo (request, response) {
 response.writeHead(200);
 response.end('You are now viewing "foo"');
 }
}
