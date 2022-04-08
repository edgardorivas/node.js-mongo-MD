let http = require('http');
let fs = require('node:fs');

let server = http.createServer((req, res) => {
  fs.readFile('./hola-html.html', (err, data) => {
    let html_string = data.toString();
    let object = html_string.match(/[^\{\}]+(?=\})/g);
    let nombre = 'dixon';
    for (let i = 0; i < object.length; i++) {
      let valor = eval(object[i]);
      html_string = html_string.replace("{" + object[i] + "}", valor);
    }
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(html_string);
    res.end();
  });
});
server.listen(8080, 'localhost');
