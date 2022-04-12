let algo = require('../controlador/usuario.control');
let express = require('express');
let route = express.Router();

route.get('/usuario', algo.mostrarTodo);

module.exports = route;