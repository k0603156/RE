"use strict";

process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const {
  choosePort,
  prepareUrls
} = require("react-dev-utils/WebpackDevServerUtils");
const { checkBrowsers } = require("react-dev-utils/browsersHelper");
const openBrowser = require("react-dev-utils/openBrowser");
const chalk = require("react-dev-utils/chalk");
const paths = require("../../config/paths");

//Config
const isInteractive = process.stdout.isTTY;
const protocol = process.env.HTTPS === "true" ? "https" : "http";
const HOST = process.env.HOST || "127.0.0.1";
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;

function start_webpack_dev_server() {
  checkBrowsers(paths.TravelerPath, isInteractive)
    .then(() => choosePort(HOST, DEFAULT_PORT))
    .then(port => {
      if (port == null) {
        console.log("Not found PORT");
        return;
      }

      const urls = prepareUrls(protocol, HOST, port);
      //DevServer
      const webpackDevConfig = require(paths.TravelerConfig +
        "/webpack.config")("devserver");
      const compiler = webpack(webpackDevConfig);
      const devServer = new WebpackDevServer(compiler);

      devServer.listen(DEFAULT_PORT, HOST, err => {
        if (err) {
          return console.log(err);
        }
        console.log(
          chalk.cyan(
            `Starting the development server...\n ${urls.localUrlForBrowser}`
          )
        );

        openBrowser(urls.localUrlForBrowser);
      });
    });
}
start_webpack_dev_server();
