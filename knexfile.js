// Update with your config settings.
require('dotenv').config();
const path = require('path');

module.exports = {
  client: process.env.DB_CLIENT,
  connection: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    charset: process.env.DB_CHARSET
  },
  migrations: {
    directory: path.resolve(__dirname, 'database', 'migrations') // please do not change this
  },
  seeds: {
    directory: path.resolve(__dirname, 'database', 'seeds') // please do not change this
  }
};
