/* eslint-disable strict */

"use strict";

const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
module.exports = {
  dotenv: resolveApp("src/Models/config/.env"),
  appSrc: resolveApp("src"),
};
