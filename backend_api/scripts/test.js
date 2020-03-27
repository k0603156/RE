"use strict";
process.env.BABEL_ENV = "test";
process.env.NODE_ENV = "test";
process.env.PUBLIC_URL = "";

process.on("unhandledRejection", err => {
  throw err;
});

const jest = require("jest");
const { appSrc } = require("../config/paths");
const { sequelize } = require(appSrc + "/Models/tables");
const { NormLog, ErrorLog } = require(appSrc + "/Utils/log");
const argv = process.argv.slice(2);

const util = require("util");
const exec = util.promisify(require("child_process").exec);

NormLog("Sequelize TEST DB Initialize");

sequelize
  .sync({ force: true, logging: false })
  .then(_ => exec("npx sequelize-cli db:seed:all"))
  .then(_ => {
    console.log(_.stdout);
    NormLog("✓ TEST DB reset connection success.");
  })
  .catch(err => {
    ErrorLog(err);
    ErrorLog("✗ TEST DB connection error. Please make sure DB is running.");
    process.exit();
  })
  .finally(_ => {
    jest.run(argv + " --detectOpenHandles");
    NormLog("✓ TEST start");
  });
