const config = require('./config.js');
const mysql = require('mysql');

var pool = mysql.createPool(config);

pool.getConnection((err,connection) => {
    if (err) throw err;

    connection.query('SELECT * FROM users',(error, results, fields) => {
        console.log(error);
        console.log(results);
        console.log(fields);
    });
})
