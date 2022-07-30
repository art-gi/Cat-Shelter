const fs = require('fs');

function writeContent(path, res) {
    let data = fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('Not founded');
            res.end();
        }
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();
    })
} 
module.exports = writeContent;