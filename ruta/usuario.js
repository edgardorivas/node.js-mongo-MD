let algo = require('../controlador/usuario.control');
let express = require('express');
let route = express.Router();

route.get('/usuario', algo.mostrarTodo);
route.post('/ingresar', algo.ingresar);
route.put('/actualizar', algo.actualizar);
route.delete('/borrar', algo.eliminar);
module.exports = route;