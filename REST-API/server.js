const express = require("express");
const clientesRoute = require('./src/clientes/routes');
const empleadosRoute = require('./src/empleados/routes');

const app = express();
const port = 3000;


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

app.use('/api/v1/clientes', clientesRoute);
app.use('/api/v1/empleados', empleadosRoute);

app.listen(port, () => console.log(`listening on port ${port}`));

app.get('/', (consulta, respuesta) => {
    respuesta.send('BOJTRONIC - SACF API');
});