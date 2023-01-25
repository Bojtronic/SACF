const Pool = require("pg").Pool;

/*
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "SACF",
    password: "xxx",
    port: 5432,
});
*/

const pool = new Pool({
    user: "bojorge",
    host: "dpg-cf5ku4kgqg47vk5p3860-a.oregon-postgres.render.com",
    database: "sacf_db",
    password: "klQYvwAgCXBzbPmAQkH69LISrae4OVGv",
    ssl: { "rejectUnauthorized": false },
    //rejectUnauthorized: false,//add when working with https sites
    //requestCert: false,//add when working with https sites
    //agent: false,//add when working with https sites
    port: 5432,
    //uri: "postgres://ojgrffiqcutdjy:f1172a619a1c25e586cae8e33ef3cc762744f817876cf8c1535abff96a592c1d@ec2-44-206-214-233.compute-1.amazonaws.com:5432/ddm46h90v1f25t", 
});

module.exports = pool;