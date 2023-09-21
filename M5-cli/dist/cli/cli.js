#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const dbConnect_1 = require("../db/dbConnect");
const seedProperty_1 = require("../commands/seedProperty");
const seedService_1 = require("../commands/seedService");
const deleteProperty_1 = require("../commands/deleteProperty");
const deleteService_1 = require("../commands/deleteService");
const program = new commander_1.Command();
(0, dbConnect_1.dbConnect)();
program
    .command("seedProperty")
    .description("Seed property database")
    .action(seedProperty_1.seedPropertyCmd);
program
    .command("seedService")
    .description("Seed service database")
    .action(seedService_1.seedServiceCmd);
program
    .command("deleteProperty")
    .description("Delete property database")
    .action(deleteProperty_1.deletePropertyCmd);
program
    .command("deleteService")
    .description("Delete service database")
    .action(deleteService_1.deleteServiceCmd);
program.parseAsync(process.argv);
//# sourceMappingURL=cli.js.map