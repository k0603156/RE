const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, ".env")
});
module.exports = {
  development: {
    username: process.env.DB_DEVELOPMENT_USER,
    password: process.env.DB_DEVELOPMENT_PW,
    database: process.env.DB_DEVELOPMENT_NAME,
    host: "127.0.0.1",
    port: 3306,
    dialect: process.env.DB_DIALECT
  },
  test: {
    username: process.env.DB_TEST_USER,
    password: process.env.DB_TEST_PW,
    database: process.env.DB_TEST_NAME,
    host: "127.0.0.1",
    port: 3306,
    dialect: process.env.DB_DIALECT
  },
  production: {
    username: process.env.DB_PRODUCTION_USER,
    password: process.env.DB_PRODUCTION_PW,
    database: process.env.DB_PRODUCTION_NAME,
    host: process.env.DB_PRODUCTION_HOST,
    port: 3306,
    dialect: process.env.DB_DIALECT
  }
  // "production": {
  //   "use_env_variable": "DATABASE_URL",
  //   "dialect": "postgres"
  // }
};
