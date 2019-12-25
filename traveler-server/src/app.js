const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const dotenv = require("dotenv");
const Routes = require("./Routes");

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
  async init() {
    dotenv.config({
      path: path.resolve(__dirname, ".env")
    });
    this.app.set("port", this.port);
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
}

module.exports = new App().app;
