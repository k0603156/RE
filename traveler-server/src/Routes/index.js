const ErrorHandler = require("../Utils/ErrorHandler");
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

  /**
   * @errorHandling
   */
  app.use(...ErrorHandler);

  /**
   * @uncaughtException
   */
  process.on("uncaughtException", err => {
    //TODO: 기록=>프로세스 종료
    console.log("ErrUncaught");
    console.error(err);
  });
};
