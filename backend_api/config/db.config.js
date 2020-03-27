const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});

const baseDbSetting = {
  timezone: "+09:00",
  port: 3306,
  dialect: process.env.DB_DIALECT,
  pool: {
    max: 100,
    min: 0,
    idle: 10000
  },
  define: {
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    timestamps: true
  }
};

module.exports = {
  test: Object.assign(
    {
      username: process.env.DB_TEST_USER,
      password: process.env.DB_TEST_PW,
      database: process.env.DB_TEST_NAME,
      host: "127.0.0.1",
      logging: false
    },
    baseDbSetting
  ),
  development: Object.assign(
    {
      username: process.env.DB_DEVELOPMENT_USER,
      password: process.env.DB_DEVELOPMENT_PW,
      database: process.env.DB_DEVELOPMENT_NAME,
      host: "127.0.0.1",
      logging: true
    },
    baseDbSetting
  ),

  production: Object.assign(
    {
      username: process.env.DB_PRODUCTION_USER,
      password: process.env.DB_PRODUCTION_PW,
      database: process.env.DB_PRODUCTION_NAME,
      host: process.env.DB_PRODUCTION_HOST,
      logging: false
    },
    baseDbSetting
  )
};
