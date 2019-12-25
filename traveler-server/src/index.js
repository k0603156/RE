const http = require("http");
const app = require("./app");
const { sequelize } = require("./Models/tables");
const { NormLog, ErrorLog } = require("../src/Utils/log");
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
    sequelize.close();
    http.createServer(app).listen(app.get("port"), () => {
      NormLog(`✓ Express server linstening on Port ${app.get("port")}!`);
    });
  });
