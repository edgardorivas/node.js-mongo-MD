const express = require('express');
const usuario = require('../controller/usuario.control');

const ruta = express.Router();

ruta.post('/ingresar', usuario.registroDeUusuario);

module.exports = ruta;