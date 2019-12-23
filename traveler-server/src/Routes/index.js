const Err = require("../Utils/err");
const user = require("./user");
const post = require("./post");
class Routes {
  routes(app) {
    app.use("/api/user/", user);
    app.use("/api/post/", post);

    app.use(function(req, res, next) {
      const err = new Err("Not Found", 404);
      next(err);
    });
    app.use(function(err, req, res, next) {
      res.locals.error = req.app.get("env") === "development" ? err : {};
      res.status(err.status || 500);
      res.send(err.message + err.status);
    });
  }
}
module.exports = new Routes().routes;
