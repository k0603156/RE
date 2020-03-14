const chalk = require("chalk");
module.exports.NormLog = message =>
  console.error(chalk.green.bgGray.bold(message));
module.exports.ErrorLog = message =>
  console.error(chalk.red.bgGray.bold(message));
