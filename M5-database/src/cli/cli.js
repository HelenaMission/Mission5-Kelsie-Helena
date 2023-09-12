import commander from 'commander';
import { dbConnect } from '../db/dbConnect';
import { seedCmd } from '../commands/seed';

const program = new commander.Command();

dbConnect();

program.command('seed').description('Seed database').action(seedCmd);

program.parseAsync(process.argv);
