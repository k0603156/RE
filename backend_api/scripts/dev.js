/* eslint-disable import/order */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable strict */
/* eslint-disable import/no-extraneous-dependencies */

"use strict";

process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

const { appSrc } = require("../config/paths");
const http = require("http");

const { sequelize } = require(`${appSrc}/Models/tables`);
const { NormLog, ErrorLog } = require(`${appSrc}/Utils/log`);
const app = require(`${appSrc}/app`);
const option = { force: false };

const util = require("util");
const exec = util.promisify(require("child_process").exec);

NormLog("Sequelize DEVELOPMENT DB Initialize");

async function execute() {
  try {
    await sequelize.sync(option);
    if (option.force) {
      await (async () => {
        NormLog("✓ DB connection CLEAR success.");
        const execSeed = await exec("npx sequelize-cli db:seed:all");
        console.log(execSeed.stdout);
        NormLog("✓ DB connection CLEAR success. \n✓ DB seeding success.");
      })();
    } else NormLog("✓ DB connection success.");
  } catch (err) {
    ErrorLog(err);
    ErrorLog("✗ DB connection error. Please make sure DB is running.");
    process.exit();
  } finally {
    // sequelize.close();
    http.createServer(app).listen(app.get("port"), () => {
      NormLog(`✓ Express server linstening on Port ${app.get("port")}!`);
    });
  }
}

execute();
