const pool = require("../../database");
const queries = require('./queries');

const getClientes = (req, res) => {
    pool.query(queries.getClientes, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

const getClienteById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getClienteById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getClientes,
    getClienteById,
}