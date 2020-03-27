process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

const { appSrc } = require("../config/paths");
const http = require("http");
const { sequelize } = require(appSrc + "/Models/tables");
const { board } = require(appSrc + "/Models/tables");
const { NormLog, ErrorLog } = require(appSrc + "/Utils/log");
const app = require(appSrc + "/app");
const option = { force: false, logging: true };

NormLog("Sequelize DEVELOPMENT DB Initialize");
sequelize
  .sync(option)
  .then(() => {
    option.force
      ? NormLog("✓ DB connection CLEAR success.")
      : NormLog("✓ DB connection success.");
  })
  .catch(err => {
    ErrorLog(err);
    ErrorLog("✗ DB connection error. Please make sure DB is running.");
    process.exit();
  })
  .finally(() => {
    // sequelize.close();
    http.createServer(app).listen(app.get("port"), () => {
      NormLog(`✓ Express server linstening on Port ${app.get("port")}!`);
    });
  });
