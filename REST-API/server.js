const express = require("express");
const clienteRoutes = require('./src/clientes/routes')

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (consulta, respuesta) => {
    respuesta.send('using server')
});

app.use('/api/v1/clientes', clienteRoutes);

app.listen(port, () => console.log(`listening on port ${port}`));

