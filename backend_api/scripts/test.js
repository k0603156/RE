/* eslint-disable import/order */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable strict */
/* eslint-disable import/no-extraneous-dependencies */

"use strict";

process.env.BABEL_ENV = "test";
process.env.NODE_ENV = "test";
process.env.PUBLIC_URL = "";

process.on("unhandledRejection", (err) => {
  throw err;
});
const { appSrc } = require("../config/paths");
const jest = require("jest");

const { sequelize } = require(`${appSrc}/Models/tables`);
const { NormLog, ErrorLog } = require(`${appSrc}/Utils/log`);
const argv = process.argv.slice(2);

const util = require("util");
const exec = util.promisify(require("child_process").exec);

NormLog("Sequelize TEST DB Initialize");

sequelize
  .sync({ force: true, logging: false })
  .then(() => exec("npx sequelize-cli db:seed:all"))
  .then((_) => {
    console.log(_.stdout);
    NormLog("✓ TEST DB reset connection success.");
  })
  .catch((err) => {
    ErrorLog(err);
    ErrorLog("✗ TEST DB connection error. Please make sure DB is running.");
    process.exit();
  })
  .finally(() => {
    jest.run(`${argv} --detectOpenHandles --forceExit`);
    NormLog("✓ TEST start");
  });
