#! /usr/bin/env node

import { Command } from "commander";
import { dbConnect } from "../db/dbConnect";
import { seedPropertyCmd } from "../commands/seedProperty";
import { seedServiceCmd } from "../commands/seedService";
import { deletePropertyCmd } from "../commands/deleteProperty";
import { deleteServiceCmd } from "../commands/deleteService";

const program = new Command();

dbConnect();

program
  .command("seedProperty")
  .description("Seed property database")
  .action(seedPropertyCmd);

program
  .command("seedService")
  .description("Seed service database")
  .action(seedServiceCmd);

program
  .command("deleteProperty")
  .description("Delete property database")
  .action(deletePropertyCmd);

program
  .command("deleteService")
  .description("Delete service database")
  .action(deleteServiceCmd);

program.parseAsync(process.argv);
