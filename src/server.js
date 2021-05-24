const express = require('express');
const routes = require('./routes');

const connection = require('./database');

const app = express();

app.use(express.json());
app.use(routes);


const PORT = 3333;
app.listen(3333,() => {
  console.log(`Servidor iniciado na porta ${PORT}`)
});