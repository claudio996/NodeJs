const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Node'
})
conexion.connect((error)=> {
    if (error) {
        console.log(`this error is ${error}`);
    }
    console.log('conection sucesfully');
})

module.exports = conexion;