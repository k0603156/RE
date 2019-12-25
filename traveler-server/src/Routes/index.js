const { createErr } = require("../Utils");
const userRouter = require("./user");
const postRouter = require("./post");

module.exports = app => {
  app.use("/api/user/", userRouter);
  app.use("/api/post/", postRouter);

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
    console.error(err);
  });
};
