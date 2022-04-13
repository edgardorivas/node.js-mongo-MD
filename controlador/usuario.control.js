let con = require('../conexionDB');
module.exports = {
  mostrarTodo: async (req, res) => {
    try {
      await con.query('select * from usuarios', function (err, resul, fields) {
        if (err) {
          return res.status(400).send('error');
        }
        else {
          return res.status(200).send(resul);
        }
      });
    } catch (error) {
      return res.status(500).send(error);

    }
  },
  ingresar: async (req, res) => {
    try {

      let nombre = req.body.nombre;
      let apellido = req.body.apellido;
      let clave = req.body.clave;
      let respuesta = [nombre, apellido, clave];
      console.log(respuesta);
      await con.query('insert into usuarios(nombre,apellido,clave) values(?,?,?)', respuesta, (err, resul) => {
        if (err) {
          return res.status(400).send(err);
        } else if (resul) {
          return res.status(200).send('guardado insercion');
        }
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  actualizar: async (req, res) => {
    try {
      let id = req.body.id;
      let consulta = await con.query('select * from usuarios where id = ?', id, (err, result) => {
        if (err) {
          return res.status(500).send('no existe en la base de datos');
        }
        else {
          return result;
        }
      });
      if (consulta.length > 0) {
        let nombre = (req.body.nombre == null) ? consulta[0]['nombre'] : req.body.nombre;
        let apellido = (req.body.apellido == null) ? consulta[0]['apellido'] : req.body.apellido;
        let clave = (req.body.clave == null) ? consulta[0]['clave'] : req.body.clave;
        let variables = [nombre, apellido, clave, id];
        await con.query('UPDATE usuarios set nombre = ? , apellido = ? , clave = ? where id = ?', variables, (err, resul) => {
          if (err) {
            return res.status(500).send(err);
          } else {
            return res.status(201).send(resul);
          }
        });
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  eliminar: async (req, res) => {
    try {
      let id = req.body.id;
      await con.query('delete from usuarios where id = ?', id, (err, resul) => {
        if (err) {
          return res.status(500).send(err);
        }
        else {
          return res.status(200).send('se elimino exitosamente');
        }
      })

    } catch (error) {
      return res.status(500).send(error);
    }

  }
}