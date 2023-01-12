const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi server en express, SOY LA RUTA INICIAL, las otras ya se encuentran en modulos');
});

routerApi(app);

app.listen(port, () => {
  console.log('Im listening in port ' + port);
});

