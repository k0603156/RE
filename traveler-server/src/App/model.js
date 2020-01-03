const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { authenticateJwt } = require("../MiddleWares/passport");
const routes = require("../Routes");
require("../MiddleWares/passport");
module.exports = {
  app: express(),
  port: process.env.PORT || 8000,
  middleware: [
    logger("dev"),
    express.json(),
    express.urlencoded({ extended: false }),
    // (req, res, next) => {
    //   res.header("Access-Control-Allow-Origin", "*");
    //   res.header(
    //     "Access-Control-Allow-Headers",
    //     "Origin, X-Requested-With, Content-Type, Accept"
    //   );
    //   res.setHeader(
    //     "Access-Control-Allow-Methods",
    //     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    //   );
    //   next();
    // },
    cors(),
    authenticateJwt
  ],
  routes
};
