const mysql=require('mysql2');

const pool= mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'W@2915djkq#'
})

module.exports=pool.promise();