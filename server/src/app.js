const express = require("express");
const cookieParser = require("cookie-parser");
const createError = require("http-errors");
const path = require("path");
const logger = require("morgan");
const Router = require("./routes");
const app = express();

app
  .use(logger("dev"))
  .use(cookieParser())
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(express.static(path.join(__dirname, "build")));

Router.map(({ path, router }) => app.use(path, router));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
module.exports = app;
