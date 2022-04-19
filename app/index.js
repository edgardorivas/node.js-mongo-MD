const express = require('express');
const bodyParse = require('body-parser');
const rutaUsuario = require('./router/usuario.ruta');
const http = require('http');

let app = express();
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));

app.use('/usuario', rutaUsuario);
http.createServer(app).listen(8080, () => {
  console.log('servidor arriba');
});
