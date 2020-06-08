const chalk = require("chalk");
const Table = require("cli-table");
const data = require("./data/data");
module.exports = async (stateName = null) => {
  try {
    const table = new Table({
      head: [
        chalk.white("S.no"),
        chalk.white("State/U.T"),
        chalk.red("Confirmed"),
        chalk.blue("Active"),
        chalk.green("Recovered"),
        chalk.gray("Deceased"),
        chalk.white("Last Updated"),
      ],
    });
    if (!stateName) {
      const statesData = await data();
      statesData.map(
        (
          { state, active, confirmed, recovered, deaths, lastupdatedtime },
          index
        ) => {
          if (index == 0) {
            table.push([
              chalk.white.bold(index),
              chalk.white.bold(state),
              chalk.red.bold(confirmed),
              chalk.blue.bold(active),
              chalk.green.bold(recovered),
              chalk.gray.bold(deaths),
              chalk.white.bold(lastupdatedtime),
            ]);
          } else {
            table.push([
              chalk.white(index),
              chalk.white(state),
              chalk.red(confirmed),
              chalk.blue(active),
              chalk.green(recovered),
              chalk.gray(deaths),
              chalk.white(lastupdatedtime),
            ]);
          }
        }
      );
    } else {
      const [
        { state, confirmed, active, recovered, deaths, lastupdatedtime },
      ] = await data(stateName);
      table.push([
        chalk.white(1),
        chalk.white(state),
        chalk.red(confirmed),
        chalk.blue(active),
        chalk.green(recovered),
        chalk.gray(deaths),
        chalk.white(lastupdatedtime),
      ]);
    }
    console.log(table.toString());
  } catch (e) {
    console.log(chalk.red("unable to find data for specific state"));
  }
};
