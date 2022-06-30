const getClientes = "SELECT * FROM cliente";
const getClienteById = "SELECT nombre, numero, domicilio FROM cliente WHERE numero = $1";

module.exports = {
    getClientes,
    getClienteById,
}