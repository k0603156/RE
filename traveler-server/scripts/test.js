"use strict";
process.env.BABEL_ENV = "test";
process.env.NODE_ENV = "test";
process.env.PUBLIC_URL = "";

process.on("unhandledRejection", err => {
  throw err;
});

const jest = require("jest");
const { sequelize } = require("../src/Models/tables");
const { NormLog, ErrorLog } = require("../src/Utils/log");

let argv = process.argv.slice(2);

NormLog("Sequelize TEST DB 초기화");
sequelize
  .sync({ force: true, logging: false })
  .then(_ => NormLog("✓ TEST DB reset connection success."))
  .catch(err => {
    ErrorLog(err);
    ErrorLog("✗ TEST DB connection error. Please make sure DB is running.");
    process.exit();
  })
  .finally(_ => {
    jest.run(argv + " --detectOpenHandles");
    NormLog("✓ TEST start");
  });
