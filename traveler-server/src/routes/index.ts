import { Application, Request, Response, NextFunction } from "express";
import Err from "@/custom/err";
// const Err = require(__dirname + "../@config/err");
export class Routes {
  public routes(app: Application): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).json({ data: "MAINssd" });
    });

    app.use(function(req, res, next) {
      const err = new Err("Not Found", 404);
      next(err);
    });
    app.use(function(
      err: Err,
      req: Request,
      res: Response,
      next: NextFunction
    ) {
      res.locals.error = req.app.get("env") === "development" ? err : {};
      res.status(err.status || 500);
      res.send(err.message + err.status);
    });
  }
}
