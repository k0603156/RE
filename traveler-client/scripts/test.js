"use strict";
process.env.BABEL_ENV = "test";
process.env.NODE_ENV = "test";
process.env.PUBLIC_URL = "";

process.on("unhandledRejection", err => {
  throw err;
});

const jest = require("jest");
const execSync = require("child_process").execSync;
let argv = process.argv.slice(2);

jest.run(argv);
