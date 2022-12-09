const get = "SELECT id_asiento, num_asiento, num_cuenta, cuenta, debitos, creditos, descripcion, impuestos, fecha_creacion, fecha_emision_factura, proveedor FROM ASIENTO";
const getById = "SELECT id_asiento, num_asiento, num_cuenta, cuenta, debitos, creditos, descripcion, impuestos, fecha_creacion, fecha_emision_factura, proveedor FROM ASIENTO WHERE numero = $1";
const checkIdExists = "SELECT c FROM ASIENTO c WHERE c.numero = $1";
const add = "INSERT INTO ASIENTO (id_asiento, num_asiento, num_cuenta, cuenta, debitos, creditos, descripcion, impuestos, fecha_creacion, fecha_emision_factura, proveedor) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)";
const remove = "DELETE FROM ASIENTO WHERE numero = $1";
const update = "UPDATE ASIENTO SET id_asiento=$1, num_asiento=$2, num_cuenta=$3, cuenta=$4, debitos=$5, creditos=$6, descripcion=$7, impuestos=$8, fecha_creacion=$9, fecha_emision_factura=$10, proveedor=$11  WHERE numero = $12";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}
