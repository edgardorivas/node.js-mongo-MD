const pool = require('../sql/conexion_base_datos');

async function registroDeUusuario(req, res) {
  try {
    let nombre = req.body.nombre;
    let clave = req.body.clave;

    if (nombre == null || clave == null) {
      throw new Error('No enviste el zsdijhsabdas')
    }

    let lista = [nombre, clave];
    console.log(lista)
    await pool.query('insert into usuario(nombre,clave) values (?,?)', lista, (err, resul) => {
      if (err) {
        throw err
      }
      return res.status(200).send({
        resul
      })
    });
  } catch (err) {
    console.log(err)
    return res.status(500).send(err)
  }
}

module.exports = {
  registroDeUusuario
}