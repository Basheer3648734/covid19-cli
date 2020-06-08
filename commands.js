const program = require("commander");
const table = require("./table");
program
  .command("list")
  .option("-s,--state <name>", "name of the state")
  .action((optionData) => {
    if (!optionData.state) {
      table();
    } else {
      table(optionData.state);
    }
  });

program.parseAsync(process.argv);
