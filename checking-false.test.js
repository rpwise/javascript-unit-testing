// import multiple functions as array
const { falseIsFalse, zeroIsFalse1, zeroIsFalse2 } = require('./checking-false.js');

test('checks if false == false', () => {
  expect(falseIsFalse()).toBe(true);
});

test('checks if 0 == false', () => {
  expect(zeroIsFalse1()).toBe(true);
});

test('checks if 0 === false', () => {
    expect(zeroIsFalse2()).toBe(false);
  });