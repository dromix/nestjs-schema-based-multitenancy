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
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT,
    schema: process.env.DB_SCHEMA,
  },
  redis: {
    url: process.env.REDIS_URL,
    port: +process.env.REDIS_PORT,
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
  },
};
