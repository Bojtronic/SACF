const get = "SELECT * FROM cliente";
const getById = "SELECT nombre, numero, domicilio FROM cliente WHERE numero = $1";
const checkIdExists = "SELECT c FROM cliente c WHERE c.numero = $1";
const add = "INSERT INTO cliente (nombre, numero, domicilio) VALUES ($1, $2, $3)";
const remove = "DELETE FROM cliente WHERE numero = $1";
const update = "UPDATE cliente SET nombre = $1, numero = $2, domicilio = $3 WHERE numero = $4";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}