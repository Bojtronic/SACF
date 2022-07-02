const getClientes = "SELECT * FROM cliente";
const getClienteById = "SELECT nombre, numero, domicilio FROM cliente WHERE numero = $1";
const checkNumeroExists = "SELECT c FROM cliente c WHERE c.numero = $1";
const addCliente = "INSERT INTO cliente (nombre, numero, domicilio) VALUES ($1, $2, $3)";
const removeCliente = "DELETE FROM cliente WHERE numero = $1";
const updateCliente = "UPDATE cliente SET domicilio = $1 WHERE numero = $2";

module.exports = {
    getClientes,
    getClienteById,
    checkNumeroExists,
    addCliente,
    removeCliente,
    updateCliente,
}