let http = require('http');

let body = 'hola mundo';

let este = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'content-type': 'text/plain'
  }).end(body);
});
este.listen(8080);