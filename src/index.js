const bin2dec = require('./bin2dec');

function cli(args) {
  args.forEach((binary) => {
    const decimal = bin2dec(binary);
    console.log(`${binary} -> ${decimal}`);
  });
}

cli(process.argv.slice(2));