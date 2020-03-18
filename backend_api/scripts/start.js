"use strict";
process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";
process.env.PORT = "80";
process.env.PUBLIC_URL = "";

process.on("unhandledRejection", err => {
  throw err;
});
const { appSrc } = require("../config/paths");
const http = require("http");
const { sequelize } = require(appSrc + "/Models/tables");
const { NormLog, ErrorLog } = require(appSrc + "/Utils/log");
const app = require(appSrc + "/app");

NormLog("Sequelize PRODUCTION DB Initialize");
sequelize
  .sync({ force: true, logging: false }) //force:false
  .then(_ => NormLog("✓ PRODUCTION DB connection success."))
  .catch(err => {
    ErrorLog(err);
    ErrorLog(
      "✗ PRODUCTION DB connection error. Please make sure DB is running."
    );
    process.exit();
  })
  .finally(_ => {
    http.createServer(app).listen(app.get("port"), () => {
      NormLog(
        `✓ Express PRODUCTION server linstening on Port ${app.get("port")}!`
      );
    });
  });
