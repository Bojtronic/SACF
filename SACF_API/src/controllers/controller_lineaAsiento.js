const pool = require("../../database");
const queries = require('../queries/query_LineaAsiento');

const get = (req, res) => {
    pool.query(queries.get, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}


const add = (req, res) => {
    const { numero_asiento, numero_linea, id_cuenta, debito, credito, descripcion, impuesto, fecha_factura, proveedor } = req.body;
    pool.query(queries.checkIdExists, [numero_asiento], (error, results) => {
        if (results.rows.length) {
            res.send("El numero ya existe");
        }
        pool.query(queries.add, [numero_asiento, numero_linea, id_cuenta, debito, credito, descripcion, impuesto, fecha_factura, proveedor], (error, results) => {
            if (error) throw error;
            res.status(201).send("¡Creado exitosamente!");
        });
    });
};













const getById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};


const remove = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getById, [id], (error, results) => {
        const notFound = !results.rows.length;
        if (notFound) {
            res.status(404).send("No existe en la base de datos");
            return;
        }
        pool.query(queries.remove, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Eliminado exitosamente");
        });
    });
};

const update = (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre, numero, domicilio } = req.body;
    pool.query(queries.getById, [id], (error, results) => {
        const notFound = !results.rows.length;
        if (notFound) {
            res.status(404).send("No existe en la base de datos");
            return;
        }
        pool.query(queries.update, [nombre, numero, domicilio, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Actualizado exitosamente");
        });
    });
};

module.exports = {
    get,
    getById,
    add,
    remove,
    update,
}