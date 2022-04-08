let http = require('http');
let fs = require('fs');
const { ifError } = require('assert');

let server = http.createServer((req, res) => {
  fs.readFile('./hola-html.html', (err, data) => {
    res.write(data);
    res.end();
  });
});
server.listen(8080);