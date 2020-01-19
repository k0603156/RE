"use strict";
process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";
process.env.GENERATE_SOURCEMAP = "true";

process.on("unhandledRejection", err => {
  throw err;
});

const chalk = require("react-dev-utils/chalk");
const checkRequiredFiles = require("react-dev-utils/checkRequiredFiles");
const webpack = require("webpack");

const paths = require("../../config/paths");
const webpackClientConfig = require(paths.TravelerConfig + "/webpack.config")(
  "client"
);
const webpackServerConfig = require(paths.TravelerConfig + "/webpack.config")(
  "server"
);

console.log(chalk.yellow(`Build Client&Server ${process.env.NODE_ENV}...`));
function build() {
  const compiler = webpack([webpackClientConfig, webpackServerConfig]);

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      return resolve({
        stats
      });
    });
  });
}
build().then(_ => {
  console.log(chalk.yellow(`Sucess!`));
});
