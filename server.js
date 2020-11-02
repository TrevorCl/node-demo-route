const http = require('http');
const app = require('./app');

const port = process.env.PORT || 8080;

// express qualifies as a request handler
const server = http.createServer(app);

server.listen(port);

