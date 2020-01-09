const authRouter = require("./auth");
const userRouter = require("./user");
const postRouter = require("./post");

const API_ROOT = "/api/v1";

module.exports = app => {
  app.use(`${API_ROOT}/auth/`, authRouter);
  app.use(`${API_ROOT}/user/`, userRouter);
  app.use(`${API_ROOT}/post/`, postRouter);
  // app.use((req, res, next) => {
  //   const error = new Error("Not Found");
  //   error.status = 404;
  //   next(error);
  // });

  app.use((err, req, res, next) => {
    //Todo:에러처리를 어떤식으로 해야할까
    const error = req.app.get("env") === "development" ? err : {};
    error.status = err.status || 500;
    if (error.status < 500) {
      res.status(error.status).json({
        error: error.message
      });
    }
  });

  process.on("uncaughtException", err => {
    console.log("ErrUncaught");
    console.error(err);
  });
};
