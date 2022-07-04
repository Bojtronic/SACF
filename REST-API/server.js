const express = require("express");
const clienteRoutes = require('./src/clientes/routes')

const app = express();
const port = 3000;

//const server = "127.0.0.1";

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin,X-Requested-With,Content-Type,Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,PATCH,DELETE,OPTIONS"
    );
    next();
  });

app.use('/api/v1/clientes', clienteRoutes);

app.listen(port, () => console.log(`listening on port ${port}`));

app.get('/', (consulta, respuesta) => {
    respuesta.send('using server')
});