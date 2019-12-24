const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const dotenv = require("dotenv");
const Routes = require("./Routes");
const { sequelize } = require("./Models/tables");
class App {
  app;
  router = Routes;
  port = process.env.PORT || 8000;
  constructor() {
    this.app = express();
    this.init();
    this.regist();
    this.router(this.app);
  }
  init() {
    dotenv.config({
      path: path.resolve(__dirname, ".env")
    });
    sequelize.sync();
  }
  regist() {
    this.app.use(logger("dev"));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );
      next();
    });
  }
  start() {
    this.app.listen(this.port, () => {
      console.dir(process.env.NODE_PATH);
      console.log(`Express server linstening on Port ${this.port}!`);
    });
  }
}

new App().start();
