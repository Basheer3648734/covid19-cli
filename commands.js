const program = require("commander");
const table = require("./table");
program.command("list").action(() => {
  console.log("listed");
  table();
});

program.parseAsync(process.argv);
