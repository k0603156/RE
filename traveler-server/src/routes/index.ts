import { Application, Request, Response, NextFunction } from "express";
import user from "./user";
import post from "./post";
import Err from "@/custom/err";
class Routes {
  public routes(app: Application): void {
    app.use("/api/user/", user);
    app.use("/api/post/", post);

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
export default new Routes().routes;
