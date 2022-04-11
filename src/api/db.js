require('dotenv').config();

async function connect() {
    if(global.connection && global.connection.state !== 'disconnected')    
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection(`mysql://root:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`).then((data) => {
        console.log("Conectado ao banco com sucesso.");
        return data;
    }).catch((err) => {
        console.log("Não foi possível conectar ao banco de dados. "+err);
    });

    global.connection = connection;
    return connection;
}  

module.exports = {
    connect
}
