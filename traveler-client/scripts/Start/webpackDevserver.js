"use strict";

process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

// Lib
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const chalk = require("react-dev-utils/chalk");
const openBrowser = require("react-dev-utils/openBrowser");

//Utils
const paths = require("../../config/paths");

//Config
const webpackDevConfig = require(paths.TravelerConfig + "/webpack.config")(
  "dev"
);
const protocol = process.env.HTTPS === "true" ? "https" : "http";
const HOST = process.env.HOST || "127.0.0.1";
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const compiler = webpack(webpackDevConfig);

//DevServer
const devServer = new WebpackDevServer(compiler);

devServer.listen(DEFAULT_PORT, HOST, err => {
  console.log(
    chalk.cyan(`Starting the development server...\n localhost:${DEFAULT_PORT}`)
  );
  openBrowser(`${protocol}://${HOST}:${DEFAULT_PORT}`);
});
