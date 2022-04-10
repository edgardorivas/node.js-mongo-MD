let mysql = require('mysql');
let { database } = require('./conexion');
let { promisify } = require('util');

let conexion = mysql.createPool(database);
conexion.getConnection(function (err, con) {

});