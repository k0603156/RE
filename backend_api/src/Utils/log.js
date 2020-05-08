const chalk = require("chalk");

module.exports.NormLog = (message) => console.log(chalk.green.bgGray.bold(message));
module.exports.ErrorLog = (message) => console.warn(chalk.red.bgGray.bold(message));
