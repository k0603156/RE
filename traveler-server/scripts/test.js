"use strict";

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = "test";
process.env.NODE_ENV = "test";
process.env.PUBLIC_URL = "";

process.on("unhandledRejection", err => {
  throw err;
});
const chalk = require("chalk");
const { log, error } = console;
const jest = require("jest");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const lsExample = async () => {
  log(`${chalk.green.bgGray.bold("Sequelize TEST DB 초기화")}`);
  const { stdout, stderr } = await exec("sequelize db:migrate:undo:all", {
    cwd: "./src/Models"
  });
  log("결과:", stdout);
  error("에러:", stderr);
};
lsExample().then(_ => {
  let argv = process.argv.slice(2);
  jest.run(argv);
});
