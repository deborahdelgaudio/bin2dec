#!/usr/bin/env node

const chalk = require('chalk');
const bin2dec = require('../src/bin2dec');

function log(binary, decimal) {
  console.log(`${chalk.magenta(binary)} -> ${chalk.greenBright(decimal)}`);
}

function cli(args) {
  args.forEach((binary) => {
    const decimal = bin2dec(binary);
    log(binary, decimal);
  });
}

cli(process.argv.slice(2));