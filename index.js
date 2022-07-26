const http = require('http');

const requestListener = (req, res) => {
res.write(200,'Hello');
res.end();
};

const server = http.createServer(requestListener)

server.listen(5000)