const get = "SELECT id_cuenta, numero, nombre, tipo, tipo_detalle, descripcion, saldo, divisa, fecha_registro FROM cuenta";
const getById = "SELECT id_cuenta, numero, nombre, tipo, tipo_detalle, descripcion, saldo, divisa, fecha_registro FROM cuenta WHERE id_cuenta = $1";
const checkIdExists = "SELECT id_cuenta, numero, nombre, tipo, tipo_detalle, descripcion, saldo, divisa, fecha_registro FROM cuenta WHERE id_cuenta = $1";
const add = "INSERT INTO cuenta (numero, nombre, tipo, tipo_detalle, descripcion, saldo, divisa, fecha_registro) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
const remove = "DELETE FROM cuenta WHERE id_cuenta = $1";




const update = "UPDATE ASIENTO SET id_asiento=$1, num_asiento=$2, num_cuenta=$3, cuenta=$4, debitos=$5, creditos=$6, descripcion=$7, impuestos=$8, fecha_creacion=$9, fecha_emision_factura=$10, proveedor=$11  WHERE numero = $12";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}
