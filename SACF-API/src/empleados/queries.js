const get = "SELECT * FROM empleado";
const getById = "SELECT nombre, numero, domicilio FROM empleado WHERE numero = $1";
const checkIdExists = "SELECT c FROM empleado c WHERE c.numero = $1";
const add = "INSERT INTO empleado (nombre, numero, domicilio) VALUES ($1, $2, $3)";
const remove = "DELETE FROM empleado WHERE numero = $1";
const update = "UPDATE empleado SET nombre = $1, numero = $2, domicilio = $3 WHERE numero = $4";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}