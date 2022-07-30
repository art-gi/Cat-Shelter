const http = require('http');
const url = require('url');
const fs = require('fs');
const PORT = 5000;

const homeController = require('./contolers/home.js');

const requestListener = (req, res) => {

    switch (req.url) {
        case '/':
            homeController(req, res);
            break;
        /*  case '/addBreed':
             res.write('Add breed');
             res.end();
             break;
         case '/addCat':
             res.write('Add cat');
             res.end();
             break;
         case '/editCat':
             res.write('Edit cat');
             res.end();
             break;
         case '/addCat':
             res.write('Add cat');
             res.end();
             break; */

        default:
            res.write('404 page');
            res.end();
    }

};

const server = http.createServer(requestListener);

server.listen(PORT, console.log(`Server is running on port ${PORT}...`));