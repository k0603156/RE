const { createErr } = require("../Utils");
const user = require("./user");
const post = require("./post");
class Routes {
  routes(app) {
    app.use("/api/user/", user);
    app.use("/api/post/", post);

    app.use((req, res, next) => {
      next(createErr(404, "Not Found"));
    });
    app.use((err, req, res, next) => {
      //Todo:에러처리를 어떤식으로 해야할까
      const error = req.app.get("env") === "development" ? err : {};
      res.status(error.status || 500);
      res.send(error.message);
    });
    process.on("uncaughtException", err => {
      console.err(err);
    });
  }
}
module.exports = new Routes().routes;
