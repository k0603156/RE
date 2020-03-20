process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

const { appSrc } = require("../config/paths");
const http = require("http");
const { sequelize } = require(appSrc + "/Models/tables");
const { board } = require(appSrc + "/Models/tables");
const { NormLog, ErrorLog } = require(appSrc + "/Utils/log");
const app = require(appSrc + "/app");
const option = { force: true, logging: false };
//Todo: sequelize.sync는 적당한 부분에서 process.env 기준으로 실행해줘야겠다. 실행스크립트 or index
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
