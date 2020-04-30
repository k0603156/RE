const chalk = require("react-dev-utils/chalk");
const exec = require("util").promisify(require("child_process").exec);
module.exports = async (message, cwd) => {
  console.log(chalk.green("commit..."));
  try {
    exec("git status", { cwd });
    const trackedFile = await exec("git add .", { cwd });
    console.log(trackedFile.stdout);
    const commitedLog = await exec(`git commit -m "${message}"`, { cwd });
    console.log(commitedLog.stdout);
    console.log(`commit... Success -m ${message}`);
  } catch (error) {
    console.log(chalk.yellow("commit build 변경사항이 없습니다.\n"));
    console.log(error.stdout);
  }
};
