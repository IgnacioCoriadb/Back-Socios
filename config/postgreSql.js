const { Client } = require('pg');

// Configuración de la conexión a la base de datos
const client = new Client({
  user: process.env.USER,
  host: process.env.HOST,
  database:  process.env.DATABASE,
  password: process.env.PASSWORD,
  port:  process.env.PORT, // Puerto predeterminado de PostgreSQL
});

// Función para conectar a la base de datos
async function connectDb() {
  try {
    await client.connect();
    console.log('Conexión exitosa a PostgreSQL');
  } catch (err) {
    console.error('Error de conexión a PostgreSQL', err);
  }
}


// Exportar el cliente y la función de conexión
module.exports = {
  client,
  connectDb,
};
