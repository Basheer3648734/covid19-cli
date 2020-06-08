const chalk = require("chalk");
const Table = require("cli-table");
const data = require("./data/data");
module.exports = (data) => {
  const table = new Table({
    head: [
      chalk.white("S.no"),
      chalk.white("State"),
      chalk.red("Confirmed"),
      chalk.blue("Active"),
      chalk.green("Recovered"),
      chalk.gray("Deceased"),
    ],
  });

  console.log(table.toString());
  data;
};
