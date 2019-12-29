"use strict";
//TODO:작성 중
process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";
process.env.PORT = "3000";
process.env.PUBLIC_URL = "";

process.on("unhandledRejection", err => {
  throw err;
});
const http = require("http");
const { app } = require("../src/App");
const { sequelize } = require("../src/Models/tables");
const { NormLog, ErrorLog } = require("../src/Utils/log");

NormLog("Sequelize PRODUCTION DB INIT");
sequelize
  .sync({ force: false, logging: false }) //force:false
  .then(_ => NormLog("✓ PRODUCTION DB reset connection success."))
  .then(_ => sequelize.close())
  .catch(err => {
    ErrorLog(err);
    ErrorLog("✗ TEST DB connection error. Please make sure DB is running.");
    process.exit();
  })
  .finally(_ => {
    http.createServer(app).listen(app.get("port"), () => {
      NormLog(
        `✓ Express PRODUCTION server linstening on Port ${app.get("port")}!`
      );
    });
  });
