function bin2dec(string) {
  if (string.match(/^[0-1]+$/g) === null) {
    throw new Error('A binary number is made of only 0 and 1');
  }

  let sum = 0;
  const numbers = string.split('').reverse();

  numbers.forEach((value, index) => {
    sum += (value * Math.pow(2, index));
  });

  return sum;
}

module.exports = bin2dec;