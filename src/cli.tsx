import commander from 'commander';
import {version} from '../package.json';
import {buildDocs} from './commands/build-docs';
import {transform} from './commands/transform';

const program = new commander.Command();

program.version(version);

program.command('transform')
  .action(transform);

program.command('build:docs')
  .action(buildDocs);

program.parse(process.argv);
