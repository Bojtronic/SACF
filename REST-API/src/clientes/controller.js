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

const addCliente = (req, res) => {
    const { nombre, numero, domicilio } = req.body;

    //check if numero exists
    pool.query(queries.checkNumeroExists, [numero], (error, results) => {
        if(results.rows.length) {
            res.send("El numero ya existe");
        }

        //add cliente to database
        pool.query(queries.addCliente, [nombre, numero, domicilio], (error, results) => {
            if(error) throw error;
            res.status(201).send("¡Cliente creado exitosamente!");
        })
    });
};

const removeCliente = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getClienteById, [id], (error, results) => {
        /*
        if(results == undefined){
            console.log("me cago en la puta");
        }
        */
        const noClienteFound = !results.rows.length;
        if(noClienteFound){
            res.send("El cliente no existe en la base de datos");
        }    
    })
       
    pool.query(queries.removeCliente, [id], (error, results) => {
        if(error) throw error;
        res.status(200).send("Cliente eliminado exitosamente");
    })    
};

const updateCliente = (req, res) => {
    const id = parseInt(req.params.id);
    const {domicilio} = req.body;

    pool.query(queries.getClienteById, [id], (error, results) => {
        const noClienteFound = !results.rows.length;
        if(noClienteFound){
            res.send("El cliente no existe en la base de datos");
        }

        pool.query(queries.updateCliente, [domicilio, id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Cliente actualizado exitosamente");
        });
    });
};

module.exports = {
    getClientes,
    getClienteById,
    addCliente,
    removeCliente,
    updateCliente,
}