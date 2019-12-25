const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../../.env")
});
module.exports = {
  development: {
    username: "dev",
    password: process.env.SEQUELIZE_PASSWORD,
    database: "traveler_dev",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql"
  },
  test: {
    username: "dev",
    password: process.env.SEQUELIZE_PASSWORD,
    database: "traveler_test",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql"
  },
  production: {
    username: "dev",
    password: process.env.SEQUELIZE_PASSWORD,
    database: "traveler",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql"
  }
};
