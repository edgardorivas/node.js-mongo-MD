const axios = require('axios');

(async () => {

  /* const llamada = await axios({
     method: 'post',
     baseURL: 'localhost:8080',
     url: '/usuario/ingresar',
     data: {
       nombre: 'edgardo',
       clave: 'jshdjhdjsh'
     }
   })
   */
  await axios.post('http://localhost:8080/usuario/ingresar', {
    nombre: 'edgardo',
    clave: 'jshdjhdjsh'
  }
  ).catch(error => {
    console.log(error.response);
  }).then(data => {
    console.log(data);
  })
})()
