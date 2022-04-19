const mysql2 = require('mysql2');
const { Database } = require('./detalles_conexion');
const { promisify } = require('util');

try {
  const pool = mysql2.createPool(Database);
  pool.getConnection((err, conn) => {
    if (err) {
      console.log(err);
    }
  });
  pool.query = promisify(pool.query);
  module.exports = pool;
} catch (error) {
  console.log(error);
}