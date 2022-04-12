let mysql = require('mysql2');
let { promisify } = require('util');
let { Database } = require('./detallesBD');

let con = mysql.createPool(Database);
con.getConnection((err, conn) => {
  if (err) {
    console.log(error);
  }
  if (conn) {
    conn.release();
  }
});
con.query = promisify(con.query);
module.exports = con;