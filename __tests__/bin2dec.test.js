const bin2dec = require('../src/bin2dec');

test('conversion from binary to decimal', () => {
  expect(bin2dec('01011')).toBe(11);
  expect(bin2dec('100')).toBe(4);
  expect(bin2dec('0')).toBe(0);
  expect(bin2dec('1')).toBe(1);
});

test('throw an error if a binary number is not valid', () => {
  expect(() => { 
    bin2dec('1010d1');
  }).toThrow();
});