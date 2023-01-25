const get = "SELECT numero_asiento, numero_linea, id_cuenta, debito, credito, descripcion, impuesto, fecha_factura, proveedor FROM linea_asiento";
const getById = "SELECT numero_asiento, numero_linea, id_cuenta, debito, credito, descripcion, impuesto, fecha_factura, proveedor FROM linea_asiento WHERE numero_asiento = $1";
const checkIdExists = "SELECT numero_asiento, numero_linea, id_cuenta, debito, credito, descripcion, impuesto, fecha_factura, proveedor FROM linea_asiento WHERE numero = $1";
const add = "INSERT INTO linea_asiento (numero_asiento, numero_linea, id_cuenta, debito, credito, descripcion, impuesto, fecha_factura, proveedor) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";






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
