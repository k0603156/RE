"use strict";
process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";
process.env.GENERATE_SOURCEMAP = "false";

process.on("unhandledRejection", err => {
  throw err;
});

const { chalk, checkRequiredFiles } = require("react-dev-utils");
const webpack = require("webpack");
const paths = require("../../config/paths");
