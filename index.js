import chalk,{Chalk} from 'chalk';

const log = console.log;

let colorArg = process.argv[2] || 'yellow';
const textArg = process.argv[3] || 'Hello World';

log(chalk.blue('Welcome to pigment-colors:'));
log(chalk.blue('Enter your color and text:'));
try {
  const color = chalk[colorArg.toString()];
  log(color(textArg));
} catch (e) {
  log(chalk.red("Terminal does not support color"));
}
