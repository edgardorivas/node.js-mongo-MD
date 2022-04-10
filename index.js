let express = require('express');
let bodyParser = require('body-parser');
let http = require('http');
//inicializamos la paquete de express
let app = express();
//pasar informacion en fomato json
app.use(bodyParser.json());
//puede p
app.use(bodyParser.urlencoded({ extended: false }));
//la ruta para recivir
app.get('/', (req, res) => {
  res.send('el servidor esta arriba');
});
let server = http.createServer(app);
server.listen(8080, () => {
  console.log('todo bien');
});