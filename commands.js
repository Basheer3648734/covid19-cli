const program = require("commander");
const chalk = require("chalk");
const table = require("./table");

program
  .command("list")
  .option("-s,--state <name>", "name of the state")
  .action((optionData) => {
    console.log(chalk.bold.blue("welcome to covid19-cli"));
    console.log(chalk.bold.blue("---------------------------"));
    if (!optionData.state) {
      table();
    } else {
      table(optionData.state);
    }
  });

program.parseAsync(process.argv);
