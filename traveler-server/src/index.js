const http = require("http");
const { sequelize } = require("./Models/tables");
const { NormLog, ErrorLog } = require("./Utils/log");
const { app } = require("./App");

//Todo: sequelize.sync는 적당한 부분에서 process.env 기준으로 실행해줘야겠다. 실행스크립트 or index
sequelize
  .sync({ force: false, logging: false })
  .then(() => {
    NormLog("✓ DB connection success.");
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
