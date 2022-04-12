let con = require('../conexionDB');
module.exports = {
  mostrarTodo: async (req, res) => {
    let resp = await con.query('select * from usuarios', function (err, resul, fields) {
      res.send(resul);
    });
  },
  mostrarUno: async (req, res) => {

  }
}