const mysql = require('mysql');
const config = require('../../../config');
const pool = mysql.createPool(
    {
        host:'localhost',
        user:'root',
        password:'123456',
        database:'infoms'
    }
);

let query = function (sql,values) {
    return new Promise((resolve,reject)=>{
        pool.getConnection(function (err,connection) {
            if(err) reject(err)
            else{
                connection.query(sql,values,(err,rows) => {
                    if(err) reject(err);
                    else{
                        resolve(rows);
                    }

                    connection.release();
                });
            }
        });
    });
}

module.exports = {
    query
};