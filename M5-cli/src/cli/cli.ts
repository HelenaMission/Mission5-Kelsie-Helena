#! /usr/bin/env node

import { Command } from "commander";
import { dbConnect } from "../db/dbConnect";
import { seedPropertyCmd } from "../commands/seedProperty";
import { seedServiceCmd } from "../commands/seedService";
import { seedReviewCmd } from "../commands/seedReview";
import { deletePropertyCmd } from "../commands/deleteProperty";
import { deleteServiceCmd } from "../commands/deleteService";
import { deleteReviewCmd } from "../commands/deleteReview";

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
  .command("seedReview")
  .description("Seed review database")
  .action(seedReviewCmd);

program
  .command("deleteProperty")
  .description("Delete property database")
  .action(deletePropertyCmd);

program
  .command("deleteService")
  .description("Delete service database")
  .action(deleteServiceCmd);

program
  .command("deleteReview")
  .description("Delete review database")
  .action(deleteReviewCmd);

program.parseAsync(process.argv);
