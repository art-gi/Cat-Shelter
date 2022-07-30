const url = require('url');
const path = require('path');
const fs = require('fs');

function homeContoller(req, res) {
    if (req.url === '/' && req.method === 'GET') {
        let pathFile = path.join(__dirname, '../views/home/index.html');
        console.log(pathFile)
        let home = fs.readFile(pathFile, 'utf8', (err, home) => {
            if (err) {
                res.writeHead(404);
                res.write('Not founded');
                res.end();
            }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(home);
            console.log('yes');
            res.end();
        })
    }
};
module.exports = homeContoller;
