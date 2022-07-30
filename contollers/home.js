const url = require('url');
const path = require('path');

function homeContoller(req, res) {
    if (req.url === '/' && req.method === 'GET') {
        let pathFile = path.join(__dirname, '../views/home/index.html');
    
        require('./util.js')(pathFile, res);

    }
};
module.exports = homeContoller;
