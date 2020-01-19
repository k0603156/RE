"use strict";

const fs = require("fs");
const path = require("path");
const paths = require("./paths");
const chalk = require("react-dev-utils/chalk");
const resolve = require("resolve");

function getWebpackAliases(options = {}) {
  const baseUrl = options.baseUrl;
  if (!baseUrl) {
    return {};
  }
  const baseUrlResolved = path.resolve(paths.TravelerPath, baseUrl);
  if (path.relative(paths.TravelerPath, baseUrlResolved) === "") {
    return {
      src: paths.TravelerSrc
    };
  }
  ///경로 지정
  //tsconfig.baseurl === ./src
  if (path.relative(paths.TravelerPath, baseUrlResolved) === "src") {
    return {
      "@Ssr": path.resolve(__dirname, "../src/SSR/"),
      "@Client": path.resolve(__dirname, "../src/CLIENT/")
    };
  }
}

function getModules() {
  const hasTsConfig = fs.existsSync(paths.TravelerTsConfig);
  let config;
  if (hasTsConfig) {
    const ts = require(resolve.sync("typescript", {
      basedir: paths.TravelerNodeModules
    }));
    config = ts.readConfigFile(paths.TravelerTsConfig, ts.sys.readFile).config;
  }

  config = config || {};
  const options = config.compilerOptions || {};

  return {
    webpackAliases: getWebpackAliases(options)
  };
}

module.exports = getModules();
