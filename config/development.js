const dotenv = require('dotenv');
const package = require('../package.json');

dotenv.config();

module.exports = {
  nodeEnv: process.env.NODE_ENV,
  server: {
    host: process.env.HOST,
    port: process.env.PORT,
    version: package.version,
  },
  database: {
    url: process.env.DATABASE_URL,
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    dialect: process.env.DATABASE_DIALECT,
    schema: process.env.DATABASE_SCHEMA,
  },
};
