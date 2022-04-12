let express = require('express');
let bodyParse = require('body-parser');

let app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));


app.use('/', [
  require('./ruta/usuario')
]);

app.listen(8080, () => {
  console.log('servidor arriba');
})