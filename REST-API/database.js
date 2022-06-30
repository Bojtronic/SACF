const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "test",
    password: "xxx",
    port: 5432,    
});

module.exports = pool;