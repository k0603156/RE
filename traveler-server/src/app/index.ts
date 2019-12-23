import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import logger from "morgan";
import path from "path";
import session from "express-session";
import dotenv from "dotenv";

import { Routes } from "../routes";

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();
  constructor() {
    this.app = express();
    this.init();
    this.regist();
    this.routePrv.routes(this.app);
  }
  private init(): void {
    dotenv.config({
      path: path.resolve(__dirname, ".env")
    });
  }
  private regist(): void {
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
    this.app.use(logger("dev"));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}
export default new App().app;
